import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        outline: 0;
    } 
    :root{
        --white: #f5f5f5;
        --pink50:  #FF427F;;
        --black: #000000;
        --pink: #FF577F;
        --grey: #868E96;
        --grey0: #F8F9FA;
        --grey2: #343B41;
        --grey3: #212529;
    }
    body {
        background: var(--black);
       
 
    }
    body, button {
        font-family: 'Inter', sans-serif;
        font-size: 1 rem;
    
    }
    input, select{
        background-color: #343B41;
        color: white;
        width: 95%;
        height: 48px;
        border: none;
        border: solid #F8F9FA 1.22px;

    }


    form{
        font-family: 'Inter', sans-serif;
        font-weight: 400;

    }

    h1,h2,h3,h4,h5,h6, span, ul, li {
        font-family: 'Inter', sans-serif;
        font-weight: 500;
        color: white;
        list-style-type: none;

    }

    button {
        cursor: pointer;
    }

    a {
        text-decoration: none; 
    }

`;
