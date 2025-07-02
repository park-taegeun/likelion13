import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import RootLayout from "./layouts/RootLayout";
import Homepage from "./pages/Homepage";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route element={<RootLayout />}>
          <Route index element={<Homepage />} />
        </Route>
      </Routes>
    </Router>
  );
}