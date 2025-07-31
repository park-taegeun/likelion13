import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    padding: 0px 25px;
    width: 100%;
    align-items: center; 
`;

export const Logo = styled.h1`
    font-size: 20px;
    font-weight: 1000;
    display: inline-block; 
    transform: scaleX(1.1); // 글자 늘리기 - display: inline-block 있어야 함 
    letter-spacing: 2px; // 글자 간격 조정
    cursor: pointer;
    line-height: 0.8;
    margin: 0;
`;
