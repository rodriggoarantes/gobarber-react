import { createGlobalStyle } from 'styled-components';

import 'react-toastify/dist/ReactToastify.css';

export default createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Roboto:400,700&display=swap');

  * {
    margin: 0px;
    padding: 0px;
    outline: 0px;
    box-sizing: border-box;
  }

  a {
    text-decoration: none;
  }
  a:focus {
    outline: 0;
  }

  html, body, div#root {
    height: 100%;
  }

  body {
    -webkit-font-smoothing: antialiased !important;
    -moz-osx-font-smoothing: grayscale !important;
  }

  body, input, button {
    color: #222;
    font-size: 14px;
    font-family: "Roboto", sans-serif ;
  }

  button {
    cursor: pointer;
  }

  ul {
    list-style: none;
  }

`;
