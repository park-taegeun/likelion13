import { Link } from "react-router-dom";
import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: row;
    gap: 110px;
    margin-right: 150px;
`;

export const Page = styled(Link)`
    font-family: "Pretendard";
    font-size: 23px;
    text-decoration: none;
    color: black;
    width: max-content;
`;