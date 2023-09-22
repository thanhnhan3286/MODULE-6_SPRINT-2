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
import {Route, Routes} from "react-router";
import {Transport} from "./components/home/policy/Transport";
import {WarrantyAndRepair} from "./components/home/policy/WarrantyAndRepair";
import {Payment} from "./components/home/policy/Payment";
import {Return} from "./components/home/policy/Return";
import {CategoryList} from "./components/home/CategoryList";
import {Contact} from "./components/home/policy/Contact";
import {Error} from "./components/home/Error";
import Provider from "react-redux/es/components/Provider";
import store from "./redux/store";
import {CheckCode} from "./components/login/CheckCode";
import {DetailCustomer} from "./components/detail/DetailCustomer";
import {HistoryOrder} from "./components/home/HistoryOrder";
import {Checkout} from "./components/home/Checkout";
import {ReturnVnpay} from "./components/home/ReturnVnpay";

function App() {
    return (
        <>
            <Provider store={store}>
            <Header/>
            <Routes>
                <Route exact path="/" element={<Home/>}/>
                <Route exact path="/home" element={<Home/>}/>
                <Route path="/error" element={<Error/>}/>
                <Route path="/list" element={<List/>}/>
                <Route path="/list/:data" element={<CategoryList/>}/>
                <Route path="/login" element={<Login/>}/>
                <Route path="/checkcode/:data" element={<CheckCode/>}/>
                <Route path="/signup" element={<SignUp/>}/>
                <Route path="/detail/:id" element={<DetailProduct/>}/>
                <Route path="/info" element={<DetailCustomer/>}/>
                <Route path="/history" element={<HistoryOrder/>}/>
                <Route path="/cart" element={<Cart/>}/>
                <Route path="/checkout" element={<Checkout/>}/>
                <Route path="/returnvnpay" element={<ReturnVnpay/>}/>
                <Route path="/policy" element={<Transport/>}/>
                <Route path="/policy/transport" element={<Transport/>}/>
                <Route path="/policy/warranty-repair" element={<WarrantyAndRepair/>}/>
                <Route path="/policy/payment" element={<Payment/>}/>
                <Route path="/policy/return" element={<Return/>}/>
                <Route path="/contact/" element={<Contact/>}/>
            </Routes>
            <Footer/>
            </Provider>
        </>
    );
}

export default App;
