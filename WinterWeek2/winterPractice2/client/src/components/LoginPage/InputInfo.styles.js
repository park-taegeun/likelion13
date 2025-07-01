import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    font-size: 20px;
    width: 100%;
`;

export const Title = styled.p`
    background-color: lightgrey;
    margin-bottom: 12px;
    font-weight: 600;
    padding: 0 10px;
`;

export const InputForm = styled.form`
    display: flex;
    flex-direction: column;
    font-weight: 750;
`;

export const Input = styled.input`
    border: none;
    font-size: 20px;
    border-bottom: 2px solid black;
    font-weight: 750;
    outline: none;
    margin-left: 10px;

    &::placeholder {
        color: black;
        font-weight: 750;
    }
`;

export const FindMy = styled.div`
    display: flex;
    flex-direction: row;
    gap: 95px;
    margin-left: 10px;
`;

export const Text = styled.p`
    font-weight: 750; 
`;

export const Button = styled.button`
    font-weight: 750;
    border: none;
    background-color: white;
    font-size: 20px;
`;

export const LoginOrJoin = styled.div`
    margin-top: 17px;
    display: flex;
    flex-direction: row;
    width: 100%;
`;

export const LoginButton = styled.button`
    background-color: rgb(178, 200, 243);
    color: white;
    width: 50%;
    border: none;
    display: flex;
    font-size: 21px;
    padding: 0 10px;
    font-weight: 550;
    text-align: left;
    cursor: pointer;
`;

export const JoinButton = styled.button`
    background-color: lightgrey;
    width: 50%;
    border: none;
    display: flex;
    font-size: 21px;
    padding: 0 10px;
    font-weight: 550;
    text-align: left;
    cursor: pointer;
`;