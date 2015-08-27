import React from 'react';
import Router from 'react-router';
var Link = Router.Link;

export default class Header extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <nav className="navbar navbar-default">
                <div className="container-fluid">
                    <ul className="nav nav-pills">
                        <Link to="home">Home</Link>
                        <Link to="about">About</Link>
                    </ul>
                </div>
            </nav>
        );
    }
}