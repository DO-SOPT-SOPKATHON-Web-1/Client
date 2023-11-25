import { BrowserRouter, Route, Routes } from "react-router-dom";

import AgentPage from "../pages/AgentPage";
import MainPage from "../pages/MainPage";
import OnBoardingPage from "../pages/OnBoardingPage";
import ReceiverPage from "../pages/RecieverPage";
import SignUpPage from "../pages/SignUpPage";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<OnBoardingPage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/main/:id" element={<MainPage />} />
        <Route path="/reciever/:id" element={<ReceiverPage />} />
        <Route path="/agent/:id" element={<AgentPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
