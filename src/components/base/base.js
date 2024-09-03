import { Component } from "react";

export default class Base extends Component {
    state = {
        data: [],
        loading: true,
        error: false
    }

    onDataLoaded = (data) => {
        this.setState ({
            data: data,
            loading: false,
            error: false
        }) 
    }

    onError = () => {
        this.setState ({
            loading: false,
            error: true
        })
    }

    loadData = () => {
        if (typeof this.service === 'function') {
            this.service()
                .then(this.onDataLoaded)
                .catch(this.onError);
        } else {
            console.error("Service is not a function");
        }
    }
    
    componentDidMount = () => {
        this.service = this.props.service;
        this.loadData();
    }

}