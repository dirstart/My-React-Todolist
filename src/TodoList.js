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
		let isTrue = [];
		for (let obj of contents) {
			if (obj.flag === true) {
				isTrue.push(obj);
			}
		}

		return (<div className="list-all-wrapper">
		{
			isTrue.map((obj,i)=>{
				return <TodoContent  content={obj.content} key={i} index={obj.index} 
				onHandleDelete={this.handleDelete.bind(this)}/>
			})
		}
		</div>)
	}
}

export default TodoList;