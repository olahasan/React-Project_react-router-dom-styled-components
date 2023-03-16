import React from "react";
import Sheader from '../Sheader/Sheader'
import Header from '../Header/Header'


import {Photo , Ul , Items , H3 , Span} from './Style.js'
// import {Photo , Ul , Li , Items , H3 , Span} from './Style.js'
import Meals from '../Meals/Meals'
import Desserts from '../Desserts/Desserts'
import Healthy from '../Healthy/Healthy'
// import Drinks from '../Drinks/Drinks'

import { Route, Routes } from "react-router-dom";
// import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "../Footer/Footer";
import Up from '../Up/Up';

const Drinks = () => {
    return(
        <div>
            <Header />
            {/* <Sheader />
            Drinks */}
            <div className="menu">
      <Photo></Photo>
      <div className="container">
        <Ul>
          <Routes>
            <Route excat path="/Menu/Meals" element={<Meals />}/>
            <Route excat path="/Desserts" element={<Desserts />}/>
            <Route excat path="/Healthy" element={<Healthy />}/>
            <Route excat path="/Drinks" element={<Drinks />}/>
          </Routes>  
          <Sheader />
          {/* <Li>Salted</Li>
          <Li>Sweets</Li>
          <Li>Healthy</Li>
          <Li>Drinks</Li> */}
        </Ul>
        <Items>
          <div className="item">
            <img src="https://www.howsweeteats.com/wp-content/uploads/2022/07/mango-froze-10-250x250.jpg" alt="pic" style={{width:'250px' , height: '250px'}}/>
            <H3>Name Of Plate</H3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, debitis.</p>
            <Span>$29.99</Span>
          </div>
          <div className="item">
            <img src="https://www.willcookforsmiles.com/wp-content/uploads/2021/08/Sex-on-the-Beach-Drink-6-sq-250x250.jpg" alt="pic" style={{width:'250px' , height: '250px'}}/>
            <H3>Name Of Plate</H3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, debitis.</p>
            <Span>$29.99</Span>
          </div>
          <div className="item">
            <img src="https://www.fifteenspatulas.com/wp-content/uploads/2015/07/Refreshing-Summer-Drinks-Fifteen-Spatulas-2-250x250.jpg" alt="pic" style={{width:'250px' , height: '250px'}}/>
            <H3>Name Of Plate</H3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, debitis.</p>
            <Span>$29.99</Span>
          </div>
          <div className="item">
            <img src="https://content.jdmagicbox.com/comp/kolkata/s1/033pxx33.xx33.181017170002.t7s1/catalogue/cocktail-groove-dharmatala-kolkata-lounge-bars-uirqmtn6ds-250.jpg" alt="pic" style={{width:'250px' , height: '250px'}}/>
            <H3>Name Of Plate</H3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, debitis.</p>
            <Span>$29.99</Span>
          </div>
          <div className="item">
            <img src="https://cdn3.foodviva.com/static-content/food-images/long-drinks-recipes/cuba-libre-drink-rum-coke/cuba-libre-drink-rum-coke-250.jpg" alt="pic" style={{width:'250px' , height: '250px'}}/>
            <H3>Name Of Plate</H3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, debitis.</p>
            <Span>$29.99</Span>
          </div>
          <div className="item">
            <img src="https://content.jdmagicbox.com/comp/ghaziabad/j1/011pxx11.xx11.170904201528.r2j1/catalogue/coca-cola-cdc-dasna-dasna-ghaziabad-soft-drink-manufacturers-0kquq7vfxe-250.jpg" alt="pic" style={{width:'250px' , height: '250px'}}/>
            <H3>Name Of Plate</H3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, debitis.</p>
            <Span>$29.99</Span>
          </div>         
          <div className="item">
            <img src="https://jones4567.files.wordpress.com/2014/11/394487.jpg" alt="pic" />
            <H3>Name Of Plate</H3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, debitis.</p>
            <Span>$29.99</Span>
          </div>         
          <div className="item">
            <img src="https://sweetpotatosoul.com/wp-content/uploads/2021/06/Healthy-Orange-Freeze-3-250x250.jpeg" alt="pic" />
            <H3>Name Of Plate</H3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, debitis.</p>
            <Span>$29.99</Span>
          </div>         
          {/* <div className="item">
            <img src="https://cdn.healthyrecipes101.com/wp-content/uploads/2021/01/healthy-green-grape-juice-reicpe-250x250.jpg" alt="pic" />
            <H3>Name Of Plate</H3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, debitis.</p>
            <Span>$29.99</Span>
          </div>          */}
        </Items>
      </div>
            </div>
          <Footer />
          <Up />
        </div>
    )
}

export default Drinks