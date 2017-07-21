import React from 'react';
import PropTypes from 'prop-types';
class TodoInput extends React.Component {
	static propTyps = {
		onSubmit: PropTypes.func,
		onClearAll: PropTypes.func
	}
	constructor() {
		super();
		this.state = {
			content: '',
			flag: true,
			suspension: false
		}
	}
	handleClick() {
		if (this.state.content === '') {
			console.log("没有任务");
			let t;
			clearTimeout(t); //清除掉上一次的t
			// 停止css3animation动画
			this.setState({
				suspension: true
			}, function() {
				t = setTimeout(() => {
					this.setState({
						suspension: false
					})
				}, 2000);
			})
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
	handleClearAll() {
		if (this.props.onClearAll) {
			this.props.onClearAll();
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
				<button className="button-send" onClick={this.handleClick.bind(this)}
				>Add</button>
				<input className="input-search" placeholder="搜索计划"/>
				<button className="button-search">Search</button>
				<button className="button-clear" onClick={this.handleClearAll.bind(this)}>Clear</button>
				{this.state.suspension?(<div className="suspension">请输入内容</div>):null}
			</div>)
	}
}

export default TodoInput;