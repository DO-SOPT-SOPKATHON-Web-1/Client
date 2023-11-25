import { BrowserRouter, Route, Routes } from "react-router-dom";

import OnBoardingPage from "../pages/OnBoardingPage";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<OnBoardingPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
