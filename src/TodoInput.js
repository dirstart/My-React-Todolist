import React from 'react';
import PropTypes from 'prop-types';
class TodoInput extends React.Component {
	static propTyps = {
		onSubmit: PropTypes.func
	}
	constructor() {
		super();
		this.state = {
			content: '',
			flag: true
		}
	}
	handleClick() {
		if (this.state.content === '') {
			console.log("没有任务");
			return;
		}
		//这里应该采用正则表达式来解决
		if (this.props.onSubmit) {
			this.props.onSubmit({
				content: this.state.content,
				flag: this.state.flag
			})
		}
		this.setState({
			content: ''
		})
	}
	handleChange(event) {
		this.setState({
			content: event.target.value
		});
	}
	handleKeyDownEnter(event) {
		event.stopPropagation();
		if (event.key === 'Enter') {
			this.handleClick();
		} else {
			return;
		}
	}
	componentDidMount() {
		this.input.focus();
	}
	render() {
		return (<div className="input-all-wrapper" onKeyDown={this.handleKeyDownEnter.bind(this)}>
				<input className="input-input" onChange={this.handleChange.bind(this)} 
				value={this.state.content} placeholder="今日计划"
				ref={(input)=>{this.input=input}}/>
				<button className="input-button"
				onClick={this.handleClick.bind(this)}
				>Add</button>

			</div>)
	}
}

export default TodoInput;