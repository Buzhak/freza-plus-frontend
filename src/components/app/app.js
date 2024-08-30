import React, { Component } from "react";

import Header from "../header";
import Home from "../home";
import MaterialPage from "../materialPage";

export default class App extends Component {
    render() {
        return (
            <>
                <Header />
                <main>
                    <Home />
                    <MaterialPage />
                </main>
            </>
        )
    }
}