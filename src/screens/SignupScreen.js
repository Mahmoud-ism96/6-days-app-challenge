import React, {useState, useContext} from 'react';
import {View, StyleSheet, ImageBackground} from 'react-native';
import {Text, Input, Button} from 'react-native-elements';
import { TouchableOpacity } from 'react-native-gesture-handler';
import {Context as AuthContext} from '../context/AuthContext';

const SignupScreen = ({navigation}) => {
    const {state, signup} = useContext(AuthContext);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    return(
    <View style={styles.container}>
        <ImageBackground source={require('../images/shoes.jpg')} resizeMode="cover" style={styles.image} imageStyle= {{opacity:0.5}}>
            <View style={styles.textBackground}>
                <Text style={styles.title}>Hello!{"\n"}Sign up to get started</Text>
                <Input label="Email" value={email} onChangeText={setEmail} autoCapitalize="none" autoCorrect={false} />
                <Input label="Password" value={password} onChangeText={setPassword} autoCapitalize="none" autoCorrect={false} secureTextEntry/>
                <Button title="Sign Up" type='clear' titleStyle={{color:'#319177', fontSize:15 }} onPress={() => signup({email, password})}  />
                {state.errorMessage ? (<Text style={styles.errorMessage}>{state.errorMessage}</Text>) : null}
                <View style={{flexDirection:"row"}}>
                    <Text style={{marginLeft:15}}>Already have an account?</Text>
                    <TouchableOpacity onPress={() => navigation.navigate('Signin')}>
                    <Text style={styles.signInButton}>Sign In</Text>
                    </TouchableOpacity>
                </View>
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
    },title: {
        margin:15,
        fontSize:35,
        fontWeight:'bold',
        color:'#319177'
    },image: {
        flex: 1,
        justifyContent: 'center',
    },errorMessage:{
        color: 'red',
        fontSize: 12,
        textAlign: 'center',
        marginBottom: 5,
    },signInButton: {
        color:'#27745f',
        marginLeft:8
    }
});

export default SignupScreen;