import React, {useState} from 'react';
import {StyleSheet} from 'react-native';
import {Text, Input, Button} from 'react-native-elements';

const AuthForm = ({headerText, errorMessage, onSubmit, buttonTitle }) => {
    //Reusable Form for Sign in/Up Screen
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    return (
        <>
            <Text style={styles.title}>{headerText}</Text>
            <Input 
            label="Email" 
            value={email} 
            onChangeText={setEmail} 
            autoCapitalize="none" 
            autoCorrect={false} 
            />
            <Input 
            label="Password"
            value={password} 
            onChangeText={setPassword} 
            autoCapitalize="none" 
            autoCorrect={false} 
            secureTextEntry
            />
            <Button 
            title={buttonTitle}
            type='clear' 
            titleStyle={{color:'#319177', fontSize:15 }} 
            onPress={() => onSubmit({email, password})}  
            />
            {errorMessage ?
            (<Text style={styles.errorMessage}>{errorMessage}</Text>)
            : null}
        </>
    );

};

const styles = StyleSheet.create({
    title: {
        margin:15,
        fontSize:35,
        fontWeight:'bold',
        color:'#319177'
    },errorMessage:{
        color: 'red',
        fontSize: 12,
        textAlign: 'center',
        marginBottom: 5,
    }
});

export default AuthForm;