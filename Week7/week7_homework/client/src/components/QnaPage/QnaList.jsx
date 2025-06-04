import {
    Container,
    QnaCard,
    QnaText,
    QnaTextHr,
} from "./QnaList.styles";

export default function QnaList({ qnaList }) {
    return (
        <Container>
            {qnaList.map((qna, idx) => (
                <QnaCard key={idx}>
                    <QnaText>문의사항: {qna} <QnaTextHr /></QnaText>
                </QnaCard>  
            ))}
        </Container>
    );
}