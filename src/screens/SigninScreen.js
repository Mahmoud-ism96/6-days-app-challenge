import React, {useContext} from 'react';
import {View, StyleSheet, ImageBackground} from 'react-native';
import { NavigationEvents } from 'react-navigation';
import {Context as AuthContext} from '../context/AuthContext';
import AuthForm from '../components/AuthForm';
import NavLink from '../components/NavLink';

const SigninScreen = () => {
    const {state, signin, clearErrorMessage} = useContext(AuthContext);

    return(
        <View style={styles.container}>
            <ImageBackground 
            source={require('../images/signin.jpg')} 
            resizeMode="cover" 
            style={styles.image} 
            imageStyle= {{opacity:0.5}}
            >
                <View style={styles.textBackground}>
                    <AuthForm
                    headerText={"Sign in\nand get back on track!"}
                    errorMessage={state.errorMessage}
                    buttonTitle="Sign In"
                    onSubmit={signin}
                    />
                    <NavLink
                    preText="New User?"
                    text="Sign Up"
                    screenName="Signup"
                    />
                    <NavigationEvents 
                    onWillFocus={clearErrorMessage} 
                    />
                </View>
            </ImageBackground>
        </View>
    );
};

SigninScreen.navigationOptions = () => {
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

export default SigninScreen;