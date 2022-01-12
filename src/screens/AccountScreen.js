import React,{useContext} from 'react';
import {View, StyleSheet, Text} from 'react-native';
import {Button} from 'react-native-elements';
import {Context as AuthContext} from '../context/AuthContext';

const AccountScreen = () => {
    const {signout} = useContext(AuthContext);

    return(
    <>
        <Text>Account Screen</Text>
        <Button title="Sign Out" onPress={signout}/>
    </>
)};

const styles = StyleSheet.create({});

export default AccountScreen;