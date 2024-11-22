import classNames from 'classnames';
import React from 'react';

const TodoItem = ({ id, task, isDone, createDate, onUpdate, onDelite }) => {
    return (
        <li key={id}>
            <input
                type="checkbox"
                checked={isDone}
                onChange={() => {
                    onUpdate(id);
                }}
            />
            <strong className={classNames(isDone ? 'line-through' : '')}>{task}</strong>
            <span>{createDate}</span>
            <button
                onClick={() => {
                    onDelite(id);
                }}
            >
                삭제
            </button>
        </li>
    );
};

export default TodoItem;
