import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.div`
    display: flex;
    flex-direction: row;
    padding: 10px 25px;
    width: 100%;
    justify-content: space-between; 
    background-color: white;
    z-index: 1000;
    position: fixed; // 스클롤 시에도 위치 고정
`;

export const LogoImg = styled.img`
    width: 24px;
    height: 25px;
    cursor: pointer;    
`;

export const ButtonSection = styled.div`
    display: flex;
    flex-direction: row;
    gap: 70px;
    margin-left: 0;
`;

export const SelectButton = styled.button`
    border: none;
    background-color: white;
    font-size: 19px;
    cursor: pointer;
`;

export const LoginButton = styled(Link)`
    border: none;
    text-decoration: none;
    color: black;
    background-color: white;
    font-size: 19px;
    cursor: pointer;
`;

export const CartButton = styled.button`
    border: none;
    background-color: white;
    font-size: 19px;
    cursor: pointer;
`;