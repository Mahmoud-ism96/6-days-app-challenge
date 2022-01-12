import CreateDataContext from "./CreateDataContext";
import trackerApi from '../api/tracker';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { navigate } from "../NavigationRef";


const authReducer = (state, action) => {
    //Takes action when app state is changed
    switch (action.type){
        case "add_error":
            return {...state, errorMessage: action.payload};
        case "signup":
            return {errorMessage:'', token: action.payload};
        default: return state;
    }
};

const signup = (dispatch) => async ({email, password}) => { 
    //Send request to Sign Up
        try{
            //Verifying User info incase of duplicate Email
            const response = await trackerApi.post('/signup',{email, password});
            await AsyncStorage.setItem('token', response.data.token);
            dispatch({type:'signup', payload:response.data.token})
            navigate('mainFlow')
        } catch (err){
            dispatch({type:'add_error', payload:'Something went wrong'})
        }        
    };

const signin = (dispatch) => ({email, password}) => {
      //Send request to Sign in  
    };

const signout = (dispatch) => () => {
    //Send request to Sign out
};

export const {Provider, Context} = CreateDataContext(authReducer, {signup, signin, signout}, {token: null, errorMessage: ''});