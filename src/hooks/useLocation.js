import {useState, useEffect} from 'react';
import { requestForegroundPermissionsAsync, requestBackgroundPermissionsAsync, watchPositionAsync, Accuracy } from 'expo-location';

export default (shouldTrack, callback) => {
    //Hook used to update location
    const [err, setErr] = useState(null);
  
    useEffect(() => {
        //Start/Stop tracking every time the User presses Start/Pause, or Stop button
        let tracker, trackBackground;
        const startRecording = async () => {
            try{
                //Request Location Permissions (if its not already obtained)
                const foreGranted = await requestForegroundPermissionsAsync();
                const backGranted =await requestBackgroundPermissionsAsync();
                if (!foreGranted || !backGranted) {
                    //Checks if Permissions are granted
                    throw new Error('Location permission not granted');
                  }
                tracker = await watchPositionAsync({
                    //Gets current location 
                    accuracy: Accuracy.BestForNavigation,
                    timeInterval: 2000,
                    distanceInterval:5,
                }, 
                    callback
                );                
            } catch (e){
                setErr(e);
            }
        };
    
        if(shouldTrack){
            startRecording();
        } else{
            if(tracker){
                tracker.remove();
            }
            tracker = null;   
        }
        return () => {
            if(tracker){
                tracker.remove();
            }
        };
    },[shouldTrack, callback]); 

    return [err];
};