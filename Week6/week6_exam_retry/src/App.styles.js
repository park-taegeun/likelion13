import styled from "styled-components";

export const TitleSection = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 150px;
    gap: 20px;
    align-items: flex-start;
`;

export const Title = styled.p`
    color: #1C1B1A;
    font-family: Pretendard;
    font-size: 48px;
    font-style: normal;
    font-weight: 700;
    line-height: 130%; /* 62.4px */
`;

export const TitleButton = styled.button`
    display: inline-flex;
    padding: 10px 30px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 10px;
    color: #FFF;
    font-family: Pretendard;
    font-size: 16px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    border-radius: 20px;
    background: #1C1B1A;
`;