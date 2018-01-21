import React, { Component } from 'react';
import classNames from 'classnames';

class TodoAdd extends Component {
    constructor(props) {
        super(props);
        this._onAddClick = this._onAddClick.bind(this);
    }
    _onAddClick() {
        const addInput = this.addInput;
        this.props.addTask(addInput.value);
        addInput.value = '';
    }
    render() {
        return (
            <div>
                <input
                    type="text"
                    ref={(input) => { this.addInput = input; }}
                />
                <button className={classNames('add')} onClick={this._onAddClick}>Create</button>
            </div>
        );
    }
}

export default TodoAdd;