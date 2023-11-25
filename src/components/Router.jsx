import { BrowserRouter, Route, Routes } from "react-router-dom";

import LetterPopup from "./LetterPopup";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LetterPopup />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
