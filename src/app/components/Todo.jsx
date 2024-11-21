import React from 'react';
import TodoEditor from './TodoEditor';
import TodoHd from './TodoHd';
import TodoList from './TodoList';

function Todo() {
    return (
        <div>
            <TodoHd />
            <TodoEditor />
            <TodoList />
        </div>
    );
}

export default Todo;
