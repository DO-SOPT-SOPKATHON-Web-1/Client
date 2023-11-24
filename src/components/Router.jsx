import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/Home"; // Correct the relative path

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
