"use strict";

import Dispatcher from 'app/dispatcher/appDispatcher';
import portfolioApi from 'app/apis/portfolioApi';
import ActionTypes from 'app/constants/actionTypes';

var PortfolioActions = {
    init: function() {
        portfolioApi.getPortfolios()
            .then((data) => {
                Dispatcher.dispatch({
                    actionType: ActionTypes.PORTFOLIO_INITIALIZE,
                    initialData: {
                        portfolios: data.portfolios
                    }
                });
            });
    }
};

export default PortfolioActions;

