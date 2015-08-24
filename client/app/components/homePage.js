import React from 'react';

export default class HomePage extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="jumbotron">
                <h1>Pluralsight Administration</h1>
                <p>React, React Router and Flux for ultra-responsive web apps</p>
            </div>
        );
    }
}

