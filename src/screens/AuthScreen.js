import React, {useContext} from 'react';
import {StyleSheet, View} from 'react-native';
import {Context as AuthContext} from '../context/AuthContext';
import LottieView from 'lottie-react-native';


const AuthScreen = ({navigation}) => {
    const {localSignin} = useContext(AuthContext);

            return (
            <View
                style={{
                    flex: 1,
                    backgroundColor: '#459c84'
                }}
            >
                <LottieView
                    source={require('../images/splash.json')}
                    autoPlay
                    loop={false}
                    speed={0.5}
                    onAnimationFinish={() => {
                        localSignin();
                    }}
                />
            </View>
            )
    
    
};

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
