import { PermissionsAndroid } from 'react-native';

export default async function requestLocationPermission() {
    const rationale = {
        title: 'bgMyWeather',
        message: 'bgMyWeather wants to access your location',
        buttonNeutral: "Ask Me Later",
        buttonNegative: "Cancel",
        buttonPositive: "OK"
    };

    try {
        const granted = await PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION, rationale);

        if (granted === PermissionsAndroid.RESULTS.GRANTED) {
            return true;
        } else {
            console.log("location permission denied");

            return false;
        };
    } catch (error) {
        console.error(error);
    };
};