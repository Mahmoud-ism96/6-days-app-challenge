import React, {useContext, useEffect} from 'react';
import {View, StyleSheet, Text, Button, FlatList, TouchableOpacity} from 'react-native';
import { ListItem, withTheme } from 'react-native-elements';
import { NavigationEvents } from 'react-navigation';
import {Context as TrackContext} from '../context/TrackContext';

const TrackHistoryScreen = ({navigation}) => {
    const {state, fetchTracks} = useContext(TrackContext);

    return (
    <>
        <NavigationEvents onWillFocus={fetchTracks}/>
        <FlatList
          data={state}
          keyExtractor={(item) => item._id}
          renderItem={({ item }) => {
            return (
              <TouchableOpacity onPress={() => navigation.navigate('TrackDetail',{_id: item._id})}>
                <ListItem style={{borderBottomWidth:0.5}}>
                  <ListItem.Content >
                      <View style={styles.container}>
                        <Text style={styles.title}>Track Title: </Text>
                        <Text style={{marginBottom:3}} >{item.name}</Text>
                      </View>
                      <View style={styles.container}>
                        <Text style={styles.title}>Session Time: </Text>
                        <Text >{item.time}</Text>
                      </View>
                  </ListItem.Content>
                  <ListItem.Chevron />
                </ListItem>
              </TouchableOpacity>
            );
          }}
        />
    </>
)};

TrackHistoryScreen.navigationOptions = {
  title: 'Track History',
  headerTitleStyle:{
      color: '#319177'
  },
};

const styles = StyleSheet.create({
  container: {
    flexDirection:'row',
  },
  title: {
    color: '#319177',
    fontWeight: 'bold'
  }
});

export default TrackHistoryScreen;