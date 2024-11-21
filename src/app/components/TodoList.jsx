import React from 'react';

function TodoList() {
    return (
        <div>
            <div>
                <h2>할 일 목록</h2>
                <ul>
                    <li>
                        <input type="checkbox" name="" id="" />
                        <strong>고양이 밥주기</strong>
                        <p>2024.04.22</p>
                        <button>삭제</button>
                    </li>
                    <li>
                        <input type="checkbox" name="" id="" />
                        <strong>감자 캐기</strong>
                        <p>2024.04.22</p>
                        <button>삭제</button>
                    </li>
                    <li>
                        <input type="checkbox" name="" id="" />
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
