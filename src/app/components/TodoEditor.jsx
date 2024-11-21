import React from 'react';

function TodoEditor() {
    return (
        <div>
            <strong>새로운 Todo작성하기</strong>
            <div>
                <input type="text" placeholder="할 일을 입력하세요." />
                <button>할 일 추가</button>
            </div>
        </div>
    );
}

export default TodoEditor;
