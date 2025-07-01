import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    flex: start;
    justify-content: center;
    cursor: pointer;
    width: 100%;
    margin-bottom: 50px;
`;

export const ClotheImg = styled.img`
    width: 360px;
    height: 540px;
`;

export const ClotheNamePriceDiv = styled.div`
    display: flex;
    flex-direction: row;
    gap: 80px;
`;

export const ClotheName = styled.p`
    text-decoration: underline;
    font-weight: 600;
`;

export const ClothePrice = styled.p`
    font-weight: 600;
`;

export const ClotheColor = styled.p`
    text-decoration: underline;
    font-weight: 600;
`;