import React, {useContext} from 'react';
import {StyleSheet, Text} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Context as LocationContext } from '../context/LocationContext';
import Map from '../components/Map';
import useLocation from '../hooks/useLocation';

const TrackCreateScreen = () => {
    const {addLocation} = useContext(LocationContext);
    const [err] = useLocation(addLocation);

    return (
        <SafeAreaView forceInset={{top:'always'}}>
            <Text>Track Create Screen</Text>
            <Map/>
            {err ?
            <Text>Please Turn on your location</Text>
            :null}
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({});

export default TrackCreateScreen;