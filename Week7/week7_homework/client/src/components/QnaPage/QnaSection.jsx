import { useState } from "react";
import QnaList from "./QnaList";
import {
    Container,
    QnaForm,
    QnaInput,
    QnaButton
} from "./QnaSection.styles";

export default function QnaSection() {
    const [text, setText] = useState("");
    const [qnaList, setQnaList] = useState([]);

    const handleChange = (e) => {
        setText(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (text.trim() === "") return;

        setQnaList([...qnaList, text]);
        setText("");
    };

    return (
        <Container>
            <QnaList qnaList={qnaList} />
            <QnaForm onSubmit={handleSubmit}>
                <QnaInput 
                    type="text"
                    onChange={handleChange}
                    value={text}
                    placeholder="문의사항을 작성해주세요"
                />
                <QnaButton type="submit">등록</QnaButton>
            </QnaForm>
        </Container>
    );
}