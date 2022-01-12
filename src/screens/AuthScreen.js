import React, {useContext, useEffect} from 'react';
import {ImageBackground, StyleSheet, View} from 'react-native';
import {Context as AuthContext} from '../context/AuthContext';

const AuthScreen = () => {
    const {localSignin} = useContext(AuthContext);

    useEffect(() => {
        //Automatically run when the App is launched, and it Signs In automatically if token exist on device
        localSignin();
    }, []);

    return (
        <View style={styles.container}>
            <ImageBackground 
            source={require('../images/runIcon.png')} 
            style={styles.image} 
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    image: {
        width: 200,
        height: 200,
    }
});

export default AuthScreen;