import '../_mockLocation';
import React, {useContext, useCallback} from 'react';
import {StyleSheet, Text} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { withNavigationFocus } from 'react-navigation';
import { Context as LocationContext } from '../context/LocationContext';
import Map from '../components/Map';
import useLocation from '../hooks/useLocation';
import TrackForm from '../components/TrackForm';

const TrackCreateScreen = ({isFocused}) => {
    const {state: {recording}, addLocation} = useContext(LocationContext);
    const callback = useCallback ((location) => {
        //Update callback when the User Start/Pause, or Stop tracking
        addLocation(location, recording);
    }, [recording]);
    const [err] = useLocation(isFocused || recording, callback);
    //Checks if Screen is focused, and if the Start/Pause, or Stop button is triggered and sends it back to the useLocation hook

    return (
        <SafeAreaView forceInset={{top:'always'}}>
            <Text>Track Create Screen</Text>
            <Map/>
            {err ?
            <Text>Please Turn on your location</Text>
            :null}
            <TrackForm/>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({});

export default withNavigationFocus(TrackCreateScreen);