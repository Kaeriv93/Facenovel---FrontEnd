// import { useEffect,useState } from "react"
import {Routes, Route} from 'react-router-dom'
import Login from "../Pages/Login"
// import User from '../Pages/User'
import PrivateRoute from '../utils/PrivateRoute'
import { AuthProvider } from '../context/AuthContext'
import ProtectedPage from '../Pages/User'
import Test from '../Pages/Test'
import Register from '../Pages/Register'
import Home from '../Pages/Home'
import Footer from "./Footer"
import Userpage from "../Pages/Userpage"


const Main = ()=>{

    return(
        <AuthProvider>
            <Routes>
                <Route element ={<PrivateRoute/>}>
                    <Route path ='/home' element ={<Home/>}/>
                    <Route path='/test' element={<Test/>}/>
                    <Route path= '/userpage' element={<Userpage/>}/>
                </Route>
                <Route path ='/register' element = {<Register/>}/>
                <Route path ='/' exact element ={<Login/>}/>
                <Route path ='/user' element ={<ProtectedPage/>}/>
                <Route path ='*' element ={<main style={{padding: "1rem"}}>
                    <p>There's nothing here!</p>
                </main>}/>
            </Routes>
            <Footer/>
        </AuthProvider>
    )
}

export default Main