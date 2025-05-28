import styled from "styled-components";

export const InputSection = styled.input`
    border: none;
    border-bottom: 1px solid black; // 테두리 생성
    outline: none; // 입력란 클릭 시 테두리 제거
    font-size: 19px;
    color: black;
    width: 200px;
    padding: 4px 0;
    margin-right: 0px;

    &::placeholder { // placeholder 스타일링
        color: black;
        font-style: italic;
    }
`;