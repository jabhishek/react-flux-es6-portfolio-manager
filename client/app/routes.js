import React from 'react';
import Router from 'react-router';
import Home from './components/home/homePage';
import About from './components/about/aboutPage';
import Register from './components/account/register';
import ManageTransactions from './components/Transactions/manageTransactions';
import NotFound from './common/notFound';
import App from './app';

var Route = Router.Route;
var DefaultRoute = Router.DefaultRoute;
var NotFoundRoute = Router.NotFoundRoute;

var routes = (
		<Route handler={App}>
			<DefaultRoute handler={Home}/>
			<Route name="about" path="about" handler={About}/>
			<Route name="home" path="home" handler={Home}/>
			<Route name="manageTransactions" path="manageTransactions/:user/:portfolio" handler={ManageTransactions}/>
			<Route name="register" path="register" handler={Register}/>
			<NotFoundRoute handler={NotFound}/>
		</Route>
);

export default routes;