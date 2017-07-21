import React from 'react';
import TodoList from './TodoList';
import TodoInput from './TodoInput';

class TodoApp extends React.Component {
	constructor() {
		super();
		this.state = {
			contents: []
		}
	}
	componentWillMount() {
		this._loadLocalStorage();
	}
	_loadLocalStorage() {
		let contents = localStorage.getItem('user_contents');
		if (contents) {
			contents = JSON.parse(contents);
			this.setState({
				contents: contents
			})
		}
	}
	_saveLocalStorage() {
		let {
			contents
		} = this.state;
		contents = JSON.stringify(contents);
		localStorage.setItem('user_contents', contents);
	}
	handleSubmit(obj) {
		const {
			contents
		} = this.state;
		contents.push(obj);
		contents.map((obj_origin, i) => obj_origin.index = i)
		console.log(contents);
		this.setState({
			contents: contents
		}, this._saveLocalStorage());
	}
	handleDelete(index) {
		const {
			contents
		} = this.state;
		contents[index].flag = false;
		console.log(contents[index].content + "变false");
		this.setState({
			contents: contents
		}, () => {
			this._saveLocalStorage();
			console.log(contents);
		})
	}

	render() {
		const {
			contents
		} = this.state;
		let need_to_do = [];
		for (let obj of contents) {
			if (obj.flag === true) {
				need_to_do.push(obj);
			}
		}

		return (<div className="app-all-wrapper">
			<TodoList contents={need_to_do} onHandleDelete={this.handleDelete.bind(this)}
			/>
			<TodoInput onSubmit={this.handleSubmit.bind(this)}/>
		</div>)
	}
}

export default TodoApp;