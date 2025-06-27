import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column; // 내부요소 세로 방향 정렬
    align-items: center; // 수평 가운데 정렬
    justify-content: center; // 수직 가운데 정렬
`;

export const TextSection = styled.div`
    text-align: center; // 텍스트 가운데 정렬
    line-height: 10px; // 줄 간격 조정
`;

export const SubText = styled.p`
    font-size: 14px; // 글자 크기 조정
    font-weight: 500; // 글자 굵기 조정
`;

export const MainText = styled.p`
    font-size: 20px; // 글자 크기 조정
    font-weight: 700; // 글자 굵기 조정
`;

export const ButtonSection = styled.div`
    display: flex; 
    flex-direction: row; // 내부요소 가로 방향 정렬
    gap: 90px; // 요소 간격 조정
`;

export const Button = styled.button`
    margin-top: 25px; // 위쪽 여백 조정
    width: 300px; // 가로 길이
    height: 150px; // 세로 길이
    flex-shrink: 0; // 공간 부족 시 크기 축소 방지
    border-radius: 16px; // 테두리 둥글게
    border: none; // 테두리 제거
    background: linear-gradient(180deg, #636363 0%, #1C1C1C 100%);
    color: #FEFEFE; // 글자 색상
    font-size: 23px; // 글자 크기 조정
    font-weight: 700; // 글자 굵기 조정
    cursor: pointer; // 마우스 커서 스타일
`;