import CreateDataContext from "./CreateDataContext";

const LocationReducer = (state, action) => {
    switch (action.type) {
        case 'add_current_location':
            return {...state, currentLocation:action.payload};
        default:
            return state;
    }
};

const addLocation = dispatch => (location) => {
    dispatch({type:'add_current_location', payload:location});
};

export const {Context, Provider} = CreateDataContext(
    LocationReducer, 
    {addLocation}, 
    {location:[], currentLocation:null});