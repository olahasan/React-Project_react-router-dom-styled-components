import React from "react";
// import { Link } from "react-router-dom";
import Footer from "../Footer/Footer";
import Header from '../Header/Header'
import {Photo , Ul , Items , H3 , Span} from './Style.js'
// import {Photo , Ul , Li , Items , H3 , Span} from './Style.js'

import Meals from '../Meals/Meals'
import Desserts from '../Desserts/Desserts'
import Healthy from '../Healthy/Healthy'
import Drinks from '../Drinks/Drinks'

import Sheader from "../Sheader/Sheader";
import { Route, Routes } from "react-router-dom";
// import { BrowserRouter, Route, Routes } from "react-router-dom";
import  { useEffect, useState } from "react";
import axios from "axios";
import Up from '../Up/Up'


const Menu = () => {

  // const[Menuu , setMenuu] = useState([])
  // useEffect(()=>{
  //   axios.get('Js/Data.json').then(res => setMenuu(res.data.menu) )
  //   axios.get('js/Data.json').then(res=> console.log(res.data.menu))
  // },[])


  // const menuMap = Menuu.map(e=>{
  //   return(
  //     <div className="item" key={e.id}>
  //           <img src={e.pic} alt="pic" style={{width:'250px' , height: '250px'}}/>
  //           <H3>{e.name}</H3>
  //           <p>{e.text}</p>
  //           <Span>{e.price}</Span>
  //     </div>
  //   )
  // })


    return(
      // <BrowserRouter>
        <div>
            <Header />
            {/* <Link to="/Menu">Menu</Link> */}

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
          {/* {menuMap} */}

          
          <div className="item">
            <img src="https://templatemo.com/templates/templatemo_539_simple_house/img/gallery/02.jpg" alt="pic" style={{width:'250px' , height:'250px'}}/>
            <H3>Name Of Plate</H3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, debitis.</p>
            <Span>$29.99</Span>
          </div>
           
          <div className="item">
            <img src="https://templatemo.com/templates/templatemo_539_simple_house/img/gallery/03.jpg" alt="pic" style={{width:'250px' , height:'250px'}}/>
            <H3>Name Of Plate</H3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, debitis.</p>
            <Span>$29.99</Span>
          </div>
          <div className="item">
            <img src="https://templatemo.com/templates/templatemo_539_simple_house/img/gallery/04.jpg" alt="pic" style={{width:'250px' , height:'250px'}}/>
            <H3>Name Of Plate</H3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, debitis.</p>
            <Span>$29.99</Span>
          </div>
          <div className="item">
            <img src="https://cdn.healthyrecipes101.com/wp-content/uploads/2022/07/Mexican-Spaghetti-Recipe-250x250.jpeg" alt="pic" style={{width:'250px' , height:'250px'}}/>
            <H3>Name Of Plate</H3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, debitis.</p>
            <Span>$29.99</Span>
          </div>
          <div className="item">
            <img src="https://juliesfamilykitchen.com/wp-content/uploads/2021/08/Crispy-and-Tender-Sous-Vide-Fried-Chicken-Recipe-500x500.jpg?ezimgfmt=rs:250x250/rscb2/ngcb2/notWebP" alt="pic" style={{width:'250px' , height:'250px'}}/>
            <H3>Name Of Plate</H3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, debitis.</p>
            <Span>$29.99</Span>
          </div>
          <div className="item">
            <img src="https://templatemo.com/templates/templatemo_539_simple_house/img/gallery/06.jpg" alt="pic" style={{width:'250px' , height:'250px'}}/>
            <H3>Name Of Plate</H3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, debitis.</p>
            <Span>$29.99</Span>
          </div>
          <div className="item">
            <img src="https://templatemo.com/templates/templatemo_539_simple_house/img/gallery/05.jpg" alt="pic" style={{width:'250px' , height:'250px'}}/>
            <H3>Name Of Plate</H3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, debitis.</p>
            <Span>$29.99</Span>
          </div>
          <div className="item">
            <img src="https://templatemo.com/templates/templatemo_539_simple_house/img/gallery/01.jpg" alt="pic" style={{width:'250px' , height:'250px'}}/>
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
        // {/* </BrowserRouter>   */}
    )
}
export default Menu;