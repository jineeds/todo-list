'use client';

import React, { useEffect, useState } from 'react';
import TodoEditor from './TodoEditor';
import TodoHd from './TodoHd';
import TodoList from './TodoList';

function Todo() {
    const [todos, setTodes] = useState([]);

    // 마운트 시
    useEffect(() => {
        const savedTodos = JSON.parse(localStorage.getItem('todos')) || [];
        setTodes(savedTodos);
    }, []);
    // 로컬스토리지에서 데이트를 가져와서
    // todos상태에 저장

    // TODOS가 업데이트시
    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos));
    }, [todos]);

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
