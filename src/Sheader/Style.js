import styled from "styled-components";
import { Link } from "react-router-dom";

/* menu */

export const Ul = styled.ul`
list-style: none;
display: flex;
justify-content: center;
align-items: center;
padding: 0;
`
    // .menu .container ul{
    //   list-style: none;
    //   display: flex;
    //   justify-content: center;
    //   align-items: center;
    // }

export const Li = styled.li`
margin-right: 5px;
background-color: #bd152b;
padding: 5px 10px;
border-radius: 5px;
font-weight: bold;
`
    // .menu .container ul li{
    //   margin-right: 5px;
    //   background-color: #bd152b;
    //   padding: 5px 10px;
    //   border-radius: 5px;
    //   font-weight: bold;
    // }


export const LLL = styled(Link)`
text-decoration: none;
color: black;
`    
/* menu */
    