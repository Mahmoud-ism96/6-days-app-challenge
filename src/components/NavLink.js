import React from "react";
import {Text, TouchableOpacity, StyleSheet, View} from 'react-native';
import { withNavigation } from "react-navigation";

const NavLink = ({navigation, preText, text, screenName}) => {
    return (
        <View style={{flexDirection:"row",justifyContent: 'center'}}>
            <Text>{preText}</Text>
            <TouchableOpacity onPress={() => navigation.navigate(screenName)}>
            <Text style={styles.signInButton}>{text}</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    signInButton: {
        color:'#27745f',
        marginLeft:8
    }
});

export default withNavigation(NavLink);