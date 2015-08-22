import React from 'react';
import ReactDOM from 'react-dom';

import Todo from './Todo';

export default class TodoList extends React.Component {
	constructor(props) {
		super(props);
		this.state = { todos: [] };
	}

	componentDidMount() {
		fetch('/api/todos')
			.then(response => response.json())
			.then(data => {
				console.log(data);
				this.setState({ todos: data.todos });
			})
	}

	render() {
		var allTodos = this.state.todos.map(
			todo =>
				<Todo key={todo._id} todo={todo}>
				</Todo>
			);
		return (
			<ul>
				{allTodos}
			</ul>
		);
	}
}

