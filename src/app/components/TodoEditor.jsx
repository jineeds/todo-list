'use client';

import classNames from 'classnames';
import React, { useRef, useState } from 'react';
import { BsFillBackspaceFill } from 'react-icons/bs';

const TodoEditor = ({ addTodo }) => {
    const [task, setTask] = useState('');

    const inputrRef = useRef();

    const onChangeTask = (e) => {
        setTask(e.target.value);
    };
    const onSubmit = () => {
        if (!task) {
            return;
        }

        addTodo(task);

        setTask('');
        inputrRef.current.focus();
    };

    const onKeyDown = (e) => {
        console.log(e);
        if (e.key === 'Enter') onSubmit();
        if (e.key === 'Escape') {
            setTask('');
            inputrRef.current.focus();
        }
    };

    return (
        <div>
            <h2>새로운 Todo 작성하기</h2>
            <div>
                <form>
                    <input
                        type="text"
                        value={task}
                        ref={inputrRef}
                        onKeyDown={onKeyDown}
                        onChange={onChangeTask}
                        placeholder="할 일을 입력하세요."
                        className="p-3 text-black"
                    />
                    <button>
                        <BsFillBackspaceFill />
                    </button>

                    <button
                        type="submit"
                        onClick={onSubmit}
                        disabled={!task}
                        className={classNames('p-3', task ? 'bg-blue-300' : 'bg-gray-300')}
                    >
                        할 일 추가
                    </button>
                </form>
            </div>
        </div>
    );
};

export default TodoEditor;
