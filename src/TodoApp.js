import React from 'react';
import TodoList from './TodoList';
import DustbinList from './DustbinList';
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
	handleRestore(index) {
		const {
			contents
		} = this.state;
		contents[index].flag = true;
		console.log(contents[index].content + "变成了true");
		this.setState({
			contents: contents
		}, () => {
			this._saveLocalStorage();
		})
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
	handleSearch(search_key) {
		console.log(search_key);
	}
	handleClearAll() {
		const {
			contents
		} = this.state;
		const new_contents = [];
		let i = 0;
		for (let obj of contents) {
			if (!!obj.flag) {
				console.log(obj.flag);
				obj.index = i;
				++i;
				new_contents.push(obj);
			}
		}
		console.log(new_contents);
		this.setState({
			contents: new_contents
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
		let finish = [];
		for (let obj of contents) {
			if (obj.flag === true) {
				need_to_do.push(obj);
			} else {
				finish.push(obj);
			}
		}

		return (<div className="app-all-wrapper">
			<TodoList contents={need_to_do} onHandleDelete={this.handleDelete.bind(this)}/>
			<TodoInput onSubmit={this.handleSubmit.bind(this)} 
				onClearAll={this.handleClearAll.bind(this)} onSearch={this.handleSearch.bind(this)} />
			<DustbinList contents={finish} onHandleRestore={this.handleRestore.bind(this)}/>
		</div>)
	}
}

export default TodoApp;