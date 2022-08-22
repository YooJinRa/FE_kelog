import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`

  :root {
    --bg-color: #F8F9FA;
    --subBg-color: #ffffff;
    --grayBg-color: #E9ECEF;
    --primary-color: #12B886;
    --title-color: #212529;
    --text-color: #495057;
    --subText-color: #868E96;
    --border-style: 1px solid #F1F3F5;
    --subBorder-style: 1px solid #DEE2E6;
    --shadow-style: rgb(0 0 0 / 3%) 0px 0px 4px 0px;
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
  // :: 타이틀 폰트 설정
  h3 {
    font-size: 1.3125rem;
    font-weight: 700;
    color: var(--title-color);
    margin-bottom: 0.5rem;
  }

  // :: 버튼 스타일(임시 -> 만능버튼 추후 구현)
  button {
    border-radius: 4px;
    box-shadow: rgb(0 0 0 / 2%) 0px 0px 4px;
    font-size: 1rem;
    font-weight: 700;
    padding: 0.25rem 2rem;
    outline: none;
    border: none;
    transition: all 0.125s ease-in 0s;
    cursor: pointer;
  }
  .buttonWhite {
    background-color: var(--subBg-color);
    color: var(--primary-color);
  }
  .buttonPoint {
    background-color: var(--primary-color);
    color: var(--subBg-color);
  }
`;

export default GlobalStyle;
