import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Home from "./page/Home";
import LayoutWrapper from "./layout/layoutWrapper";
import { ThemeProvider } from "./context/ThemeContext";
import Blog from "./page/Blog";

import { PAGES } from "./core/constants/pages";

export default function App() {
  return (
    <ThemeProvider>
      <BrowserRouter basename="/ygor-hslima-portfolio">
        <Routes>
          <Route path="/" element={<Navigate to={PAGES.HOME} />} />
          <Route element={<LayoutWrapper />}>
            <Route path={PAGES.HOME} element={<Home />} />
            <Route path={PAGES.BLOG} element={<Blog />}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}
