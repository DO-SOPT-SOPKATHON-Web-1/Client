import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyle = createGlobalStyle`
  ${reset}

  * {
    box-sizing: border-box;
  }
  
  html,
  body {
    width:100%;
    height: 100vh;
    margin: 0 auto;
    font-size: 10px;
    cursor : pointer;
  }
`;

export default GlobalStyle;
