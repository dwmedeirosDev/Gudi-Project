import {createGlobalStyle} from "styled-components";
import ArgentumRegular from "../assets/font/ArgentumSans/ArgentumSans-Regular.ttf"

export const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    @font-face {
        font-family: ArgentumRegular;
        src: url(${ArgentumRegular})
    }
`