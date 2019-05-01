import * as LocationCollection from './LocationCollection'

export default class WeatherDelegate {
    public static fetchCurrentWeather(location: LocationCollection.Location): Promise<any> {
        return fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${location.latitude}&lon=${location.longitude}&appid=4b77a3a82b2aac2ce6ff794a32bf23a9`);
    }
}