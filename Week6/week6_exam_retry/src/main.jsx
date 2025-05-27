import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)

/**
 * main.jsx
 * - React 앱의 최초 실행 위치 == 출발점  
 * - HTML의 특정 DOM 위치를 찾아 앱 렌더링
 * - <StrictMode>로 잠재적인 문제점 검사
 * - 최상위 컴포넌트인 <App /> 렌더링으로 앱의 구체적인 UI를 화면에 출력
 */

/**
main.jsx
최초 진입점 → <App /> 컴포넌트를 렌더링.

App.jsx 내부
라우팅 구조를 설정 (<Routes>와 <Route>를 활용).

상위 라우트에서 <RootLayout> (레이아웃 구조)를 지정.

이곳에는 보통 공통 컴포넌트(header, footer 등)가 존재.

<Outlet />을 통해 하위 라우트의 콘텐츠가 렌더링될 위치를 지정.

하위 라우트들은 경로(path)에 따라 보여질 컴포넌트를 설정하며,
이 컴포넌트들은 자동으로 상위 레이아웃(<RootLayout>)의 <Outlet /> 위치에 들어가게 된다.

index element 설정
경로를 지정하지 않은 기본 경로로 설정한 (index) 컴포넌트가 가장 처음 렌더링된다.
 */