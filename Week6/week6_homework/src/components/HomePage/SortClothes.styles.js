import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    justify-content: flex-end;
`;

export const ButtonDiv = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 10px;
    gap: 5px;
    width: 7.2%;
`;

export const Button = styled.button`
    border: none;
    border-radius: 8px;
    background-color: rgb(227, 228, 227);
    padding: 1px;
    cursor: pointer;
    transition: transform 0.2s ease, background-color 0.2s ease;

    &:hover {
        background-color: rgb(181, 181, 181);
        transform: scale(1.05);
    }
`;