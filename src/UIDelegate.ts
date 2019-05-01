import * as LocationCollection from './LocationCollection'
import WeatherDelegate from './WeatherDelegate'

export default class UIDelegate {

    public static documentHasLoaded(): void {
        UIDelegate.linkElements();
        LocationCollection.getLocation().then(location => {
            WeatherDelegate.fetchCurrentWeather(location.coords as LocationCollection.Location).then(response => response.json()).then(response => {
                if (response.main) {
                    console.info(response);
                    UIDelegate.displayWeatherInformation(response);
                }
            });
        });
    }

    private static linkElements(): void {

    }

    private static displayWeatherInformation(weatherInformation: any): void {

        let weatherIcon: HTMLImageElement = document.querySelector('#weather-icon');
        let weatherBackground: HTMLImageElement = document.querySelector('#weather-background');

        let weather = weatherInformation.weather[0];
        let mapedWeatherName = UIDelegate.mapWeatherDescription(weather.main);
        weatherIcon.src = `icons/${mapedWeatherName}.svg`;
        weatherBackground.src = `images/${mapedWeatherName}.jpg`;


    }

    private static mapWeatherDescription(weatherDescription: string): string {
        switch (weatherDescription.toLowerCase()) {
            case 'clouds':
                return 'cloudy';
            case 'rain':
                return 'rainy';
            default:
                return 'warn';
        }
    }

}