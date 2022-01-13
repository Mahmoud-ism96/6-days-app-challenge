import CreateDataContext from "./CreateDataContext";

const LocationReducer = (state, action) => {
    //Triggers an Action based on the State received
    switch (action.type) {
        case 'add_current_location':
            return {...state, currentLocation:action.payload};
        case 'start_recording':
            return {...state, recording: true};
        case 'stop_recording':
            return {...state, recording: false};
        case 'pause_recording':
            return {...state, recording: false};
        case 'change_name':
            return { ...state, name: action.payload };
        case 'add_location':
            return { ...state, locations: [...state.locations, action.payload] };
        case 'reset':
            return { ...state, name: '', locations: [] };
        default:
            return state;
    }
};

const addLocation = dispatch => (location, recording) => {
    //Send an Action to the Reducer to add the Current Location if its not tracking, and add the new location if its Tracking
    dispatch({type:'add_current_location', payload:location});
    if(recording){
        dispatch({type:'add_location', payload:location});
    }
};
const startRecording = dispatch => () => {
    //Send an Action to the Reducer to Start Tracking
    dispatch({type:'start_recording'})
};
const stopRecording = dispatch => () => {
    //Send an Action to the Reducer to Stop Tracking
    dispatch({type:'stop_recording'})
};
const pauseRecording = dispatch => () => {
    //Send an Action to the Reducer to Pause Tracking
    dispatch({type:'pause_recording'})
};
const changeName = dispatch => name => {
    //Send an Action to the Reducer to Change Name
    dispatch({type:'change_name', payload:name})
};
const reset = dispatch => () => {
    //Send an Action to the Reducer to Reset the Track Form
    dispatch({type:'reset'})
};


export const {Context, Provider} = CreateDataContext(
    LocationReducer, 
    {addLocation, startRecording, stopRecording, changeName, reset}, 
    {name:'', locations:[], recording:false, currentLocation:null});