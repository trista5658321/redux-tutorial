import React, { Component } from 'react';
import TodoList from './TodoList';
import TodoAdd from './TodoAdd';
import classNames from 'classnames';
import '../css/style.css';

const todos = [
    {
      task: 'Install packages',
      isCompleted: false
    },
    {
      task: 'Add webpack.config.js',
      isCompleted: false
    },
    {
      task: 'Break UI into components',
      isCompleted: false
    }
];

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
          todos
        };
        this._saveTask = this._saveTask.bind(this);
        this._addTask = this._addTask.bind(this);
        this._deleteTask = this._deleteTask.bind(this);
        this._completeTask = this._completeTask.bind(this);
    }
    _saveTask(idx, val) {
        // copy array
        let newTodos = [...this.state.todos];
        // copy object
        newTodos[idx] = Object.assign({}, newTodos[idx], { task: val });
        this.setState({ todos: newTodos });
    }
    _addTask(val) {
        // 一樣不能直接修改state
        let newTodos = [...this.state.todos];
        newTodos.push({
            task: val,
            isCompleted: false
        });
        this.setState({ todos: newTodos });
    }
    _deleteTask(idx) {
        let newTodos = [...this.state.todos];
        newTodos.splice(idx, 1);
        this.setState({ todos: newTodos });
    }
    _completeTask(idx) {
        let newTodos = [...this.state.todos];
        newTodos[idx] = Object.assign({}, newTodos[idx], { isCompleted: !newTodos[idx].isCompleted });
        this.setState({ todos: newTodos });
    }
    render() {
        return ([
            <h1 key="title" className={classNames('title')}>React Todo List</h1>,
            <TodoAdd key="todoAdd" addTask={this._addTask}/>,
            <TodoList
                key="todoList"
                todos={this.state.todos}
                saveTask={this._saveTask}
                deleteTask={this._deleteTask}
                completeTask={this._completeTask}
            />
        ]);
    }
}

export default App;