
export interface Location {
    longitude: number,
    latitude: number
}

export function getLocation(): Promise<any> {
    return new Promise((resolve: any, reject: any) => {
        navigator.geolocation.getCurrentPosition(resolve, reject);
    });
}