import { BrowserRouter, Route, Routes } from "react-router-dom";

import OnBoardingPage from "../pages/OnBoardingPage";
import SignUpPage from "../pages/SignUpPage";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SignUpPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
