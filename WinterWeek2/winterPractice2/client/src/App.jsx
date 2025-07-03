import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import RootLayout from "./layouts/RootLayout";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import QnaPage from "./pages/QnaPage";
import PostPage from "./pages/PostPage";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route element={<RootLayout />}>
          <Route index element={<HomePage />} />
          <Route path="login" element={<LoginPage />} />
          <Route path="qna" element={<QnaPage />} />
          <Route path="post" element={<PostPage />} />
        </Route>
      </Routes>
    </Router>
  );
}