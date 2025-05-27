import img1 from "../src/assets/images/img_1.png";
import img2 from "./assets/images/img_2.png";
import img3 from "./assets/images/img_3.png";
import styled from "styled-components";

export default function App() {
  return (
    <MainContainer>
      <TitleDiv>
        <Title>안녕하세요,<br />멋쟁이사자처럼입니다.</Title>
        <Button>멋사 바로가기</Button>
      </TitleDiv>
      <CardDiv>
        <Card src={img1} alt='1번 이미지' />
        <Card src={img2} alt='2번 이미지' />
        <Card src={img3} alt='3번 이미지' />
      </CardDiv>
    </MainContainer>
  ); 
}

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const TitleDiv = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

const Title = styled.h1`

`;

const CardDiv = styled.div`
  display: flex;
  flex-direction: row;
`;

const Button = styled.button`
  border-radius: 20px;
  background: #1C1B1A;
  color: white;
`;