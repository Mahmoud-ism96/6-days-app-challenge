import {useState, useEffect} from 'react';
import { requestForegroundPermissionsAsync, requestBackgroundPermissionsAsync, requestPermissionsAsync, watchPositionAsync, Accuracy } from 'expo-location';

export default (callback) => {
    const [err, setErr] = useState(null);

    const startRecording = async () => {
        //Reusable hook to update the current location
        try{
            //Request Location Permission
            await requestForegroundPermissionsAsync();
            await watchPositionAsync({
                accuracy: Accuracy.BestForNavigation,
                timeInterval: 100,
                distanceInterval:10,
            }, 
                callback
            );
        } catch (e){
            setErr(e);
        }
    };

    useEffect(() => {
        startRecording();
    },[]); 

    return [err];
};