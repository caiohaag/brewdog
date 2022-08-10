import { Router, Routes, Route, Navigate } from "react-router-dom";
import Login from "../pages/login/Login";
import About from "../pages/about/About";
import Pag404 from "../pages/pag404/Pag404";
import Home from "../pages/home/Home";
import Beer from "../pages/beer/Beer";
import { AuthContext, AuthContextProvider } from './../context/AuthContext';
import { useContext } from 'react';
import Loading from './loading/Loading';

function RouterComponent () {

    const Private = ({ children }) => {
        const { authenticated, loading } = useContext(AuthContext)

        if (loading) {
            return (
                <Loading/>
            )
        }

        if (!authenticated) {
            return <Navigate to="/login"/>
        }

        return children
    }
    
    return (        
            <AuthContextProvider>
                <Routes>            
                    <Route exact path='/' element={<Private><Home/></Private>}/>
                    <Route path='/login' element={<Login/>}/> 
                    <Route path='/beer/:id' element={<Private><Beer/></Private>}/> 
                    <Route path='/about' element={<Private><About/></Private>} />
                    <Route path='*' element={<Pag404/>}/> 
                </Routes>
            </AuthContextProvider>        
    )
}

export default RouterComponent;