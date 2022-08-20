import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`

  :root {
    --bg-color: #F8F9FA;
    --subBg-color: #ffffff;
    --primary-color: #12B886;
    --title-color: #212529;
    --text-color: #495057;
    --subText-color: #868E96;
    --border-style: 1px solid #F1F3F5;
    --subBorder-style: 1px solid #DEE2E6;
  }
  
  // reset-css
  * {
    font-family: 'Noto Sans KR', sans-serif;
    font-weight: 400;
    line-height: 1.5;
    font-size: 0.875rem;
    color: var(--text-color);
    margin: 0; 
    padding: 0;
    box-sizing: border-box;
    scroll-behavior: smooth;
  }
  // :: 배경색 설정
  body {
    background-color: var(--bg-color);
  }
  ul li, ol li {
    list-style: none;
  }
  a {
    text-decoration: none;
  }
`;

export default GlobalStyle;
