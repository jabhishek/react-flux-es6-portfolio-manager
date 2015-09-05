import React from 'react';
import Toolbar from './Toolbar';
import _ from 'lodash';
import portfolioApi from 'app/Apis/portfolioApi';

export default class HomePage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {portfolios: []};
    }

    componentWillMount() {

        let handleData = (data) => {
            if (data) {
                let portfolios = data.portfolios;
                if (_.isArray(portfolios)) {
                    let selectedPortfolio = portfolios[0];
                    this.setState({
                        portfolios: portfolios,
                        selectedPortfolio: selectedPortfolio
                    });
                }
            }
        };

        portfolioApi.getPortfolios()
            .then(
                handleData,
                (err) => {
                    console.log(err);
                }
            );
    }

    portfolioChanged(event) {
        var selectedPF = event.target.value || null;
        console.log(selectedPF);
        this.setState({selectedPortfolio: selectedPF});
    }

    render() {

        return (
            <div className="home-page">
                <h1>Portfolio Manager</h1>
                {
                    (() => {
                        if (this.state.portfolios && this.state.portfolios.length > 0) {
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
                        } else {

                        }
                    })()
                }
            </div>
        );
    }
}

HomePage.defaultProps = {user: "abhi"};
