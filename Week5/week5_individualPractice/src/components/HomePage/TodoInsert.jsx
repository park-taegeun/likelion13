import { useState } from "react-router-dom";

export default function TodoInsert({ onInsert }) {
    const [text, setText] = useState("");

    const onChange = (e) => {
        setText(e.target.value);
    };

    const onSubmit = (e) => {
        e.preventDefault();

        if (text.trim() === "")
            return;

        onInsert(text);
        setText("");
    }
    
    return (
        <TodoForm onSubmit={onSubmit}>
            <Input type="text" placeholder="할 일을 입력하세요" onChange={onChange} value={text} />
            <Button type="submit">추가</Button>
        </TodoForm>
    );
}