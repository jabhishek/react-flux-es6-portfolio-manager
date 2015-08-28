import React from 'react';

export default class HomePage extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="home-page">
                <h1>React App</h1>
                <p>React, React Router and Flux for ultra-responsive web apps</p>
            </div>
        );
    }
}

