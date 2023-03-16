import React from "react";
import { Link } from "react-router-dom";

import {Ul  , LLL , Li } from './Style.js'

const Sheader = () => {
    return(
        <div>
            <Ul>
            <LLL to="/Menu/Meals"><Li>Meals</Li></LLL>
            <LLL to="/Menu/Desserts"><Li>Desserts</Li></LLL>
            <LLL to="/Menu/Healthy"><Li>Healthy</Li></LLL>
            <LLL to="/Menu/Drinks"><Li>Drinks</Li></LLL>
            </Ul>

            {/* <Link to="/Menu/Meals">Meals</Link>
            <Link to="/Menu/Desserts">Desserts</Link>
            <Link to="/Menu/Healthy">Healthy</Link>
            <Link to="/Menu/Drinks">Drinks</Link> */}
        </div>
    )
}
export default Sheader;