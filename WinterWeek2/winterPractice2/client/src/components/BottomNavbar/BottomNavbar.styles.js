import { Link } from "react-router-dom";
import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: row;
    flex: start; // 좌측 정렬
    gap: 130px;
    margin-top: 15px;
    background-color: black;
    width: 100vw; // 뷰포트 화면 꽉 채우기
`;

export const Page = styled(Link)`
    display: inline-block;
    color: white;
    font-size: 21px;
    text-decoration: none;
    cursor: pointer;
`;