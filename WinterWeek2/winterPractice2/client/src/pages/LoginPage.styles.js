import styled from "styled-components";

export const Container = styled.div`
    padding-top: 80px;
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh; // 브라우저 화면의 세로 전체 높이만큼 최소 높이 설정 -> 뷰포트 높이의 100% = 현재 화면 높이
`;