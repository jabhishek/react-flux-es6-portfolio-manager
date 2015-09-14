import events from 'events';
import Dispatcher from 'app/dispatcher/appDispatcher';
import ActionTypes from 'app/constants/actionTypes';

var _portfolios = [];
var _selectedPortfolio = null;

var EventEmitter = events.EventEmitter;
var CHANGE_EVENT = "change";
var PortfolioStore = Object.assign({}, EventEmitter.prototype, {
    addChangeListener: function (callback) {
        this.on(CHANGE_EVENT, callback);
    },

    removeChangeListener: function (callback) {
        this.removeListener(CHANGE_EVENT, callback);
    },

    emitChange: function () {
        this.emit(CHANGE_EVENT);
    },

    getPortfolios: function () {
        return _portfolios;
    },

    getSelectedPortfolio: function () {
        return _selectedPortfolio;
    },

    setSelectedPortfolio: function (portfolio) {
        _selectedPortfolio = portfolio;
    }
});

Dispatcher.register(function (action) {
    switch (action.actionType) {
        case ActionTypes.PORTFOLIO_INITIALIZE:
            _portfolios = action.initialData.portfolios;
            _selectedPortfolio = _portfolios.length > 0 && !_selectedPortfolio ? _portfolios[0] : null;
            PortfolioStore.emitChange();
            break;
        default:
        // no op
    }
});

export default PortfolioStore;
