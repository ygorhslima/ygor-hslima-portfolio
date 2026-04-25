import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Home from "./page/Home";
import LayoutWrapper from "./layout/layoutWrapper";
import { ThemeProvider } from "./context/ThemeContext";

export default function App() {
  return (
    <ThemeProvider>
      <BrowserRouter basename="/ygor-hslima-portfolio">
        <Routes>
          <Route path="/" element={<Navigate to="/home" />} />
          <Route element={<LayoutWrapper />}>
            <Route path="/home" element={<Home />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}
