import React, { useState } from 'react';
import TodoItem from './TodoItem';

const TodoList = ({ mockTodoData, onUpdate, onDelite }) => {
    const [search, setSearch] = useState('');

    const filteredTodes = () => {
        return mockTodoData.filter((item) => {
            item.task.toLowerCase().includes(search.toLocaleLowerCase);
        });
    };

    return (
        <div>
            <h2>할 일 목록</h2>
            <input
                type="search"
                value={search}
                onChange={(e) => {
                    setSearch(e.target.value);
                }}
                placeholder="검색어를 입력하세요."
            />
            <ul>
                {filteredTodes().map((item) => (console.log(item), (<TodoItem key={item.id} {...item} onUpdate />)))}
            </ul>
        </div>
    );
};

export default TodoList;
