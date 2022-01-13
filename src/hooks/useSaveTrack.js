import { useContext } from "react";
import { Context as LocationContext } from "../context/LocationContext";
import { Context as TrackContext } from "../context/TrackContext";
import { navigate } from '../NavigationRef';

export default () => {
    //Hook used to Save Tracks
    const {createTrack} = useContext(TrackContext);
    const {state: {locations, name}, reset} = useContext(LocationContext);

    const saveTrack = async () => {
        //Saves the new Track, Rest New Track Form, and Navigates back to Track History
        await createTrack(name, locations);
        reset();
        navigate('TrackHistory');
    };
    return [saveTrack];
};