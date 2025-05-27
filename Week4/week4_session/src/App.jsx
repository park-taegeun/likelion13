import styled from "styled-components";
import Card from "./components/Card";

function App() {
  return (
    <Container>
      <Info>오늘의 소식</Info>
      <Cards>
        <Card imageUrl="https://www.skuniv.ac.kr/files/attach/images/81/882/270/b1334a71965f56b643ad277cd8b0cf5f.png">
          <span style={{ color: "white", fontSize: "1.25rem", fontWeight: 500 }}>
            ‘2025 서경대학교 대동제 ’Blooming!' 개최
          </span>
        </Card>
        <Card imageUrl="https://www.skuniv.ac.kr/files/attach/images/81/882/254/45749ac971d4822c8b726b22832af2ef.jpg">
          <span style={{ color: "white", fontSize: "1.25rem", fontWeight: 500 }}>
            멋쟁이사자처럼, ‘건강관리 서비스 개발’ 해커톤 성료
          </span>
        </Card>
      </Cards>
    </Container>
  );
}

const Container = styled.div`
  display: flex; 
  flex-direction: column;
`;
/**
 * Flexbox 설정
 * 자식 요소들을 세로 방향으로 정렬
 * 
 * -> Container 안에 들어오는 요소들은 위에서 아래로 쌓이는 구조
 */

const Info = styled.span`
  font-size: 1.25rem;
  font-weight: 600;
`;
/**
 * 글자 크기 설정
 * 글자 굵기 설정
 */

const Cards = styled.div`
  margin-top: 8px;
  display: flex;
  flex-direction: column;
  gap: 16px;
`;
/**
 * Cards 컴포넌트 위쪽과의 간격
 * Flexbox 설정
 * 자식 요소들 세로 방향 정렬
 * 자식 요소들 사이 간격
 * 
 * -> Cards는 여러 개의 카드를 세로로 일정 간격을 두고 정렬
 */

export default App;
