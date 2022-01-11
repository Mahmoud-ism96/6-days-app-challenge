import React, {useReducer} from 'react';

export default (reducer, actions, defaultValue) => {
    //Function used to share the User data around the app by using the Context
    const Context = React.createContext();

    const Provider = ({children}) => {
        const [state, dispatch] = useReducer(reducer, defaultValue);

        const boundActions = {};
        for (let key in actions){
            //Looping all of key values that are passed in
            boundActions[key] = actions [key] (dispatch);
        }
        return (
            <context.Provider value={{state, ...boundActions}}>
                {children}
            </context.Provider>
        );
    };
    return {Context, Provider};
};