import React, {useContext} from 'react';
import {View, StyleSheet} from 'react-native';
import {Input, Button} from 'react-native-elements';
import {Context as LocationContext} from '../context/LocationContext';
import useSaveTrack from '../hooks/useSaveTrack';

const TrackForm = () => {
    //Reusable Form for New Tracks
    const {state:{name, recording, locations}, startRecording, stopRecording, changeName} = useContext(LocationContext);
    const [saveTrack] = useSaveTrack();
    return (
    <>
        <Input value={name} onChangeText={changeName} placeholder="Enter Track name"/>
        {recording ? (
            <View>
                <Button title='Pause'  /> 
                <Button title='Stop' onPress={stopRecording}/> 
            </View>
        ) : (
            <Button title='Start Tracking' onPress={startRecording}/> 
        )}
        {
            !recording && locations.length
            ? <Button title='Save Recording' onPress={saveTrack}/>
            : null
        }
    </>
    );
};

const styles = StyleSheet.create({});

export default TrackForm;