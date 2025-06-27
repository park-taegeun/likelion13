import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: row; // 내부요소 가로방향 정렬
    align-items: center; // 수직 방향 가운데 정렬
    justify-content: center; // 수평 방향 가운데 정렬
    margin-top: 136px; // 위쪽 여백 조정
`;

export const BackImg = styled.img`
    position: absolute; // 절대 위치로 배치(부모 요소 기준)
    top: 20;
    left: 0;
    margin-left: 45px; // 왼쪽 여백 조정
    width: 450px; // 너비
    object-fit: cover; // 이미지가 비율 유지하면서 요소를 꽉 채우기
    z-index: -1; // 다른 요소 뒤에 배치 (배경)
    border-radius: 20px; // 테두리 둥글게
    pointer-events: none; // 마우스 이벤트 무시
`;

export const TextSection = styled.div`
    display: flex;
    flex-direction: column; // 내부 요소 세로방향 정렬
    justify-content: center; // 수평 방향 가운데 정렬
    align-items: center; // 수직 방향 가운데 정렬
    margin-right: 100px; // 오른쪽 여백 조정
    line-height: 20px; // 줄 간격 조정
`;

export const MainText = styled.p`
    text-align: center; // 글자 가운데 정렬
    color: #1C1C1C; // 글자 색상
    font-family: Pretendard;
    font-size: 37px; // 글자 크기
    font-style: normal;
    font-weight: 700; // 글자 굵기
    line-height: 40px; // 줄 간격 조정
`;

export const SubText = styled.p`
    margin-top: 0; // 위쪽 여백 조정
    font-size: 16px; // 글자 크기
    font-weight: 500; // 글자 굵기
    color: #1C1C1C; // 글자 색상
`;

export const IdeathonImg = styled.img`
    width: 850px; // 너비
    height: 500px; // 높이
    border-radius: 68px; // 테두리 둥글게
    background: linear-gradient(180deg, rgba(254, 254, 254, 0.00) 53.37%,
    rgba(254, 254, 254, 0.45) 100%), url(<path-to-image>) lightgray 50% / contain no-repeat, #E9E9E9;
`;