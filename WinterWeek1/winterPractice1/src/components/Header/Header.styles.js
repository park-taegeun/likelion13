import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: row; // 내부 요소 가로 정렬
    align-items: center; // 세로 방향 가운데 정렬
    padding-left: 50px; // 왼쪽 여백 50px
    padding-top: 0px; // 위쪽 여백 없음
`;

export const Logo = styled.p`
    color: #1C1C1C; // 글자 색상
    font-family: "TT Travels Next Trl"; 
    font-size: 38px; // 글자 크기
    font-weight: 700; // 글자 굵기
    margin-right: 20px; // 로고 오른쪽에 20px 간격 (input과의 간격)
`;