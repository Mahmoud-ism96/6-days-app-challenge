import React,{useContext} from 'react';
import {StyleSheet, View} from 'react-native';
import {Button} from 'react-native-elements';

import {Context as AuthContext} from '../context/AuthContext';

const AccountScreen = () => {
    const {signout} = useContext(AuthContext);

    return(
    <View style={styles.container}>
        <Button titleStyle={styles.button} type='clear' title="Sign Out" onPress={signout}/>
    </View>
)};

const styles = StyleSheet.create({
    container: {
        flex:1,
        alignItems:'center',
        justifyContent:'flex-end',
        backgroundColor:'#fff'
    },   
    button: {
        color: '#319177',
        fontSize: 25,
        marginBottom:10
    }
});

AccountScreen.navigationOptions = {
    title: 'Account',
    headerTitleStyle:{
        color: '#319177',
    },
};

export default AccountScreen;