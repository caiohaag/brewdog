import { Routes, Route } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import Login from "../pages/login/Login";
import About from "../pages/about/About";
import Pag404 from "../pages/pag404/Pag404";
import Home from "../pages/home/Home";
import Beer from "../pages/beer/Beer";

function Router () {

    const {user} = useContext(AuthContext);
    
    return (
        <Routes>
            <Route exact path='/' element={user ? <Home/> : <Login/>}/>             
            <Route path='/home' element={user ? <Home/> : <Login/>}/> 
            <Route path='/login' element={<Login/>}/> 
            <Route path='/beer/:id' element={<Beer/>}/> 
            <Route path='/about' element={<About/>} />
            <Route path='*' element={<Pag404/>}/> 
        </Routes>
    )
}

export default Router;