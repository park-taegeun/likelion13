import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router";
import "./index.css";
import App from "./App";
import Search from "./pages/Search";
import RootLayout from "./layouts/RootLayout";

const root = document.getElementById("root");

ReactDOM.createRoot(root).render(
  <BrowserRouter>
    <Routes>
      <Route element={<RootLayout />}>
        <Route index element={<App />} />
        <Route path="search" element={<Search />} />
      </Route>
    </Routes>
  </BrowserRouter>
);
/**
 * 1. ReactDOM.createRoot(root).render(...)
 * - root는 index.html 안의 <div id="root"></div>를 가리킨다.
 * - 이 root 안에 우리가 만든 컴포넌트를 렌더링하겠다.
 * - render() 안에 들어가는게 실제로 브라우저에 표시되는 내용
 * 
 * 2. <BrowserRouter>...</BrowserRouter>
 * - React Router에서 SPA 라우팅을 가능하게 해주는 컴포넌트
 * - 브라우저의 URL 변화를 감지해서 화면을 변경해줌
 * 
 * 3. <Routes>...</Routes>
 * - 여러 개의 <Route>들을 관리하는 컨테이너
 * - 반드시 <Routes> 안에는 <Route>가 있어야 함
 * 
 * 4. Route element={<RootLayout />}>
 * - 중첩 라우팅 구조를 만들기 위한 부모 Route -> 경로 지정을 하지 않고 element로 <RootLayout />을 준다.
 * - 즉, 이 안의 자식 Route들이 렌더링 될 때 항상 이 <RootLayout /> 같이 출력
 * - ex)) 모든 페이지에 공통으로 보여줄 푸터나 헤더들..
 * 
 * 5. <Route index element={<App />} />
 * - index는 해당 부모 경로의 기본 Route라는 뜻 == 최초 페이지에서 보여지는 게 <App />
 * 
 * 6. <Route path="search" element={<Search />} />
 * - 자식 경로 중 하나로 /search 경로로 접근했을 때 <Search /> 컴포넌트를 보여주는 Route
 * - path="search"는 부모(/) 기준 상대 경로이므로, 실제 URL은 /search가 된다.
 * 
 * [[항상 RootLayout은 고정된 틀로 나와 있고, 안에 App 또는 Search가 바뀌어 들어가는 구조]]
 */