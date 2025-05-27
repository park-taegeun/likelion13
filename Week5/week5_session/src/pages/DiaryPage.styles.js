import styled from "styled-components";

export const MainContainer = styled.div`
  padding: 20px 100px;
`;

export const TitleWrapper = styled.div`
  display: flex;
  flex-direction: center;
  align-items: center;
  gap: 20px;
  margin-bottom: 13px;
`;

export const PointImg = styled.img`
  height: 40px;
`;

export const Title = styled.h1`
  color: black;
  font-weight: bold;
`;

export const SubTitle = styled.p`
  color: #7C7C7C;
  font-family: Pretendard;
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  margin-bottom: 20px;
`;

export const DiaryButton = styled.button`
  width: 243px;
  height: 73px;
  margin-bottom: 80px;
  color: white;
  background-color: #00CE52;
  border-radius: 10px;
  border: none;
  font-size: x-large;
  font-weight: 700;
  
  &:hover {
    background-color:rgb(4, 142, 59);
    cursor: pointer;
  }
`;

export const DiaryWrapper = styled.div`

`;

export const TopMemo = styled.div`
  display: flex;
  flex-direction: row;
  position: relative;
  margin-bottom: 40px;
`;

export const BottomMemo = styled.div`
  display: flex;
  width: 1200px;
  height: 800px;
  position: relative;
  flex-direction: row;
`;

export const MemoDiv1 = styled.div`
  background-color: #FFD15B;
  border-radius: 10px;
  height: 500px;
  width: 500px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 100px;
  font-weight: bold;
  box-shadow: 12px 12px 12px 0px rgba(0, 0, 0, 0.20);
`;

export const MemoDiv2 = styled.div`
  background-color: #BEE317;
  border-radius: 10px;
  position: absolute;
  top: 135px;
  left: 450px;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 250px;
  width: 650px;
  font-size: 48px;
  font-weight: bold;
  box-shadow: 12px 12px 12px 0px rgba(0, 0, 0, 0.20);
`;
/**
 * 부모에 position: relative 주고, 자식에 position: absolute 주면 스크롤해도 끌려다니지 않고 자식 요소가 원하는 위치에 고정
 * 위치 설정 - top, left 요소로 위치 설정정
 */

export const MemoDiv3 = styled.div`
  background-color: #5A5DFF;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 48px;
  font-weight: bold;
  height: 200px;
  width: 330px;
  position: absolute;
  bottom: 190px;
  left: 150px;
  transform: rotate(-10deg); // 왼쪽(반시계방향) 회전
  box-shadow: 12px 12px 12px 0px rgba(0, 0, 0, 0.20);
`;

export const MemoImg = styled.img`
  height: 400px;
  width: 700px;
  border-radius: 10px;
  position: absolute;
  top: 70px;
  right: 20px;transform: rotate(10deg); // 오른쪽(시계방향) 회전
  box-shadow: 12px 12px 12px 0px rgba(0, 0, 0, 0.20);
`;