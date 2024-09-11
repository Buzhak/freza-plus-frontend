import { BrowserRouter, Route, Routes } from 'react-router-dom';

import ApiService from "../../services/service";
import Base from '../base/base';
import Footer from '../footer';
import Header from "../header";
import Home from "../home";
import MaterialPage from "../materialPage";
import React from "react";
import ServicePage from '../servicePage';

export default class App extends Base {
    
    componentDidMount = () => {
        const service = new ApiService();
        this.service = service.getRoutes;
        this.loadData();
    }

    renderRoutes = (data) => {
        return data.reduce((accumulator, route) => {
            if (route.slug === '') {
                    accumulator.push(<Route key={route.id} path={`/${route.slug}/`} element={<Home />}/>);
                    return accumulator;
                }
            accumulator.push(<Route key={route.id} path={`/${route.slug}/`} element={<ServicePage />}/>);
            if (route.services && route.services.length !== 0) {
                accumulator.push(<Route key={`a${route.id}`} path={`/${route.slug}/:id`} element={<MaterialPage />}/>);
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
                            {/* <Route path='/' element={<Home />}/>
                            <Route path='/freza/:id' element={<MaterialPage />}/>
                            <Route path='/laser/:id' element={<MaterialPage />}/> */}
                            {this.renderRoutes(data)}
                        </Routes>
                    </main>
                    <Footer />  
                </BrowserRouter>
            </>
        )
    }
}