import { useState } from "react";

function TodoInsert( {onInsert} ) {
    const [text, setText] = useState(""); // 상태변수: text, 상태변수 변경: setText, 상태변수 초깃값: ""

    const onChange = (e) => { 
        setText(e.target.value);
    }; // 이벤트 핸들러 함수 onChange

    const onSubmit = (e) => {
        e.preventDefault();

        if (text.trim() === "")
            return;

        onInsert(text);
        setText("");
    }; // 이벤트 핸들러 함수 onSubmit

    return (
        <form onSubmit={onSubmit}>
            <input type="text" value={text} onChange={onChange} />
            <button type="submit">추가</button>
        </form>
    );
}

export default TodoInsert;