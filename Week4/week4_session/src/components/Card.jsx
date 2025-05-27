import styled from "styled-components";

function Card({ imageUrl, children }) { // 부모 컴포넌트(App.jsx)로부터 props로 imageUrl과 children을 받는다.
  return <CardComponent $imageUrl={imageUrl}>{children}</CardComponent>;
  /**
   * Card 컴포넌트가 화면에 실제로 출력할 JSX 구조를 반환하는 부분
   * 
   * <Cardcomponent></Cardcomponent>는 스타일이 적용된 div 태그 부분
   * $imageUrl={imageUrl}
   * - $imageUrl이라는 이름으로 imageUrl 값을 Cardcomponent에게 전달 -> 각 카드마다 배경 이미지를 동적으로 설정하기 위해서4
   * 
   * {children}: 부모(App.jsx)에서 <Card></Card> 사이 내용을 가리킴
   */
}

const CardComponent = styled.div`
  width: 500px;
  height: 250px;
  padding: 8px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  border-radius: 12px;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 0px 4px;
  background-image: linear-gradient(0deg, rgba(0, 0, 0, 0.5) 0%, rgba(0, 0, 0, 0) 50%),
    url(${(props) => props.$imageUrl});
  background-size: cover;
  background-position: center;
`;
/**
 * 카드 너비 지정
 * 카드 높이 지정
 * 패딩(내부 간격) 지정
 * Flexbox 설정
 * 자식 요소 세로 방향 정렬
 * 자식 요소 맨 아래에 베치
 * 둥근 모서리
 * 그림자 설정
 * 배경에 두 가지 요소를 겹쳐서 적용
 * -> 아래쪽에 어두운 반투명 검정색, 위로 갈수록 투명해지는 그라디언트
 * -> props로 받은 이미지를 배경 이미지로 사용
 * 배경 이미지를 요소의 크기에 꽉 차게 채움
 * 배경 이미지 가운데 정렬
 */

export default Card;
