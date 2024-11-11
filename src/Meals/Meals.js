// import React, { useEffect, useState } from "react";
import Sheader from "../Sheader/Sheader";
import Header from "../Header/Header";

import { Photo, Ul, Items, H3, Span } from "./Style.js";
// import {Photo , Ul , Li , Items , H3 , Span} from './Style.js'
// import Meals from '../Meals/Meals'
import Desserts from "../Desserts/Desserts";
import Healthy from "../Healthy/Healthy";
import Drinks from "../Drinks/Drinks";

import { Route, Routes } from "react-router-dom";
// import { BrowserRouter, Route, Routes } from "react-router-dom";

import Footer from "../Footer/Footer";
import Up from "../Up/Up";

const Meals = () => {
  return (
    <div>
      <Header />
      {/* <Sheader /> */}
      {/* Meals */}

      <div className="menu">
        <Photo></Photo>
        <div className="container">
          <Ul>
            <Routes>
              <Route excat path="/Menu/Meals" element={<Meals />} />
              <Route excat path="/Desserts" element={<Desserts />} />
              <Route excat path="/Healthy" element={<Healthy />} />
              <Route excat path="/Drinks" element={<Drinks />} />
            </Routes>
            <Sheader />
            {/* <Li>Salted</Li>
          <Li>Sweets</Li>
          <Li>Healthy</Li>
          <Li>Drinks</Li> */}
          </Ul>
          <Items>
            <div className="item">
              <img
                src="https://www.cookincanuck.com/wp-content/uploads/2016/09/VeganPotatoSoupFinal-250x250.jpg"
                alt="pic"
                style={{ width: "250px", height: "250px" }}
              />
              <H3>Name Of Plate</H3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas,
                debitis.
              </p>
              <Span>$29.99</Span>
            </div>
            <div className="item">
              <img
                src="https://www.kimscravings.com/wp-content/uploads/2019/09/Healthy-Taco-Soup-4-250x250.jpg"
                alt="pic"
                style={{ width: "250px", height: "250px" }}
              />
              <H3>Name Of Plate</H3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas,
                debitis.
              </p>
              <Span>$29.99</Span>
            </div>
            <div className="item">
              <img
                src="https://i2.wp.com/karissasvegankitchen.com/wp-content/uploads/2016/05/vegan-gyro-salad-recipe-2-250x250.jpg"
                alt="pic"
                style={{ width: "250px", height: "250px" }}
              />
              <H3>Name Of Plate</H3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas,
                debitis.
              </p>
              <Span>$29.99</Span>
            </div>
            <div className="item">
              <img
                src="https://skinnyms.com/wp-content/uploads/2012/08/Southwestern-Black-Bean-Casserole1-1-250x250.jpg"
                alt="pic"
                style={{ width: "250px", height: "250px" }}
              />
              <H3>Name Of Plate</H3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas,
                debitis.
              </p>
              <Span>$29.99</Span>
            </div>
            <div className="item">
              <img
                src="https://www.kimscravings.com/wp-content/uploads/2021/06/Healthy-Burgers-3-250x250.jpg"
                alt="pic"
                style={{ width: "250px", height: "250px" }}
              />
              <H3>Name Of Plate</H3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas,
                debitis.
              </p>
              <Span>$29.99</Span>
            </div>
            <div className="item">
              <img
                src="https://www.makingthymeforhealth.com/wp-content/uploads/2022/10/Creamy-Butternur-Squash-and-Sausage-Soup-_-250x250.jpg"
                alt="pic"
                style={{ width: "250px", height: "250px" }}
              />
              <H3>Name Of Plate</H3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas,
                debitis.
              </p>
              <Span>$29.99</Span>
            </div>
            <div className="item">
              <img
                src="https://cdn.healthyrecipes101.com/wp-content/uploads/2022/07/Mexican-Spaghetti-Recipe-250x250.jpeg"
                // src="https://loseweightbyeating.com/wp-content/uploads/2021/06/AdobeStock_405907734-500x500.jpeg?ezimgfmt=rs:250x250/rscb3/ngcb3/notWebP"
                alt="pic"
                style={{ width: "250px", height: "250px" }}
              />
              <H3>Name Of Plate</H3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas,
                debitis.
              </p>
              <Span>$29.99</Span>
            </div>
            <div className="item">
              <img
                src="https://www.makingthymeforhealth.com/wp-content/uploads/2022/09/The-Best-Tempeh-Chili-250x250.jpg"
                alt="pic"
                style={{ width: "250px", height: "250px" }}
              />
              <H3>Name Of Plate</H3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas,
                debitis.
              </p>
              <Span>$29.99</Span>
            </div>
            <div className="item">
              <img
                src="https://templatemo.com/templates/templatemo_539_simple_house/img/gallery/02.jpg"
                alt="pic"
                style={{ width: "250px", height: "250px" }}
              />
              <H3>Name Of Plate</H3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas,
                debitis.
              </p>
              <Span>$29.99</Span>
            </div>
            <div className="item">
              <img
                src="https://healthyishfoods.com/wp-content/uploads/2021/06/Healthyish-Foods-567-250x250.jpg"
                alt="pic"
                style={{ width: "250px", height: "250px" }}
              />
              <H3>Name Of Plate</H3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas,
                debitis.
              </p>
              <Span>$29.99</Span>
            </div>
            <div className="item">
              <img
                src="https://templatemo.com/templates/templatemo_539_simple_house/img/gallery/03.jpg"
                alt="pic"
                style={{ width: "250px", height: "250px" }}
              />
              <H3>Name Of Plate</H3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas,
                debitis.
              </p>
              <Span>$29.99</Span>
            </div>
            <div className="item">
              <img
                src="https://templatemo.com/templates/templatemo_539_simple_house/img/gallery/04.jpg"
                alt="pic"
                style={{ width: "250px", height: "250px" }}
              />
              <H3>Name Of Plate</H3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas,
                debitis.
              </p>
              <Span>$29.99</Span>
            </div>
            {/* <div className="item">
            <img src="https://cdn.healthyrecipes101.com/wp-content/uploads/2022/07/Mexican-Spaghetti-Recipe-250x250.jpeg" alt="pic" style={{width:'250px' , height: '250px'}}/>
            <H3>Name Of Plate</H3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, debitis.</p>
            <Span>$29.99</Span>
          </div> */}
            <div className="item">
              <img
                src="https://www.cookincanuck.com/wp-content/uploads/2016/09/VeganPotatoSoupFinal-250x250.jpg"
                // src="https://juliesfamilykitchen.com/wp-content/uploads/2021/08/Crispy-and-Tender-Sous-Vide-Fried-Chicken-Recipe-500x500.jpg?ezimgfmt=rs:250x250/rscb2/ngcb2/notWebP"
                alt="pic"
                style={{ width: "250px", height: "250px" }}
              />
              <H3>Name Of Plate</H3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas,
                debitis.
              </p>
              <Span>$29.99</Span>
            </div>
          </Items>
        </div>
      </div>

      <Footer />
      <Up />
    </div>
  );
};

export default Meals;
