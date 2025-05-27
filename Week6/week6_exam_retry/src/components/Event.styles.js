import styled from "styled-components";

export const EventDiv = styled.div`
    width: 370px;
    height: 277px;
    border-radius: 30px;
    padding: 30px;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: flex-start;
    background-image: 
        linear-gradient(179deg, rgba(0, 0, 0, 0.00) 1.07%, rgba(0, 0, 0, 0.00) 27.99%, rgba(0, 0, 0, 0.00) 57.35%, #1A1A1A 98.95%),
        url(${props => props.background});
    background-position: center;
`;

export const Description = styled.p`
    color: #FFF;
    font-family: Pretendard;
    font-size: 20px;
    font-style: normal;
    font-weight: 500;
    line-height: 120%; /* 24px */
`;

export const Title = styled.h2`
    color: #FFF;
    font-family: Pretendard;
    font-size: 32px;
    font-style: normal;
    font-weight: 700;
    line-height: 120%; /* 38.4px */
`;