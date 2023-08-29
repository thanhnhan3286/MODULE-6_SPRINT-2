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

function App() {
    return (
        <>
            <Header/>
            <DetailProduct/>
            <Login/>
            <SignUp/>
            <Home/>
            <List/>
            <Cart/>
            <Footer/>
        </>
    );
}

export default App;
