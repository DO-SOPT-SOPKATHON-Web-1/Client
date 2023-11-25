import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

import SUPER from "../assets/fonts/Super-Nought-Personal-Use.woff";

const GlobalStyle = createGlobalStyle`
  ${reset}

  * {
    box-sizing: border-box;
    font-family: -apple-system, BlinkMacSystemFont, "Apple SD Gothic Neo", "Pretendard Variable", Pretendard, Roboto, "Noto Sans KR", "Segoe UI", "Malgun Gothic", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif; 
     @font-face {
        font-family: 'SUPER'; 
        src: url(${SUPER}) format('woff');
    }
  }
  
  html,
  body {
    max-width: 43rem;
    width:100%;
    height: 100vh;
    margin: 0 auto;
    font-size: 10px;
    cursor : pointer;
  }
`;

export default GlobalStyle;
