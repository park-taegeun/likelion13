import { Outlet } from "react-router";
import styled from "styled-components";
import Input from "../components/Input";
import Footer from "../components/Footer";
import Navbar from "../components/NavBar";

function RootLayout() {
  return (
    <Layout>
      <Navbar />
      <Content>
        <Input />
        <Outlet />
      </Content>
      <Footer />
    </Layout>
  );
}

/**
 * Layout - 페이지 전체를 감싸는 바탕 틀
 * 
 * <Navbar /> - 항상 상단에 고정된 메뉴바 -> 모든 페이지에서 공통으로 보이기 위해 RootLayout에 위치
 * 
 * <Content>...</Content> - 본문 영역
 * - <Input />: 검색창 또는 입력 기능
 * - <Outlet />: 라우팅된 자식 컴포넌트가 여기에 자동 삽입
 * -> 예: / 이면 <App />, /search면 <Search />가 여기 들어간다.
 * 
 * <Footer /> - 하단에 고정된 공통 푸터 컴포넌트
 * 
 * RootLayout은 모든 페이지에 공통으로 적용되는 틀
 * Navbar, Input, Footer는 항상 고정
 * Outlet 자리에 /, /search 등 URL에 따라 다른 컴포넌트가 동적으로 들어감
 */
const Layout = styled.div`
  min-height: 100vh;
  background: #f4f4f4;
`;
/**
 * 브라우저의 최소 높이 지정 - 뷰포트 높이의 100%만큼
 * 배경색 지정
 */

const Content = styled.main`
  min-height: calc(100vh - 60px - 2rem); // 최소 높이: 전체 높이 - 네비바 높이 - 푸터 높이
  display: flex;
  flex-direction: column;
  align-items: center;
`;
/**
 * 브라우저의 최소 높이 지정 - 뷰포트 전체 높이 - nav높이 - footer높이
 * -> 상단 네비바와 하단 푸터를 제외한 모든 영역이 Content가 된다.
 * Flexbox 설정
 * 자식 요소들 세로 정렬
 * 자식 요소들 가운데 정렬
 */

export default RootLayout;
