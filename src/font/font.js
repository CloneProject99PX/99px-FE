import { createGlobalStyle } from "styled-components";
import helveticaneue from "./helveticaneue.woff2";

export default createGlobalStyle`
    @font-face {
        font-family: "helveticaneue";
        src: local("helveticaneue"),
        url(${helveticaneue}) format('woff2');
    }
`;
