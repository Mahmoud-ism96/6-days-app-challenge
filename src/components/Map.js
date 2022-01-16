import React, {useContext} from "react";
import {StyleSheet, ActivityIndicator} from 'react-native';
import MapView, { Polyline, Circle } from "react-native-maps";
import { Context as LocationContext } from '../context/LocationContext';


const Map = () => {
    const {state: {currentLocation, locations}} = useContext(LocationContext);

    if(!currentLocation){
        return <ActivityIndicator size="large" style={{marginTop: 200}}/>;
    };

    return (
        <MapView 
        style={styles.map}
        initialRegion={{
            ...currentLocation.coords,
            latitudeDelta:0.0008,
            longitudeDelta:0.0008,
        }}>
            <Circle
                center={currentLocation.coords}
                radius={3}
                strokeColor="rgba(49,145,119, 1)"
                fillColor="rgba(110,178,159, 0.2)"
            />
            <Polyline coordinates={locations.map((location) => location.coords)}/>
        </MapView>
    );
};

const styles = StyleSheet.create({
    map: {
        height:300,
    }
});

export default Map; 