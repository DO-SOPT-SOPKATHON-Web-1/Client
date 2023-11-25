import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

import SUPER from "../assets/fonts/Super-Nought-Personal-Use.woff";

const GlobalStyle = createGlobalStyle`
  ${reset}

  * {
    box-sizing: border-box;
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
    font-family:
      'Pretendard Variable',
      Pretendard,
      -apple-system,
      BlinkMacSystemFont,
      system-ui,
      Roboto,
      'Helvetica Neue',
      'Segoe UI',
      'Apple SD Gothic Neo',
      'Noto Sans KR',
      'Malgun Gothic',
      'Apple Color Emoji',
      'Segoe UI Emoji',
      'Segoe UI Symbol',
      sans-serif;
  }
`;

export default GlobalStyle;
