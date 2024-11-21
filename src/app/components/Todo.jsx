import React from 'react';
import TodoEditor from './TodoEditor';
import TodoHd from './TodoHd';
import TodoList from './TodoList';

const mockTodoData = [
    { id: 1, isDone: false, task: '고양이 밥주기', createDate: '2024.04.22' },
    { id: 2, isDone: false, task: '감자 캐기', createDate: '2024.04.22' },
    { id: 3, isDone: false, task: '고양이 놀아주기', createDate: '2024.04.22' },
];

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
