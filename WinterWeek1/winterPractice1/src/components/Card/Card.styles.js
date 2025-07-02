import styled from "styled-components";

export const  Container = styled.div`
    display: flex;
    flex-direction: row;
`;

export const MimoticonSection = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
`;

export const Mimoticon = styled.img`
    width: 366px;
    height: 366px;
    flex-shrink: 0;
    aspect-ratio: 1/1;
`;

export const ImgText = styled.p`
    text-align: center;
    font-family: Pretendard;
    font-size: 30px;
    font-style: normal;
    font-weight: 800;
    line-height: 25px;
    margin-top: 0;

    &.mimo1 {
        color: #FF6370;
    }

    &.mimo2 {
        color: #01D354;
    }

    &.mimo3 {
        color: #FFB801;
    }
`;

export const TextBox = styled.div`
    display: flex;
    flex-direction: column;
    padding: 0px;
    margin: 20px;
    margin-bottom: 80px;
    flex-shrink: 0;
    border-radius: 20px;
    background: #D2D2D2;
    text-align: center;
    width: 350px
`;

export const MainText = styled.p`
    color: #1C1C1C;
    font-family: Pretendard;
    font-size: 25px;
    font-style: normal;
    font-weight: 700;
    line-height: 15px;
    margin-top: 45px;
`;

export const SubText = styled.p`
    color: #1C1C1C;
    text-align: center;
    font-family: Pretendard;
    font-size: 17px;
    font-style: normal;
    font-weight: 500;
    line-height: 25px;
    margin-top: 0;
`;