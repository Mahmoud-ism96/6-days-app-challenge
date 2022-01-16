import React from 'react'
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import AccountScreen from './src/screens/AccountScreen'
import SigninScreen from './src/screens/SigninScreen'
import SignupScreen from './src/screens/SignupScreen'
import TrackCreateScreen from './src/screens/TrackCreateScreen'
import TrackDetailScreen from './src/screens/TrackDetailScreen'
import TrackHistoryScreen from './src/screens/TrackHistoryScreen';
import AuthScreen from './src/screens/AuthScreen';
import {Provider as AuthProvider} from './src/context/AuthContext';
import {Provider as LocationProvider} from './src/context/LocationContext';
import {Provider as TrackProvider} from './src/context/TrackContext';
import { setNavigator } from './src/NavigationRef';
import {MaterialCommunityIcons} from '@expo/vector-icons';


const switchNavigator = createSwitchNavigator({
  AuthScreen: AuthScreen,
  loginFlow: createStackNavigator({
    Signup: SignupScreen,
    Signin: SigninScreen
  }),
  mainFlow: createBottomTabNavigator({
    trackCreateFlow: createStackNavigator({
      TrackCreate: TrackCreateScreen,
    },{
    navigationOptions: {
      title: 'New Session', 
      tabBarIcon: <MaterialCommunityIcons name="run-fast" size={24} color="#319177" />
    }}),
    trackFlow: createStackNavigator({
      TrackHistory: TrackHistoryScreen,
      TrackDetail: TrackDetailScreen
    },{
      navigationOptions: {
        title: 'Track History', 
        tabBarIcon: <MaterialCommunityIcons name="history" size={24} color="#319177" />
      }}),
    accountFlow: createStackNavigator({
      Account: AccountScreen,
    },{
      navigationOptions: {
        title: 'Account', 
        tabBarIcon: <MaterialCommunityIcons name="account" size={24} color="#319177" />
      }}),
  },
  {
    tabBarOptions: {
      activeTintColor: '#319177',
    }
  }
  )
});

const App = createAppContainer(switchNavigator);

export default () => {
  return (
    <TrackProvider>
      <LocationProvider>
        <AuthProvider>
          <App ref={(navigator) => {setNavigator(navigator)}}/>
        </AuthProvider>
      </LocationProvider>
    </TrackProvider>
  );
};