import React from 'react';
import Router from 'react-router';
var Link = Router.Link;

export default class Toolbar extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        var options = this.props.portfolios.map((option) => {
            return (
                <option key={option} value={option}>
                    {option}
                </option>
            );
        });
        return (
            <div className="toolbar">
                <div>
                    <select name="portfolios" id="portfolios" value={ this.props.selectedPortfolio }
                            onChange={this.props.onPortfolioChanged.bind(this)}>
                        {options}
                    </select>
                    <Link to="manageTransactions"
                          params={{ user: this.props.user, portfolio: this.props.selectedPortfolio }}>
                        Add Transactions
                    </Link>
                </div>
            </div>
        );
    }
}

Toolbar.propTypes = {
    "user": React.PropTypes.string,
    "selectedPortfolio": React.PropTypes.string.isRequired,
    "onPortfolioChanged": React.PropTypes.func.isRequired,
    "portfolios": React.PropTypes.array.isRequired
};