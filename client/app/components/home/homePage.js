import React from 'react';
import Toolbar from './Toolbar';
import _ from 'lodash';
import portfolioApi from 'app/Apis/portfolioApi';
import PortfolioStore from 'app/stores/portfolioStore';

export default class HomePage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            portfolios: PortfolioStore.getPortfolios(),
            selectedPortfolio: PortfolioStore.getSelectedPortfolio()
        };
    }

    componentWillMount() {
        PortfolioStore.addChangeListener(this._onChange.bind(this));
    }

    //Clean up when this component is unmounted
    componentWillUnmount() {
        PortfolioStore.removeChangeListener(this._onChange.bind(this));
    }

    _onChange() {
        this.setState({
            portfolios: PortfolioStore.getPortfolios(),
            selectedPortfolio: PortfolioStore.getSelectedPortfolio()
        });
    }

    portfolioChanged(event) {
        var selectedPF = event.target.value || null;
        PortfolioStore.setSelectedPortfolio(selectedPF);
        this.setState({selectedPortfolio: selectedPF});
    }

    getToolbarElement() {
        return (
            <div>
                <Toolbar user={ this.props.user }
                         portfolios={ this.state.portfolios }
                         selectedPortfolio={ this.state.selectedPortfolio }
                         onPortfolioChanged={this.portfolioChanged.bind(this)}
                    />
                { this.state.selectedPortfolio }
            </div>
        );
    }

    render() {
        var renderedElement;
        if (this.state.portfolios && this.state.portfolios.length > 0) {
            renderedElement = this.getToolbarElement();
        } else {
            renderedElement = "";
        }

        return (
            <div className="home-page">
                <h1>Portfolio Manager</h1>
                {
                    renderedElement
                }
            </div>
        );
    }
}

HomePage.defaultProps = {user: "abhi"};
