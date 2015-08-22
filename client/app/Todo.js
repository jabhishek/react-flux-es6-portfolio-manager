import React from 'react';

export default class Todo extends React.Component {
	constructor(props) {
		super(props);
		//this.setState({ todo: this.props.todo })
	}
	render() {
		return <li>{this.props.todo.task}</li>;
	}
}
