import React from 'react';
import TodoContent from './TodoContent';
import PropTypes from 'prop-types';
class TodoList extends React.Component {
	static PropTypes = {
		contents: PropTypes.array,
		onHandleDelete: PropTypes.func
	}
	static defaultProps = {
		contents: []
	}
	handleDelete(index) {
		if (this.props.onHandleDelete) {
			this.props.onHandleDelete(index);
		} else {
			console.log("TodoList 没有onHandleDelete");
		}
	}
	render() {
		const {
			contents
		} = this.props;
		return (<div className="list-all-wrapper">
			{contents.map((content,i)=>{ return <TodoContent key={i} index={i}
			onHandleDelete={this.handleDelete.bind(this)}
			content={content} />})}
		</div>)
	}
}

export default TodoList;