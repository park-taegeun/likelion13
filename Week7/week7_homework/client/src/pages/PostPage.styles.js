import styled from "styled-components";

export const Container = styled.div`
    padding-top: 80px;
    padding-left: 25px;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const Title = styled.h1`
    font-size: 28px;
    font-weight: bold;
    margin-bottom: 30px;
    color: black;
`;

export const FormSection = styled.form`
    display: flex;
    flex-direction: column;
    width: 100%;
    max-width: 500px;
    gap: 16px;
`;

export const AddButton = styled.button`
    border-radius: 10px;
    background-color: lightblue;
    border: none;
    font-size: 16px;
    font-weight: bold;
    margin-bottom: 80px;
    cursor: pointer;
    padding: 10px 20px;
    color: white;

    &:hover {
        background-color: blue;
    }
`;