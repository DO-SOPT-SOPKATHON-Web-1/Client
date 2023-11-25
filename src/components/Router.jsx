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
        <Route path="/sign" element={<SignUpPage />} />
        <Route path="/main" element={<MainPage />} />
        <Route path="/reciever" element={<ReceiverPage />} />
        <Route path="/agent" element={<AgentPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
