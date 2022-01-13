import CreateDataContext from "./CreateDataContext";
import trackerApi from '../api/tracker';

const trackReducer = (state, action) => {
    //Triggers an Action based on the State received
    switch (action.type){
        case 'fetch_tracks':
            return action.payload;
        default: return state;
    }
}

const fetchTracks = dispatch => async () => {
    //Send an Action to the Reducer to Fetch all the Tracks 
    const response = await trackerApi.get('/tracks');
    dispatch({type: 'fetch_tracks', payload: response.data});
};
const createTrack = dispatch => async (name, locations) => {
    //Send an Action to the Reducer to Save the Track
    await trackerApi.post('/tracks', {name, locations});
};

export const {Provider, Context} = CreateDataContext(
    trackReducer,
    {fetchTracks, createTrack},
    []
);