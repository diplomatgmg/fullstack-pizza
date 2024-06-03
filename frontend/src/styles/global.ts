import { createGlobalStyle } from "styled-components"
import NunitoBlackTtf from "../assets/fonts/Nunito-Black.ttf"
import NunitoBoldTtf from "../assets/fonts/Nunito-Bold.ttf"
import NunitoRegularTtf from "../assets/fonts/Nunito-Regular.ttf"

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
    
    body {
        background-color: #ffe093;
        margin: 0;
        font-family: Nunito, sans-serif;
    }
`
