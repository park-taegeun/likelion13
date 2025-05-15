import styled from "styled-components";

function Footer() {
  return (
    <Container>
      <span>© 2025 SKU LIKELION. All rights reserved.</span>
    </Container>
  );
  /**
   * return 부분이 실제 브라우저에서 보여지는 부분
   * <Container> - 스타일링 된 <footer>
   */
}

const Container = styled.footer`
  height: 2rem;
  text-align: center;
`;
/**
 * 높이 지정
 * 텍스트를 가운데 정렬
 */

export default Footer;