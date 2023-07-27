import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    
    /* width */
    ::-webkit-scrollbar {
        width: 0.5rem;
    }
    /* Track */
    ::-webkit-scrollbar-track {
        background: whitesmoke;
    }
    /* Handle */
    ::-webkit-scrollbar-thumb {
        background: darkgray;
    }
    /* Handle on hover */
    ::-webkit-scrollbar-thumb:hover {
        background: #555;
    }

    body{
        font-family: Arial, Helvetica, sans-serif;
        width: 100%;
    }
    h2{
        font-size: 3rem;
        font-family: "Montserrat", sans-serif;
        font-weight: lighter;
        color: #333;
    }
    h3{
        font-size: 1.3rem;
        color: #333;
        padding: 1.5rem 0;
    }
    p{
        font-size: 1.2rem;
        line-height: 200%;
        color: #696969;
    }
    a{
        text-decoration: none;
        color: #333;
    }
    img{
        display: block;
    }
    input{
        font-weight: bold;
    }

    footer{
        position: fixed;
        left: 0;
        bottom: 0;
        width: 100%;
        text-align: right;
        background-color:#184d47;
        small{
            color: #96bb7c;
        }
        padding-bottom: 5px;
        @media only screen and (min-width: 601px) {
            padding-right: 5rem;
        }
    }
`;

export default GlobalStyles;
