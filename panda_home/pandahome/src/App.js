import logo from './logo.svg';
import './App.css';
import {Header} from "./components/home/Header";
import React from "react";
import {Footer} from "./components/home/Footer";
import {List} from "./components/home/List";
import {Home} from "./components/home/Home";

function App() {
    return (
        <>
            <Header/>
            <Home/>
            <List/>
            <Footer/>
        </>
    );
}

export default App;
