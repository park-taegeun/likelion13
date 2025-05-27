import {
    Card,
    Question,
    Answer,
} from "./QnaCard.styles";

export default function QnaCard({ question, answer }) {
    return (
        <Card>
            <Question>문의사항 : {question}</Question>
            <Answer> - {answer || "답변 예정"}</Answer>
            <hr color="darkblue"/>
        </Card>
    );
}