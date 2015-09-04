import React from 'react';
import classNames from 'classnames';
export default class InputField extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            inFocus: false
        };
    }

    handleFocus() {
        this.setState({inFocus: true});
    }

    handleBlur() {
        this.setState({inFocus: false});
    }

    render() {
        var classList = classNames(
            'input-container',
            {'focus' : this.state.inFocus },
            {'dirty' : this.props.value !== '' }
        );

        return (
            <div className={ classList }>
                <label htmlFor={ this.props.name }>{this.props.title}</label>
                <input type={ this.props.type }
                       id={ this.props.name }
                       name={ this.props.name }
                       value={ this.props.value }
                       onFocus={ this.handleFocus.bind(this) }
                       onBlur={ this.handleBlur.bind(this) }
                       onChange= { this.props.onChange }
                    />
            </div>
        );
    }
}

InputField.propTypes = {
    type: React.PropTypes.string,
    value: React.PropTypes.string,
    name: React.PropTypes.string.isRequired,
    title: React.PropTypes.string.isRequired,
    onChange: React.PropTypes.func.isRequired

};