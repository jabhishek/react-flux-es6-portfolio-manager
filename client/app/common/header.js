import React from "react";

export default class Header extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <nav className="navbar navbar-default">
                <div className="container-fluid">
                    <ul className="nav nav-pills">
                        <li><a href="/#">Home</a></li><li><a href="/#about">About</a></li>
                    </ul>
                </div>
            </nav>
        );
    }
}