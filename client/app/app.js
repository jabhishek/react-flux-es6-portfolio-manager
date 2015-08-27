import React from 'react';
import Header from './common/header';
import Router from 'react-router';

var RouteHandler = Router.RouteHandler;

export default class App extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                <Header/>
                <RouteHandler />
            </div>
        );
    }
}