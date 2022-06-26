import { createContext, useReducer } from "react";
import AuthReducer from './AuthReducer';

const INITIAL_STATE = {
    user: localStorage.getItem("userlogin") || null,
    error: false
}

export const AuthContext = createContext(INITIAL_STATE);

export const AuthContextProvider = ({children}) => {
    const [state, dispatch] = useReducer(AuthReducer, INITIAL_STATE);


    return (
        <AuthContext.Provider value={{user:state.user, error: state.error, dispatch}}>
            {children}
        </AuthContext.Provider>
    )
}