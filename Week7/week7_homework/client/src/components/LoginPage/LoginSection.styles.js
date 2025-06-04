import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    border: 1px solid lightgrey;
    padding: 0px;
    width: 600px;
`;

export const NaverOrKakao = styled.div`
    display: flex;
    flex-direction: row;
    margin-top: 0;
`;

export const NaverButton = styled.button`
    background-color: lightgrey;
    color: green;
    width: 50%;
    border: none;
    display: flex;
    flex: start;
    font-size: 21px;
    padding: 0 10px;
    font-weight: 550;
    cursor: pointer;
`;

export const KakaoButton = styled.button`
    background-color: lightgrey;
    color: rgb(92, 56, 4);
    width: 50%;
    border: none;
    display: flex;
    flex: start;
    font-size: 21px;
    padding: 0 10px;
    font-weight: 650;
    cursor: pointer;
`;