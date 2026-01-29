import { Routes, Route } from "react-router-dom";

import HomeLayout from "./pages/HomeLayout";
import Blog from "./pages/Blog";
import BlogDetail from "./pages/BlogDetail";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomeLayout />} />
      <Route path="/bbablogs" element={<Blog />} />
      <Route path="/bbablogs/:slug" element={<BlogDetail />} />
    </Routes>
  );
}

export default App;