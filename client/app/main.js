// downgraded to react@0.13.3 until react-router 1.0 stabilizes
// reason - https://github.com/facebook/react/issues/1939

console.log('main');

import React from 'react';
import Router from 'react-router';
import routes from './routes';
import PortfolioActions from './actions/portfolioActions';

PortfolioActions.init();

Router.run(routes, Router.HistoryLocation, (Root) => {
    React.render(<Root/>, document.getElementById('app'));
});
