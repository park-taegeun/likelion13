import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "../pages/Homepage";
import ProjectPage from "../pages/ProjectPage";
import DiaryPage from "../pages/DiaryPage";
import QnaPage from "../pages/QnaPage";

export default function AppRoutes() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/project" element={ <ProjectPage /> } />
        <Route path="/diary" element={<DiaryPage />} />
        <Route path="/qna" element={ <QnaPage />} />
      </Routes>
    </Router>
  );
}