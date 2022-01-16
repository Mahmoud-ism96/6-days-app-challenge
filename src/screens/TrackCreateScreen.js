// import '../_mockLocation';
import React, {useContext, useCallback} from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { withNavigationFocus } from 'react-navigation';
import { Context as LocationContext } from '../context/LocationContext';
import Map from '../components/Map';
import useLocation from '../hooks/useLocation';
import TrackForm from '../components/TrackForm';


const TrackCreateScreen = ({isFocused}) => {
    const {state: {recording}, addLocation} = useContext(LocationContext);
    const callback = useCallback ((location) => {
        //Update callback when the User Start/Pause, or Stop Tracking and Add the Current Location to the Location Array
        addLocation(location, recording);
    }, [recording]);
    const [err] = useLocation(isFocused || recording, callback);
    //Checks if Screen is focused, and if the Start/Pause, or Stop button is triggered and sends it back to the useLocation hook

    return (
        <View style={styles.container}>
            <Map/>
            <View style={{borderBottomWidth:1}}/>
            {err ?
            <Text>Please Turn on your location</Text>
            :null}
            <TrackForm/>
        </View>
    );
};

TrackCreateScreen.navigationOptions = {
    title: 'New Session',
    headerTitleStyle:{
        color: '#319177',
    },
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor:'#fff'
    },
    title: {
        fontSize: 25,
        padding: 10,
        color: '#319177',
    },
    titleIcon : {
        width: 25,
        height: 25,
    },
});

export default withNavigationFocus(TrackCreateScreen);