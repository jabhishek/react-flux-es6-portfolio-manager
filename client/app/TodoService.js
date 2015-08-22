export default class TodoService {
	constructor() {
		this.url = '/api/todos';
	}

	GetAll() {
		return fetch(this.url);
	}
}