'use client';

import React, { useState } from 'react';
import TodoEditor from './TodoEditor';
import TodoHd from './TodoHd';
import TodoList from './TodoList';
import { mockTodoData } from '@/data/TodoData';

function Todo() {
    const [todos, setTodes] = useState(mockTodoData);

    const addTodo = (task) => {
        const newTodo = {
            id: todos.length + 1,
            isDone: false,
            task: task,
            createDate: new Date().toLocaleDateString(),
        };

        setTodes([newTodo, ...todos]);
    };

    const onUpdate = (id) => {
        setTodes(
            todos.map((todo) => {
                return todo.id === id ? { ...todo, isDone: !todo.isDone } : 'todo';
            })
        );
    };

    const onDelete = (id) => {
        todos.filter((todo) => todo.id !== id);
    };
    return (
        <div>
            <TodoHd />
            <TodoEditor addTodo={addTodo} />
            <TodoList mockTodoData={todos} onUpdate={onUpdate} onDelite={onDelete} />
        </div>
    );
}

export default Todo;
