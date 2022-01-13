import React, {useContext} from 'react';
import {View, StyleSheet, Text, Button, FlatList, TouchableOpacity} from 'react-native';
import { ListItem } from 'react-native-elements';
import { NavigationEvents } from 'react-navigation';
import {Context as TrackContext} from '../context/TrackContext';

const TrackHistoryScreen = ({navigation}) => {
    const {state, fetchTracks} = useContext(TrackContext);
    console.log(state);
    return (
    <>
        <NavigationEvents onWillFocus={fetchTracks}/>
        <Text>Track History</Text>
        <FlatList
        data={state}
        keyExtractor={(item) => item._id}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity onPress={() => navigation.navigate('TrackDetail',{_id: item._id})}>
              <ListItem>
                <ListItem.Content>
                  <ListItem.Title>{item.name}</ListItem.Title>
                </ListItem.Content>
                <ListItem.Chevron />
              </ListItem>
            </TouchableOpacity>
          );
        }}
      />
    </>
)};

const styles = StyleSheet.create({});

export default TrackHistoryScreen;