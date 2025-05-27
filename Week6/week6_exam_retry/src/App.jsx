import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import RootLayout from "./layouts/RootLayout";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route element={<RootLayout/>}>
          <Route index element={<HomePage />} />
          {/* <Route path="" element={< />} /> */}
          {/* 여기에 다른 페이지 추가 */}
        </Route>
      </Routes>
    </Router>
  );
}

/**
 * App.jsx
 * - 라우팅 구조 설정하는 곳
 * - 경로 별로 특정 컴포넌트 표시 역할
 * 
 * <Route element={<RootLayout />}>
 * - 상위 라우트
 * - 내부의 하위 라우트들에 적용할 공통 레이아웃 설정
 * 
 * <Route index element={<HomePage />} />
 * - 하위 라우트
 * - 경로에 따라 상위 라우트에서 설정한 공통 레이아웃(위 코드 상: RootLayout)에서의 <Outlet /> 위치에 렌더링할 컴포넌트 설정
 * - index element: 상위 경로 ("/")를 의미
 * - 다른 경로일 때는 path="~" element={< />} 이렇게 작성
 */