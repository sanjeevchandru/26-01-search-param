import React from 'react';
import {Login} from './Router/Login'
import {Home} from './Router/Home'
import {BrowserRouter,Routes,Route} from 'react-router-dom';
export const Routing=()=>{
    return(
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Login/>}></Route>
                <Route path='/home' element={<Home/>}/>
            </Routes>
        </BrowserRouter>
    )
}