import React, {
	Component
} from 'react';

class Todo extends Component {
	static defaultProps = {
		content: ''
	}

	handleDeleteList() {
		if (this.props.onDeleteList) {
			this.props.onDeleteList(this.props.index);
		}
	}
	render() {
		const {
			content
		} = this.props;
		return (<div className="list-content-wrapper">
						<div className="list-content">
							{content.content}
						</div>
						<div className="list-delete" 
						onClick={this.handleDeleteList.bind(this)}>finish</div>
				</div>)
	}
}

export default Todo