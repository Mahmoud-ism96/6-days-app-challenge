import React, {useContext} from 'react';
import {View, StyleSheet, Text} from 'react-native';
import { Context as TrackContext } from '../context/TrackContext';
import MapView, {Polyline} from 'react-native-maps';
import getDistance from 'geolib/es/getDistance';

const TrackDetailScreen = ({navigation}) => {
    const {state} = useContext(TrackContext);
    const _id = navigation.getParam('_id');
    const track = state.find(t => t._id === _id);

    let meterDistance = 0;
    let stepDistance = 0;
    let lat0,long0,lat1,long1;

    const initialCords = track.locations[0].coords;

    for (let index = 0; index < (track.locations.length) - 1; index++) {

        lat0 = track.locations[index].coords.latitude;
        long0 = track.locations[index].coords.longitude;
        lat1 = track.locations[index + 1].coords.latitude;
        long1 = track.locations[index + 1].coords.longitude;

        meterDistance = meterDistance + (getDistance(
            { latitude: lat0, longitude: long0 },
            { latitude: lat1, longitude: long1 }));
        
        stepDistance = Math.floor(meterDistance * 1.31);           
    };

    return (
    <View style={styles.container}>
        <MapView
            style={styles.map}
            initialRegion={{
                longitudeDelta: 0.001,
                latitudeDelta: 0.001,
                ...initialCords
            }}
        >
            <Polyline coordinates={track.locations.map(location => location.coords)} />
        </MapView>
        <View style={styles.outerContainer} />
        <View style={styles.innerContainer}>
            <Text style={styles.title}>Session Name: </Text>
            <Text style={styles.details}>{track.name}</Text>
        </View>
        <View style={styles.innerContainer}>
            <Text style={styles.title}>Session Time: </Text>
            <Text style={styles.details}>{track.time}</Text>
        </View>
        <View style={styles.innerContainer}>
            <Text style={styles.title}>Steps Walked: </Text>
            <Text style={styles.details}>{stepDistance} Step</Text>
        </View>
        <View style={styles.innerContainer}>
            <Text style={styles.title}>Meters Covered: </Text>
            <Text style={styles.details}>{meterDistance} Meter</Text>
        </View>
    </View>
    )
};

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#fff'
    },
    outerContainer: {
        borderBottomWidth: 0.5,
        marginBottom: 10,
    },
    innerContainer: {
        flexDirection: 'row',
        alignItems:'flex-end',
        marginBottom: 5,
        marginLeft:5,
    },
    title:{
        color: '#319177',
        fontWeight: 'bold',
        fontSize: 18
    },
    details: {
        fontSize:18,
    },
    map: {
        height: 300,
    }
});

TrackDetailScreen.navigationOptions = {
    title: 'Track Details',
    headerTitleStyle:{
        color: '#319177',
    },
};

export default TrackDetailScreen;