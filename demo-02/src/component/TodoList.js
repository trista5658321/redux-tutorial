import React, { Component } from 'react';
import TodoItem from './TodoItem';

class TodoList extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        const { todos, saveTask, deleteTask, completeTask } = this.props;
        return (
            <table>
                <thead>
                    <tr>
                        <th>Todo</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        todos.map((todo, index) => (
                            <TodoItem
                                key={index}
                                idx={index}
                                todo={todo}
                                saveTask={saveTask}
                                deleteTask={deleteTask}
                                completeTask={completeTask}
                            />
                        ))
                    }
                </tbody>
            </table>
        );
    }
}

export default TodoList;