import { useState } from "react";
import {
    Form,
    Input,
    Button,
} from "./QnaForm.styles";

export default function QnaForm({ onAdd }) {
    const [question, setQuestion] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        
        if (question.trim()) {
            onAdd(question, null);
            setQuestion("");
        }
    }

    const handleChange = (e) => {
        setQuestion(e.target.value);
    }

    return (
        <Form onSubmit={handleSubmit}>
            <Input 
                type="text"
                placeholder="질문을 입력해주세요."
                value={question}
                onChange={handleChange}
            />
            <Button type="submit">등록</Button>
        </Form>
    );
}