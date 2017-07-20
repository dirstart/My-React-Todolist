import React, {
	Component
} from 'react';
import Todo from './Todo';

class TodoList extends Component {
	static defaultProps = {
		contents: []
	}
	handleDeleteList(index) {
		if (this.props.onDeleteList) {
			this.props.onDeleteList(index);
		}
	}
	render() {
		return (<div className="list-all-wrapper">
			{this.props.contents.map((content,i)=>{
				return <Todo key={i} index={i} content={content} onDeleteList={this.handleDeleteList.bind(this)} />
			})}
		</div>)
	}
}

export default TodoList;