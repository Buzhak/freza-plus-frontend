import { Component } from "react";

export default class Base extends Component {
    service = this.props.service;
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

    loadMenu = () => {
        this.service()
            .then(this.onDataLoaded)
            .catch(this.onError)
    }
    
    componentDidMount = () => {
        this.loadMenu();
    }

}