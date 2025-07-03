import styled from "styled-components";

export const Container = styled.div`
    margin-top: 10px;
    display: flex;
    flex-direction: column-reverse;
    gap: 20px;
    background-color: rgb(244, 232, 205);
    width: 50%;
    justify-content: center;
    padding: 10px;
    border-radius: 10px;
`;

export const QnaForm = styled.form`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 20px;
`;

export const QnaInput = styled.input`
    border: none;
    border-bottom: 2px solid black;
    outline: none;
    width: 230px;
    background-color: rgb(237, 221, 187);
    color: black;
    font-size: 15px;
    padding: 8px;
`;

export const QnaButton = styled.button`
    padding: 2px 8px;
    border-radius: 8px;
    font-size: 15px;
    border: none;
    background-color: rgb(227, 228, 227);
    cursor: pointer;

    &:hover {
        background-color: rgb(164, 168, 164);
    }
`;