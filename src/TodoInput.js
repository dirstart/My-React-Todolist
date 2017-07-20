import React, {
	Component
} from 'react';
import PropTypes from 'prop-types';

class TodoInput extends Component {
	static propTypes = {
		onSubmit: PropTypes.func
	}
	constructor() {
		super();
		this.state = {
			content: ''
		}
	}

	componentDidMount() {
		this.input.focus();
	}
	onSubmit() {
		if (this.props.onSubmit) {
			this.props.onSubmit({
				content: this.state.content
			})
		};
		this.setState({
			content: ''
		})
	}
	handleInputChange(event) {
		this.setState({
			content: event.target.value
		})
	}
	handleKeyDownEnter(event) {
		if (event.key === 'Enter') {
			event.stopPropagation();
			this.onSubmit();
		}
	}
	render() {
		return (<div className="input-all-wrapper" 	onKeyDown={this.handleKeyDownEnter.bind(this)}>
			<input className="input-input" placeholder="今日计划" value={this.state.content} 
				onChange={this.handleInputChange.bind(this)}
				ref={(input)=>{this.input=input} } />
			<button className="input-button" onClick={this.onSubmit.bind(this)}>Add</button>
		</div>)
	}
}

export default TodoInput;