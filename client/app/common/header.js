import React from 'react';
import Router from 'react-router';
var Link = Router.Link;

export default class Header extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <nav className="navbar">
                <div className="container">
                    <ul className="nav">
                        <Link to="home">Home</Link>
                        <Link to="about">About</Link>
                    </ul>
                </div>
            </nav>
        );
    }
}