//serves as a master scss file if you will
import { createGlobalStyle } from 'styled-components';
const GlobalStyle = createGlobalStyle`
    html {
        font-size: 62.5%;
    }
    body, html {
        padding: 0;
        margin: 0;
    }
    body {
        background: rgb(127,17,172);
        background: linear-gradient(180deg, rgba(127,17,172,1) 0%, rgba(98,15,132,1) 100%);
    }
    h1, h2, h3, h4, h5 {
        margin: 0;
        font-weight: bold;
        letter-spacing: .075rem;
        font-family: ${(props) => props.theme.fonts.header}
    }
    h1 {
        font-size: 3.5rem;
    }
    h2 {
        font-size: 3.5rem;
    }
    h3 {
        font-size: 3rem;
    }
    h4 {
        font-size: 2.75rem;
    }
    ul {
        list-style: none;
        margin: 0;
        padding: 0;
    }
    p, div, li {
        font-size: 2.5rem;
    }
    a {
        text-decoration: none;
    }
`;

export default GlobalStyle;
