import { Link } from "react-router-dom";
import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: row;
    gap: 100px;
    margin-right: 90px;
`;

export const Page = styled(Link)`
    font-family: "Pretendard";
    font-size: 19px;
    text-decoration: none;
    color: black;
    width: max-content;
`;