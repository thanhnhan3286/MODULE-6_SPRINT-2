import logo from './logo.svg';
import './App.css';
import {Header} from "./components/home/Header";
import React from "react";
import {Footer} from "./components/home/Footer";
import {List} from "./components/home/List";
import {Home} from "./components/home/Home";
import {SignUp} from "./components/login/SignUp";
import {Cart} from "./components/cart/Cart";
import {Login} from "./components/login/Login";
import {DetailProduct} from "./components/detail/DetailProduct";
import {Route,  Routes} from "react-router";

function App() {
    return (
        <>
            <Header/>
            <Routes>
                <Route exact  path="/" element={<Home/>}/>
                <Route exact  path="/home" element={<Home/>}/>
                <Route path="/list" element={<List/>}/>
                <Route path="/login" element={<Login/>}/>
                <Route path="/signup" element={<SignUp/>}/>
                <Route path="/detail/:id" element={<DetailProduct/>}/>
                <Route path="/cart" element={<Cart/>}/>
            </Routes>
            <Footer/>
        </>
    );
}

export default App;
