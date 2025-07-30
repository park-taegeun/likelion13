import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import RootLayout from "./layouts/RootLayout";
import Stu2Page from "./pages/Stu2Page";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route element={<RootLayout />}>
          <Route index element={<HomePage />} />
          <Route path="stu2" element={<Stu2Page />} />
        </Route>
      </Routes>
    </Router>
  );
}
