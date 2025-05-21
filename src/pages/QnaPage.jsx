import Header from "../components/Header/Header";
import QnaCard from "../components/qnapage/QnaCard";
import QnaForm from "../components/qnapage/QnaForm";
import { useState } from "react";
import { 
    MainContainer,
    TitleWrapper,
    PointImg,
    Title,
    SubTitle,
    CardList,
} from "./QnaPage.styles";
import yellowPoint from "../assets/images/yellowPoint.png";

export default function QnaPage() {
    const [qnaList, setQnaList] = useState([]); // state 변수 - qnaList - 초기화 값: 빈 리스트

    const handleAddQna = (question, answer) => {
        setQnaList([...qnaList, {question, answer}]);
    };
    /**
     * 기존 qnaList에 question과 answer 객체를 추가하는 함수
     */

    return (
        <>
            <Header />
            <MainContainer>
                <TitleWrapper>
                    <PointImg src={yellowPoint} alt='포인트 이미지'/>
                    <Title>Q&A</Title>
                </TitleWrapper>
                <SubTitle>
                    멋사에게 궁금한 점을 남겨주세요!
                </SubTitle>
                <CardList>
                    {qnaList.map((qna, index) => (
                        <QnaCard key={index} question={qna.question} answer={qna.answer} />
                    ))}
                </CardList>
                <QnaForm onAdd={handleAddQna} />
            </MainContainer>
        </>
    );
}

/**
 * <QnaCard key={index} question={qna.question} answer={qna.answer} />
 * - QnaCard 컴포넌트에게 question이라는 이름으로 qna.question 전달
 * - QnaCard 컴포넌트에게 answer이라는 이름으로 qna.answer 전달
 * - QnaCard 컴포넌트에게 key라는 이름으로 index 전달
 * 
 * <QnaForm onAdd={handleAddQna} />
 * - QnaForm 컴포넌트에게 handleAddQna 함수를 onAdd라는 이름으로 전달
 * 
 * JSX 안에서는 java script 코드 사용 시, 반드시 중괄호 사용
 */