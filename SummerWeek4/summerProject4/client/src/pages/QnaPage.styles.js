import styled from "styled-components";

export const Container = styled.div`
    padding-top: 80px;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;    
`;

export const TitleSection = styled.div`
    display: flex;
    flex-direction: row;
    font-size: x-large;
    width: 100vw;
    background-color: rgb(250, 251, 250);
    align-items: center;
    justify-content: center;
`;

export const Logo = styled.img`
    width: 48px;
    height: 48px;
    margin-right: 10px;
`;

export const Title = styled.h1`
    font-weight: 600;
`;