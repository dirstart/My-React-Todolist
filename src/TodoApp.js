import React, {
	Component
} from 'react';

import TodoInput from './TodoInput';
import TodoList from './TodoList';

class TodoApp extends Component {
	constructor() {
		super();
		this.state = {
			contents: []
		}
	}
	handleSubmit(content) {
		const {
			contents
		} = this.state;
		contents.push(content);
		this.setState({
			contents: contents
		});
	}
	handleDeleteList(index) {
		const {
			contents
		} = this.state;
		contents.splice(index, 1);
		this.setState({
			contents
		})
	}
	render() {
		return (<div className="app-all-wrapper">
			<TodoList contents={this.state.contents} onDeleteList={this.handleDeleteList.bind(this)}/>
			<TodoInput onSubmit={this.handleSubmit.bind(this)}/>
		</div>)
	}
}

export default TodoApp;