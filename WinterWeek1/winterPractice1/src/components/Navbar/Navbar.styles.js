import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.div`
    display: flex;
    flex-direction: row; // 내부 요소 가로방향 정렬
    gap: 54px; // 내부 요쇼 사이 간격
    margin-left: 450px; // 왼쪽 간격 (입력창과의 간격)
`;

export const Button = styled(Link)`
    color: #A7A7A7;          
    font-family: Pretendard;
    font-size: 20px;
    font-weight: 500;
    padding-bottom: 2px; // 밑줄과 텍스트 붙게
    border-bottom: none; // 기본은 밑줄 없음
    text-decoration: none; // 혹시 Link 기본 밑줄 제거

    &.about {
        color: black;
        font-weight: bold;
        border-bottom: 2px solid black; // 검정 밑줄
    }

    &.project {
        color: black;
        font-weight: bold;
        border-bottom: 2px solid rgb(231, 125, 26); // 주황 밑줄
    }

    &.diary {
        color: black;
        font-weight: bold;
        border-bottom: 2px solid rgb(19, 175, 82); // 초록 밑줄
    }

    &.qna {
        color: black;
        font-weight: bold;
        border-bottom: 2px solid rgb(200, 27, 154); // 핑크 밑줄
    }
`;
