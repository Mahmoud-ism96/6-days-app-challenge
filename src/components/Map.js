import React, {useContext} from "react";
import {StyleSheet, ActivityIndicator} from 'react-native';
import MapView, { Polyline, Circle } from "react-native-maps";
import { Context as LocationContext } from '../context/LocationContext';


const Map = () => {
    const {state: {currentLocation, locations}} = useContext(LocationContext);

    if(!currentLocation){
        return <ActivityIndicator size="large" style={{marginTop: 200}}/>;
    };

    initialLocation = {
        //An Initial Location for live testing
        longitude: 31.438079,
        latitude: 30.007743,
      };

    return (
        <MapView 
        style={styles.map}
        initialRegion={{
        ...currentLocation.coords,
        latitudeDelta:0.01,
        longitudeDelta:0.01,
        }}>
            <Circle
                center={currentLocation.coords}
                radius={5}
                strokeColor="rgba(49,145,119, 1)"
                fillColor="rgba(110,178,159, 0.2)"
            />
            <Polyline coordinates={locations.map(location => location.coords)}/>
        </MapView>
    );
};

const styles = StyleSheet.create({
    map: {
        height:300,
    }
});

export default Map; 