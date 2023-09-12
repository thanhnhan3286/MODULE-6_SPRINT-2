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
import {Transport} from "./components/home/policy/Transport";
import {WarrantyAndRepair} from "./components/home/policy/WarrantyAndRepair";
import {Payment} from "./components/home/policy/Payment";
import {Return} from "./components/home/policy/Return";
import {CatelogyList} from "./components/home/CatelogyList";

function App() {
    return (
        <>
            <Header/>
            <Routes>
                <Route exact  path="/" element={<Home/>}/>
                <Route exact  path="/home" element={<Home/>}/>
                <Route path="/list" element={<List/>}/>
                <Route path="/list/:data" element={<CatelogyList/>}/>
                <Route path="/login" element={<Login/>}/>
                <Route path="/signup" element={<SignUp/>}/>
                <Route path="/detail/:id" element={<DetailProduct/>}/>
                <Route path="/cart" element={<Cart/>}/>
                <Route path="/policy" element={<Transport/>}/>
                <Route path="/policy/transport" element={<Transport/>}/>
                <Route path="/policy/warranty-repair" element={<WarrantyAndRepair/>}/>
                <Route path="/policy/payment" element={<Payment/>}/>
                <Route path="/policy/return" element={<Return/>}/>
            </Routes>
            <Footer/>
        </>
    );
}

export default App;
