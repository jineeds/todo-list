import React from 'react';

function TodoList() {
    return (
        <div>
            <strong>할 일 목록</strong>
            <input type="checkbox" />
            <div>
                <ul>
                    <li>
                        <h4>Todoitem.jsx</h4>
                        <input type="checkbox" />
                        <strong>고양이 밥주기</strong>
                        <p>2024.04.22</p>
                        <button>삭제</button>
                    </li>
                    <li>
                        <h4>Todoitem.jsx</h4>
                        <input type="checkbox" />
                        <strong>감자 캐기</strong>
                        <p>2024.04.22</p>
                        <button>삭제</button>
                    </li>
                    <li>
                        <h4>Todoitem.jsx</h4>
                        <input type="checkbox" />
                        <strong>고양이 놀아주기</strong>
                        <p>2024.04.22</p>
                        <button>삭제</button>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default TodoList;
