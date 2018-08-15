import React, { Component } from 'react';
import classNames from 'classnames';

class TodoItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isEditing: false
        };
    }
    _onEditClick=() => {
        this.setState({ isEditing: true });
    }
    _onCancelClick = () => {
        this.setState({ isEditing: false });
    }
    _onSaveClick = (e, idx) => {
        const input = this.editInput;
        this.props.saveTask(idx, input.value);
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
                        <button onClick={ (e) => this._onSaveClick(e, idx) }>Save</button>
                        <button onClick={ this._onCancelClick }>Cancel</button>
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
                        { /* arrow function: this 指稱的對象在所定義時就固定了，而不會隨著使用時的脈絡而改變 */}
                        <button onClick={ () => this._onEditClick(idx) }>Edit</button>

                        {/* regular function: this 指稱的對象會改變(callback function 被執行當下位置的 this) */}
                        {/* <button onClick={ this._onEditClick }>Edit</button> */}
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