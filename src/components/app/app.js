import { BrowserRouter, Route, Routes } from 'react-router-dom';
import React, { Component } from "react";

import Footer from '../footer';
import Header from "../header";
import Home from "../home";
import MaterialPage from "../materialPage";

export default class App extends Component {
    render() {
        return (
            <>
                <BrowserRouter>
                    <Header />
                    <main>
                        <Routes>
                            <Route path='/' element={<Home />}/>
                            <Route path='/services/:id' element={<MaterialPage />}/>
                        </Routes>
                    </main>
                    <Footer />  
                </BrowserRouter>
            </>
        )
    }
}