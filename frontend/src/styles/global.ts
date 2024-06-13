import { createGlobalStyle } from "styled-components"
import NunitoBlackTtf from "/fonts/Nunito-Black.ttf"
import NunitoBoldTtf from "/fonts/Nunito-Bold.ttf"
import NunitoRegularTtf from "/fonts/Nunito-Regular.ttf"

export default createGlobalStyle`
    @font-face {
        font-family: "Nunito";
        src: url(${NunitoBlackTtf}) format("truetype");
        font-weight: 900;
        font-style: normal;
    }

    @font-face {
        font-family: "Nunito";
        src: url(${NunitoBoldTtf}) format("truetype");
        font-weight: 700;
        font-style: normal;
    }

    @font-face {
        font-family: "Nunito";
        src: url(${NunitoRegularTtf}) format("truetype");
        font-weight: 400;
        font-style: normal;
    }
    
    * {
        line-height: 1;
        font-family: Nunito, sans-serif;
    }
    
    body {
        background-color: #ffe093;
        margin: 0;
    }
    
    a {
        text-decoration: none;
    }
`
