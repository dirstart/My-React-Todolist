import React from 'react';
import PropTypes from 'prop-types';
class TodoContent extends React.Component {
	static PropTypes = {
		content: PropTypes.string,
		onHandleDelete: PropTypes.func
	}
	static defaultProps = {
		content: ''
	}
	HandleDelete() {
		if (this.props.onHandleDelete) {
			this.props.onHandleDelete(this.props.index);
		} else {
			console.log("没有onHandleDelete");
		}
	}
	render() {
		return (<div className="list-content-wrapper" >
			<div className="list-content">{this.props.content}</div>
			<span className="list-delete" onClick={this.HandleDelete.bind(this)}
			>删除</span>
		</div>)
	}
}

export default TodoContent;