import React, {useContext} from "react";
import {StyleSheet, ActivityIndicator} from 'react-native';
import MapView, { Polyline, Circle } from "react-native-maps";
import { Context as LocationContext } from '../context/LocationContext';


const Map = () => {
    const {state: {currentLocation}} = useContext(LocationContext);

    if(!currentLocation){
        return <ActivityIndicator size="large" style={{marginTop: 200}}/>;
    };

    initialLocation = {
        longitude: 30.007716,
        latitude: 31.438092,
      };

    return (
        <MapView 
        style={styles.map}
        initialRegion={{
        ...currentLocation.coords,
        latitudeDelta:0.001,
        longitudeDelta:0.001,
        }}>
            <Circle
                center={currentLocation.coords}
                radius={5}
                strokeColor="rgba(49,145,119, 1)"
                fillColor="rgba(110,178,159, 0.2)"
            />
        </MapView>
    );
};

const styles = StyleSheet.create({
    map: {
        height:300,
    }
});

export default Map; 