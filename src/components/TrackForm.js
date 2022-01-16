import React, {useContext, useState} from 'react';
import {View, StyleSheet, TouchableOpacity, Text, Alert} from 'react-native';
import {Input, Button} from 'react-native-elements';
import { TextInput } from 'react-native-gesture-handler';
import StopWatch from 'react-native-stopwatch-timer/lib/stopwatch';
import {Context as LocationContext} from '../context/LocationContext';
import useSaveTrack from '../hooks/useSaveTrack';

const TrackForm = () => {
    //Reusable Form for New Tracks
    const {state:{name, recording, locations, time}, startRecording, stopRecording, changeName, saveTime} = useContext(LocationContext);
    const [saveTrack] = useSaveTrack();
  
    const [title, setTitle] = useState('Start Tracking');

    const [isStopwatchStart, setIsStopwatchStart] = useState(false);
    const [resetStopwatch, setResetStopwatch] = useState(false);
    let sessionTime= '';

    const createTwoButtonAlert = () =>
    Alert.alert(
      "End Session",
      "Are you sure you want to End the Session?",
      [
        {
          text: "Cancel",
          style: "cancel"
        },
        { text: "OK", onPress: () => {
          saveTime(sessionTime);
          saveTrack();
          setTimeout(() => {
            setTitle('Start Tracking');
          }, 3000);
          setIsStopwatchStart(false);
          setResetStopwatch(true);
        }}
      ]
    );
    
    return (
    <View style={styles.container}>
        <TextInput style={styles.trackTitle} value={name} onChangeText={changeName} placeholder="Enter Session Name"/>
        <StopWatch
            start={isStopwatchStart}
            reset={resetStopwatch}
            options={options}
            getTime={(t)=>{
              sessionTime=t;
            }}
          />
        <View style={{margin:5}}></View>
        {recording ? (
            <Button titleStyle={styles.button} type='clear' title='Pause' on onPress={() => {
              saveTime(sessionTime);
              stopRecording();
              setIsStopwatchStart(!isStopwatchStart);
              setResetStopwatch(false);}}
            />
        ) : (
            <Button titleStyle={styles.button} type='clear' title={title} onPress={() => {
              setTitle('Continue Tracking');
              startRecording();
              setIsStopwatchStart(!isStopwatchStart);
              setResetStopwatch(false);}}/> 
        )}
        <View style={{margin:10}}></View>
        {
            (!recording ) && locations.length
            ? <Button titleStyle={styles.stopButton} type='clear' title='Stop' onPress={() => {
              createTwoButtonAlert();
            }}/>
            : null
          }
    </View>
    );
};


const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
    },
    trackTitle: {
      borderRadius: 8,
      borderWidth: 2,
      borderColor: '#319177',
      width: '85%', 
      margin: 12,
      paddingHorizontal: 8,
      paddingVertical:2,
      fontSize: 18,
    },
    button: {
      color: '#319177',
      fontSize: 20,
    },
    stopButton: {
      color: '#d71b1b',
      fontSize: 20,
    }
  });
  
  const options = {
    container: {
      padding: 5,
      width: 200,
      alignItems: 'center',
    },
    text: {
      fontSize: 25,
      color: '#000',
    },
  };

export default TrackForm;