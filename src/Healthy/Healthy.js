import React from "react";
import Sheader from '../Sheader/Sheader'
import Header from '../Header/Header'


import {Photo , Ul , Items , H3 , Span} from './Style.js'
// import {Photo , Ul , Li , Items , H3 , Span} from './Style.js'
import Meals from '../Meals/Meals'
import Desserts from '../Desserts/Desserts'
// import Healthy from '../Healthy/Healthy'
import Drinks from '../Drinks/Drinks'

import { Route, Routes } from "react-router-dom";
// import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "../Footer/Footer";
import Up from '../Up/Up'

const Healthy = () => {
    return(
        <div>
            <Header />
            {/* <Sheader />
            Healthy */}

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
            <img src="https://hurrythefoodup.com/wp-content/uploads/2021/10/healthy-egg-salad-1-250x250.jpg" alt="pic" style={{width:'250px' , height: '250px'}}/>
            <H3>Name Of Plate</H3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, debitis.</p>
            <Span>$29.99</Span>
          </div>
          <div className="item">
            <img src="https://hungryhealthyhappy.com/wp-content/uploads/2016/03/Healthy-French-Toast-featured-b-250x250.jpg" alt="pic" style={{width:'250px' , height: '250px'}}/>
            <H3>Name Of Plate</H3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, debitis.</p>
            <Span>$29.99</Span>
          </div>
          <div className="item">
            <img src="https://hungryhealthyhappy.com/wp-content/uploads/2013/08/Healthy-Caesar-Salad-featured-b-250x250.jpg" alt="pic" style={{width:'250px' , height: '250px'}}/>
            <H3>Name Of Plate</H3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, debitis.</p>
            <Span>$29.99</Span>
          </div>
          <div className="item">
            <img src="https://healthyishfoods.com/wp-content/uploads/2021/11/Healthyish-Foods-781-250x250.jpg" alt="pic" style={{width:'250px' , height: '250px'}}/>
            <H3>Name Of Plate</H3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, debitis.</p>
            <Span>$29.99</Span>
          </div>
          <div className="item">
            <img src="https://www.kimscravings.com/wp-content/uploads/2019/01/Healthy-Egg-Salad-6-250x250.jpg" alt="pic" style={{width:'250px' , height: '250px'}}/>
            <H3>Name Of Plate</H3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, debitis.</p>
            <Span>$29.99</Span>
          </div>
          <div className="item">
            <img src="https://www.themediterraneandish.com/wp-content/uploads/2022/10/baked-egg-toast-recipe-4-250x250.jpg" alt="pic" style={{width:'250px' , height: '250px'}}/>
            <H3>Name Of Plate</H3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, debitis.</p>
            <Span>$29.99</Span>
          </div>
          <div className="item">
            <img src="https://bestrecipebox.com/images/Healthy-Turkey-Lettuce-Wraps-2-250x250.jpg" alt="pic" style={{width:'250px' , height: '250px'}}/>
            <H3>Name Of Plate</H3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, debitis.</p>
            <Span>$29.99</Span>
          </div>
          {/* <div className="item">
            <img src="https://cdn.healthyrecipes101.com/wp-content/uploads/2020/06/Healthy-Baked-Chicken-Breast-Recipe-healthykitchen101-3-250x250.jpg" alt="pic" style={{width:'250px' , height: '250px'}}/>
            <H3>Name Of Plate</H3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, debitis.</p>
            <Span>$29.99</Span>
          </div> */}
          <div className="item">
            <img src="https://eatbetterrecipes.com/wp-content/uploads/Beef-and-Cauliflower-Stir-Fry-EatBetterRecipes-1-250x250.jpg" alt="pic" style={{width:'250px' , height: '250px'}}/>
            <H3>Name Of Plate</H3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, debitis.</p>
            <Span>$29.99</Span>
          </div>
          <div className="item">
            <img src="https://www.cookincanuck.com/wp-content/uploads/2021/12/Healthy-Tuna-Salad-Square-1200-1-250x250.jpg" alt="pic" style={{width:'250px' , height: '250px'}}/>
            <H3>Name Of Plate</H3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, debitis.</p>
            <Span>$29.99</Span>
          </div>
          <div className="item">
            <img src="https://www.momskitchenhandbook.com/wp-content/uploads/2018/08/Toast_Grid_v2_21743-1-250x250.jpg" alt="pic" style={{width:'250px' , height: '250px'}}/>
            <H3>Name Of Plate</H3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, debitis.</p>
            <Span>$29.99</Span>
          </div>
          <div className="item">
            <img src="https://gimmedelicious.com/wp-content/uploads/2020/11/Healthy-Lemon-Blueberry-Bread-1-250x250.jpg" alt="pic" style={{width:'250px' , height: '250px'}}/>
            <H3>Name Of Plate</H3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, debitis.</p>
            <Span>$29.99</Span>
          </div>
          <div className="item">
            <img src="https://eatbetterrecipes.com/wp-content/uploads/Chicken-Fajita-Salad-EatBetterRecipes-1-250x250.jpg" alt="pic" style={{width:'250px' , height: '250px'}}/>
            <H3>Name Of Plate</H3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, debitis.</p>
            <Span>$29.99</Span>
          </div>
        </Items>
      </div>
            </div>
          <Footer />
          <Up />
        </div>
    )
}

export default Healthy