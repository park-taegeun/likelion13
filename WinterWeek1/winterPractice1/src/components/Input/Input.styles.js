import styled from "styled-components";

export const Container = styled.div`
    display: flex; 
    flex-direction: row; // 내부 요소 가로 정렬
    align-items: center; // 세로 방향 가운데 정렬
    border-radius: 80px; 
    padding: 0 13px; // 상하 여백 0 좌우 여백 13
    background-color: rgb(64, 62, 62); // 배경색
    width: 420px; // 전체 너비
    height: 45px; // 전체 높이
    flex-shrink: 0; // 부모 요소가 작아져도 이 요소는 줄지 않음
`;

export const SearchImg = styled.img`
    width: 23px; // 너비
    height: 23px; // 높이
    margin-right: 9px; // 사진 오른쪽에 입력창과의 간격
`;

export const InputSection = styled.input`
    border: none; // 테두리 제거
    background-color:rgb(64, 62, 62); // 배경색
    color: white; // 글자 색상
    font-size: 14px; // 글자 크기
    flex: 1; // 남은 공간 모두 차지하게

    &:focus { // 포커스 되었을 때
        outline: none; // 테두리 제거
    }

    &::placeholder {
        color: white; // 글자 색상
    }
`;

export const SearchButton = styled.button`
    width: 32px; // 너비
    height: 32px; // 높이
    background-color: white; // 글자 색상
    border: none; // 테두리 제거
    border-radius: 50%; // 원형으로 만들기
    margin-left: 10px; // 입력창과의 왼쪽 간격
    cursor: pointer; // 커서 형태
`;