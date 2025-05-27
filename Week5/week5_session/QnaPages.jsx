import { useState } from "react-router-dom";
import QnaCard from "./src/components/qnapage/QnaCard";

export default function QnaPages() {
    const [qna, setQna] = useState([]);
    
    const handleAddQna = (question, answer) => {
        setQna([...qna, {qnestion, answer}]);
    };

    return (
        qna.map((qna, index) => (
            <QnaCard key={index} quesion={qna.question} />
        ))
    );
}