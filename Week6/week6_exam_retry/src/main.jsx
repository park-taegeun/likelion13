import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './index.css'
import RootLayout from './layouts/RootLayout.jsx';
import App from './App.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <Router>
    <Routes>
      <Route element={<RootLayout />}>
        <Route index element={<App />} />
        {/* 만약 다른 경로 페이지들을 추가하고 싶다면? */}
        {/* <Route path="" element={{< />}} /> */}
      </Route>
    </Routes>
  </Router>
)

/**
 * main.jsx
 * - 라우팅 구조 설정하는 곳
 * - 경로 별로 특정 컴포넌트 표시 역할
 * 
 * <Route element={<RootLayout />}>
 * - 상위 라우트
 * - 내부의 하위 라우트들에 적용할 공통 레이아웃 설정
 * 
 * <Route index element={<App />} />
 * - 하위 라우트
 * - 경로에 따라 상위 라우트에서 설정한 공통 레이아웃(위 코드 상: RootLayout)에서의 <Outlet /> 위치에 렌더링할 컴포넌트 설정
 * - index element: 상위 경로 ("/")를 의미
 * - 다른 경로일 때는 path="~" element={< />} 이렇게 작성
 */