import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "../pages/HomePage";

export default function AppRoutes() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<HomePage />} />
                {/* <Route path="/calendar" element={<CalendarPage />} /> */}
                {/* <Route path="/qna" element={<QnaPage />} /> */}
            </Routes>
        </Router>
    );
}

/**
 * App.jsx로 인해 브라우저 제어권이 AppRoutes.jsx로 넘어옴.
 * 
 * import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
 * - BrowserRouter : URL을 기반으로 경로를 관리하는 라우터
 * - as Router : BrowserRouter를 Router라는 별명으로 부르기 위해 as 사용
 * - Routes : 여러 개의 <Route>들을 그룹으로 묶는 역할
 * - Route : 하나의 경로를 지정하는 컴포넌트
 */