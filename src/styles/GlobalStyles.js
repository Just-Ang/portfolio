import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  *, *::before, *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }


  :root {

  --black-color: #1d0f0a;
  --lavanda-color: #8a52bb;
 
  --main-font: IBM Plex Sans;
  --second-font: Poiret One;
  --logo-font: Audiowide Static;
  --background-color: #f6e1d338;
  --light-grey: #c1c1c1;
  --second-background: #f9f7f2;
  --brown-color: #3c2f2a;
  

 }

  body {
    font-family: 'Helvetica Neue', Arial, sans-serif;
    background-color: #ffffff;
    color: #000000;
    -webkit-font-smoothing: antialiased;
    overflow-x: hidden;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  ul {
    list-style: none;
  }

  button {
    background: none;
    border: none;
    cursor: pointer;
    font-family: inherit;
  }





  /* Головний контейнер тосту */
  .Toastify__toast {
    background-color: #ffffff !important;
    color: #000000 !important;
    border: 1px solid #000000;
    box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.08) !important;
    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
    padding: 16px 24px !important;
  }

  /* Текст всередині тосту */
  .Toastify__toast-body {
    font-size: 0.95rem;
    font-weight: 400;
    line-height: 1.4;
    padding: 0 !important;
    margin: 0 !important;
  }

  /* Кастомізація смужки прогресу (лінії, яка зникає) */
  .Toastify__progress-bar {
    background: #000000 !important; 
    height: 2px !important;
  }

  /* Кнопка закриття (хрестик), якщо вона увімкнена */
  .Toastify__close-button {
    color: #000000 !important;
    opacity: 0.5;
    align-self: center;
    
    &:hover {
      opacity: 1;
    }
  }

 
`;
