import React, {useContext} from 'react';
import {View, StyleSheet} from 'react-native';
import {Input, Button} from 'react-native-elements';
import {Context as LocationContext} from '../context/LocationContext';

const TrackForm = () => {
    //Reusable Form for New Tracks
    const {state:{name, recording}, startRecording, stopRecording, changeName} = useContext(LocationContext);
    return (<>
        <Input value={name} onChangeText={changeName} placeholder="Enter Track name"/>
        {recording 
        ? <View>
            <Button title='Pause'  /> 
            <Button title='Stop'   onPress={stopRecording}/> 
        </View>
        : <Button title='Start Tracking' onPress={startRecording}/> 
    }
    </>)
};

const styles = StyleSheet.create({});

export default TrackForm;