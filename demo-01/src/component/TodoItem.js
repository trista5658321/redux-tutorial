import React, { Component } from 'react';
import classNames from 'classnames';

class TodoItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isEditing: false
        };
        this._onEditClick = this._onEditClick.bind(this);
        this._onCancelClick = this._onCancelClick.bind(this);
        this._onSaveClick = this._onSaveClick.bind(this);
    }
    _onEditClick() {
        this.setState({ isEditing: true });
    }
    _onCancelClick() {
        this.setState({ isEditing: false });
    }
    _onSaveClick() {
        const input = this.editInput;
        this.props.saveTask(input.getAttribute('data-idx'), input.value);
        this.setState({ isEditing: false });
    }
    render() {
        const { todo, idx, deleteTask, completeTask } = this.props;
        const taskClass = classNames({
            task: true,
            'task-completed': todo.isCompleted
        });
        
        return this.state.isEditing ?
            (
                <tr>
                    <td>
                        <input
                            type="text"
                            data-idx={idx}
                            defaultValue={todo.task}
                            ref={(input) => { this.editInput = input; }}
                        />
                    </td>
                    <td>
                        <button onClick={this._onSaveClick}>Save</button>
                        <button onClick={this._onCancelClick}>Cancel</button>
                    </td>
                </tr>
            )
            :
            (
                <tr>
                    <td>
                        <span className={taskClass}>{todo.task}</span>
                    </td>
                    <td>
                        <button onClick={ this._onEditClick }>Edit</button>
                        <button onClick={ () => deleteTask(idx) }>Delete</button>
                        <button onClick={ () => completeTask(idx) }>
                            { !todo.isCompleted ? "Complete" : "Not complete yet" }
                        </button>
                    </td>
                </tr>
            );
    }
}

export default TodoItem;