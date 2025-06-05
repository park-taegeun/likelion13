import styled from "styled-components";

export const Container = styled.div`
    padding-top: 80px;
    padding-left: 25px;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const Title = styled.h1`
    background-color: burlywood;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const FormSection = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
`;

export const AddButton = styled.button`
    width: 80px;
    border-radius: 10px;
    background-color: lightgrey;
    display: flex;
    align-items: center;
    justify-content: center;

    &:hover {
        background-color: grey;
    }
`;