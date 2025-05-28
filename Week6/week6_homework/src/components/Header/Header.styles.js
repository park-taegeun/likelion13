import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: row;
    padding: 10px 25px;
    margin: 0;
    width: 100vw;
    justify-content: space-between;
    // 스크롤링 함에도 고정시키기 위한
    background-color: white;
    z-index: 1000;
    position: fixed;
`;

export const LogoImg = styled.img`
    width: 27px;
    height: 30px;
`;

export const ButtonSection = styled.div`
    display: flex;
    flex-direction: row;
    gap: 90px;
    margin-left: 0;
`;

export const SelectButton = styled.button`
    border: none;
    background-color: white;
    font-size: 23px;
    cursor: pointer;
`;

export const LoginButton = styled.button`
    border: none;
    background-color: white;
    font-size: 23px;
    cursor: pointer;
`;

export const CartButton = styled.button`
    border: none;
    background-color: white;
    font-size: 23px;
    cursor: pointer;
`;