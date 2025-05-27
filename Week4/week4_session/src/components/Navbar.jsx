import { Link } from "react-router";
import styled from "styled-components";

function Navbar() {
  return (
    <Container>
      <Page to="/">홈</Page>
      <Page to="/account">내 계정</Page>
    </Container>
  );
  /**
   * return 부분이 실제로 브라우저에 보여지는 부분
   * 
   * <Page> - styled(Link)로 만들어진 링크 버튼
   * React Router의 <Link>는 새로고침 없이 페이지 이동이 가능
   */
}

const Container = styled.nav`
  height: 60px;
  padding: 16px 48px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: black;
`;
/**
 * 전체 높이 지정
 * 패딩(내부 요소들과 테두리의 사이 관계): 위아래, 좌우
 * Flexbox 설정
 * 자식 요소들 가운데 정렬
 * 자식 요소를 양 끝에 배치하고 사이 공간을 균등하게 배치
 * 배경색 설정
 */

const Page = styled(Link)`
  font-size: 1rem;
  font-weight: 600;
  color: white;
`;
/**
 * 글자 크기
 * 글자 굵기
 * 글자 색
 */

export default Navbar;
