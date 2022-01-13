import CreateDataContext from "./CreateDataContext";
import trackerApi from '../api/tracker';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { navigate } from "../NavigationRef";


const authReducer = (state, action) => {
    //Triggers an Action based on the State received
    switch (action.type){
        case "add_error":
            return {...state, errorMessage: action.payload};
        case "signin":
            return {errorMessage:'', token: action.payload};
        case "signout":
            return {token:null, errorMessage:''};
        case "clear_error_message":
            return { ...state, errorMessage: "" };
        default: return state;
        
    }
};

const signup = (dispatch) => async ({email, password}) => { 
    //Send an action to the Reducer to Sign Up
        try{
            //Verifying User info incase of duplicate Email or wrong Password
            const response = await trackerApi.post('/signup',{email, password});
            await AsyncStorage.setItem('token', response.data.token);
            dispatch({type:'signin', payload:response.data.token});
            navigate('mainFlow');
        } catch (err){
            dispatch({type:'add_error', payload:'Wrong Email or Password'});
        }        
    };

const signin = (dispatch) => async ({email, password}) => {
      //Send an Action to the Reducer to Sign in
      try{
        //Verifying User info incase of wrong Email or Password
        const response = await trackerApi.post('/signin',{email, password});
        await AsyncStorage.setItem('token', response.data.token);
        dispatch({type:'signin', payload:response.data.token});
        navigate('mainFlow');
    } catch (err){
        dispatch({type:'add_error', payload:'Wrong Email or Password'});
    }  
    };

const localSignin = (dispatch) => async () => {
    //Send an Action to the Reducer to Sign In automatically, if Account was already Signed In
    const token = await AsyncStorage.getItem('token');
    if(token){
        dispatch({type:'signin', payload:token});
        navigate('mainFlow');
    } else{
        navigate('Signup');
    }
};

const signout = (dispatch) => async () => {
    //Send an Action to the Reducer to Sign out
    await AsyncStorage.removeItem('token');
    dispatch({type:'signout'})
    navigate('loginFlow');
};

const clearErrorMessage = (dispatch) => () => {
    //Send an Action to Reducer to clear the error message from the Sign Up/In screen
    dispatch({ type: "clear_error_message" });
  };

export const {Provider, Context} = CreateDataContext(
    authReducer, 
    {signup, signin, localSignin, signout, clearErrorMessage}, 
    {token: null, errorMessage: ''});