import 'jquery';
import 'bootstrap';
import React from 'react';
import ReactDOM from 'react-dom';

import Header from './common/header';
import Home from './components/homePage';
import About from './components/about/aboutPage';

class App extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        var Child;
        switch(this.props.route) {
            case 'about' :
                Child = About;
                break;
            default :
                Child = Home;
        }

        return (
            <div>
                <Header/>
                <Child/>
            </div>
        );
    }
}

var render = function() {
    var route = window.location.hash.substr(1);
    console.log(route);
    ReactDOM.render(<App route={route} />, document.getElementById('app'));
};

window.addEventListener('hashchange', render);
render();
