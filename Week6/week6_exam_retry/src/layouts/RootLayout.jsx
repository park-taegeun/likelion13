import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function RootLayout() {
    return (
        <>
        <Header />
        <Outlet />
        <Footer />
        </>
    );
}

/**
 * RootLayout.jsx
 * - 하위 라우트들에 공통적으로 적용할 레이아웃을 설정하는 곳
 * - <Outlet />: 라우팅 구조를 지정하는 곳(App.jsx)에서 지정한 하위 라우터들에서 경로에 따라 설정한 컴포넌트가 해당 위치에 렌더링
 */