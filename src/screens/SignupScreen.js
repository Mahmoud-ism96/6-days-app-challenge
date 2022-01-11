import React, {useState} from 'react';
import {View, StyleSheet} from 'react-native';
import {Text, Input, Button} from 'react-native-elements';
import Spacer from '../components/Spacer';

const SignupScreen = ({navigation}) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    return(
    <View style={styles.container}>
        <Text h2>Hello!{"\n"}Sign up to get started</Text>
        <Input label="Email" value={email} onChangeText={setEmail} autoCapitalize="none" autoCorrect={false} />
        <Input label="Password" value={password} onChangeText={setPassword} autoCapitalize="none" autoCorrect={false} secureTextEntry/>
        <Button title="Sign Up"/>
    </View>
    );
};

SignupScreen.navigationOptions = () => {
    return {
      headerShown: false,
    };
  };

const styles = StyleSheet.create({
    container:{
        borderWidth: 10,
        flex: 1,
        justifyContent: 'center',
        marginBottom: 120,
    }
});

export default SignupScreen;