import React, {useContext} from 'react';
import {View, StyleSheet, ImageBackground} from 'react-native';
import { NavigationEvents } from 'react-navigation';
import {Context as AuthContext} from '../context/AuthContext';
import AuthForm from '../components/AuthForm';
import NavLink from '../components/NavLink';

const SignupScreen = () => {
    const {state, signup, clearErrorMessage} = useContext(AuthContext);

    return(
        <View style={styles.container}>
            <ImageBackground 
            source={require('../images/signup.jpg')} 
            resizeMode="cover" 
            style={styles.image} 
            imageStyle= {{opacity:0.5}}
            >
                <View style={styles.textBackground}>
                    <AuthForm
                    headerText={"Hello!\nSign up to get started"}
                    errorMessage={state.errorMessage}
                    buttonTitle="Sign Up"
                    onSubmit={signup}
                    />
                    <NavLink
                    preText="Already have an account?"
                    text="Sign In"
                    screenName="Signin"
                    />
                    <NavigationEvents 
                    onWillFocus={clearErrorMessage} 
                    />
                </View>
            </ImageBackground>
        </View>
    );
};

SignupScreen.navigationOptions = () => {
    //Hiding App header
    return {
      headerShown: false,
    };
  };

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
    },textBackground: {
        backgroundColor:'white',
         paddingBottom: 20,
         borderRadius: 25,
         borderWidth: 3,
         borderColor:'white'
    },image: {
        flex: 1,
        justifyContent: 'center',
    }
});

export default SignupScreen;