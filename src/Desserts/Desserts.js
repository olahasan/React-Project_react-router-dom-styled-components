import React from "react";
import Sheader  from '../Sheader/Sheader'
import Header from '../Header/Header'


import {Photo , Ul , Items , H3 , Span} from './Style.js'
// import {Photo , Ul , Li , Items , H3 , Span} from './Style.js'
import Meals from '../Meals/Meals'
// import Desserts from '../Desserts/Desserts'
import Healthy from '../Healthy/Healthy'
import Drinks from '../Drinks/Drinks'

import { Route, Routes } from "react-router-dom";
// import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "../Footer/Footer";
import Up from '../Up/Up'

const Desserts = () => {
    return(
        <div>
            <Header />
            {/* <Sheader />
            Desserts */}

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
            <img src="https://bojongourmet.com/wp-content/uploads/2019/07/Gluten-Free-Blueberry-Coffee-Cake-Pecan-Streusel-2-250x250.jpg" alt="pic" style={{width:'250px' , height: '250px'}}/>
            <H3>Name Of Plate</H3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, debitis.</p>
            <Span>$29.99</Span>
          </div>
          <div className="item">
            <img src="https://masandpas.com/wp-content/uploads/2019/01/Raspberry-cookies-make-a-healthy-kids-snack-with-these-raspberry-oatmeal-cookies-9-250x250.jpg" alt="pic" style={{width:'250px' , height: '250px'}}/>
            <H3>Name Of Plate</H3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, debitis.</p>
            <Span>$29.99</Span>
          </div>
          <div className="item">
            <img src="https://gimmedelicious.com/wp-content/uploads/2020/04/Healthy-Oatmeal-Cookies-6-250x250.jpg" alt="pic" style={{width:'250px' , height: '250px'}}/>
            <H3>Name Of Plate</H3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, debitis.</p>
            <Span>$29.99</Span>
          </div>
          <div className="item">
            <img src="https://theviewfromgreatisland.com/wp-content/uploads/2014/04/wholefruitpops2-2-250x250.jpg" alt="pic" style={{width:'250px' , height: '250px'}}/>
            <H3>Name Of Plate</H3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, debitis.</p>
            <Span>$29.99</Span>
          </div>
          <div className="item">
            <img src="https://www.kimscravings.com/wp-content/uploads/2017/09/Healthy-Pumpkin-Cookies-5-250x250.jpg" alt="pic" style={{width:'250px' , height: '250px'}}/>
            <H3>Name Of Plate</H3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, debitis.</p>
            <Span>$29.99</Span>
          </div>
          <div className="item">
            <img src="https://loseweightbyeating.com/wp-content/uploads/2021/11/Screen-Shot-2022-09-16-at-1.55.55-PM-500x500.png?ezimgfmt=rs:250x250/rscb3/ngcb3/notWebP" alt="pic" style={{width:'250px' , height: '250px'}}/>
            <H3>Name Of Plate</H3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, debitis.</p>
            <Span>$29.99</Span>
          </div>
          <div className="item">
            <img src="https://skinnyms.com/wp-content/uploads/2016/02/Banana-Walnut-Overnight-Oatmeal-250x250.jpg" alt="pic" style={{width:'250px' , height: '250px'}}/>
            <H3>Name Of Plate</H3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, debitis.</p>
            <Span>$29.99</Span>
          </div>
          <div className="item">
            <img src="https://skinnyms.com/wp-content/uploads/2014/07/Frozen-Yogurt-with-Fresh-Fruit-Salad-Mint-250x250.jpg" alt="pic" style={{width:'250px' , height: '250px'}}/>
            <H3>Name Of Plate</H3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, debitis.</p>
            <Span>$29.99</Span>
          </div>
          <div className="item">
            <img src="https://www.kimscravings.com/wp-content/uploads/2018/11/506A9935-2-250x250.jpg" alt="pic" style={{width:'250px' , height: '250px'}}/>
            <H3>Name Of Plate</H3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, debitis.</p>
            <Span>$29.99</Span>
          </div>
          <div className="item">
            <img src="https://www.kimscravings.com/wp-content/uploads/2018/06/506A9612-250x250.jpg" alt="pic" style={{width:'250px' , height: '250px'}}/>
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

export default Desserts