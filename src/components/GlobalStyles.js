import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`

  //reset
  html, body, div, span, applet, object, iframe,
  h1, h2, h3, h4, h5, h6, p, blockquote, pre,
  a, abbr, acronym, address, big, cite, code,
  del, dfn, em, img, ins, kbd, q, s, samp,
  small, strike, strong, sub, sup, tt, var,
  b, u, i, center,
  dl, dt, dd, ol, ul, li,
  fieldset, form, label, legend,
  table, caption, tbody, tfoot, thead, tr, th, td,
  article, aside, canvas, details, embed, 
  figure, figcaption, footer, header, hgroup, 
  menu, nav, output, ruby, section, summary,
  time, mark, audio, video {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
  }
  /* HTML5 display-role reset for older browsers */
  article, aside, details, figcaption, figure, 
  footer, header, hgroup, menu, nav, section {
    display: block;
  }
  body {
    line-height: 1;
  }
  ol, ul {
    list-style: none;
  }
  blockquote, q {
    quotes: none;
  }
  blockquote:before, blockquote:after,
  q:before, q:after {
    content: '';
    content: none;
  }
  table {
    border-collapse: collapse;
    border-spacing: 0;
  }

  //global styles
  * {
    box-sizing: border-box;
  }

  input {
    width: 285px;
    height: 47px;
    background-color: #8EDF83;
    padding-left: 10px;
    border:none;
    border-radius: 10px;
    font-family: 'Alegreya', serif;
    font-style: normal;
    font-weight: 400;
    font-size: 24px;
    line-height: 33px;
  }

  button {
    background-color: #10BD9B;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 10px;
    border:none;
    font-family: 'Alegreya';
    font-style: normal;
    font-weight: 400;
    font-size: 24px;
    line-height: 33px;
    display: flex;
    align-items: center;
    color: #000000;
    justify-content: center;
  }

  body {
      background-color: #2F4463;
  }
`

export default GlobalStyles