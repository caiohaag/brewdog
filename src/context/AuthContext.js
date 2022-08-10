import { createContext, useEffect, useState } from "react";
import { Users } from "../data/data.js";
import { useNavigate } from "react-router-dom";

export const AuthContext = createContext();

export const AuthContextProvider = ({children}) => {
    const navigate = useNavigate()
    const [user, setUser] = useState(null)
    const [loginError, setLoginError] = useState(false)
    const [passError, setPassError] = useState(false)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const recoveredUser = localStorage.getItem("loggeduser");  
        if(recoveredUser) {
            setUser(JSON.parse(recoveredUser))
        }        
        setLoading(false)
    },[])

    const login = (username, password) => {
        var selectedUser = Users.find(user => user.username === username)
        if(!selectedUser) {
            setLoginError(true)
            return
        }
        if(selectedUser.password !== password) {
            setPassError(true)            
            return
        }

        setUser(selectedUser)    
        localStorage.setItem('loggeduser', JSON.stringify(selectedUser))
        navigate("/")    
    }

    const logout = () => {
        setUser(null)
        localStorage.removeItem('loggeduser')
        navigate("/login")
    }    

    return (
        <AuthContext.Provider value={{authenticated: !!user, user, loginError, passError, loading, setLoginError, setPassError, login, logout}}> 
            {children}
        </AuthContext.Provider>
    )
}