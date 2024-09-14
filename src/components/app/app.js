import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ContactPage, Home, OrderPage, ServicePage } from '../pages/index';

import ApiService from "../../services/service";
import Base from '../base/base';
import Footer from '../footer';
import Header from "../header";
import MaterialPage from "../materialPage";
import React from "react";

export default class App extends Base {
    
    componentDidMount = () => {
        const service = new ApiService();
        this.service = service.getRoutes;
        this.loadData();
    }

    renderRoutes = (data) => {
        return data.reduce((accumulator, route) => {
            if (route.slug === '') {
                accumulator.push(<Route key={route.id} path={`/${route.slug}/`} element={<Home id={route.id}/>}/>);
                return accumulator;
            }
            if (route.slug === 'order') {
                accumulator.push(<Route key={route.id} path={`/${route.slug}/`} element={<OrderPage id={route.id}/>}/>);
                return accumulator;
            }
            if (route.slug === 'contacts') {
                accumulator.push(<Route key={route.id} path={`/${route.slug}/`} element={<ContactPage id={route.id}/>}/>);
                return accumulator;
            }
            if (route.services && route.services.length !== 0) {
                accumulator.push(<Route key={route.id} path={`/${route.slug}/`} element={<ServicePage id={route.id}/>}/>);
                accumulator.push(<Route key={`a${route.id}`} path={`/${route.slug}/:id`} element={<MaterialPage/>}/>);
                return accumulator;
            }
            return accumulator;
        }, [])
    }

    render() {
        const { loading, error, data } = this.state;

        if (loading) {
            return <p>Loading...</p>;
        }

        if (error) {
            console.error('Error loading menu. Please try again later.');
            return <p className="error">Error loading menu. Please try again later.</p>;
        }

        console.log(this.renderRoutes(data));

        return (
            <>
                <BrowserRouter>
                    <Header />
                    <main>
                        <Routes>
                            {this.renderRoutes(data)}
                        </Routes>
                    </main>
                    <Footer />  
                </BrowserRouter>
            </>
        )
    }
}