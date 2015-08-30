import React from 'react/addons';
import Router from 'react-router';
var Link = Router.Link;
var cx = React.addons.classSet;

export default class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isExpanded: false
        };
    }

    handleIconClick() {
        this.setState({isExpanded: !this.state.isExpanded});
    }

    handleLinkClick() {
        this.setState({isExpanded: false});
    }

    render() {
        var navClassList = cx(
            {
                'nav': true,
                'expanded': this.state.isExpanded
            }
        );

        return (
            <nav className="navbar">
                <div className="container">
                    <div className="navbar-header">
                        <div className="app-title">
                            <Link to="home">ReactApp</Link>
                        </div>
                        <i className="fa fa-bars" onClick={ this.handleIconClick.bind(this) }></i>
                    </div>
                    <ul className={ navClassList }>
                        <li><Link to="home" onClick={ this.handleLinkClick.bind(this) }>Home</Link></li>
                        <li><Link to="about" onClick={ this.handleLinkClick.bind(this) }>About</Link></li>
                    </ul>
                </div>
            </nav>
        );
    }
}