import React from 'react';

function Todo() {
    return (
        <div>
            <div>
                todohd
                <strong>2024.04.22</strong>
                <p>오늘의 할 일을 적어보세요.</p>
            </div>
            <div>
                todoedtor
                <strong>새로운 Todo작성하기</strong>
                <input type="checkbox" />
                <button>할 일 추가</button>
            </div>
            <div>
                todolist
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
        </div>
    );
}

export default Todo;
