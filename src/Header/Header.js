import React, { useState } from "react";
// import { Link } from "react-router-dom";
import {All , TheLogo , Olaicon , UlList , LiList , LinkAnchor} from './Style.js'


const Header = () => {
 
const[Visible, setVisible] = useState(false)
const handleClick =() => {
  setVisible(!Visible)
  // setVisible(console.log(!false))
  // console.log("yyyyy")
}


    return(
        <div className="header">
          <div className="container">
             <All>
                    <TheLogo>
                       HELLO
                    </TheLogo>
                    <Olaicon className="fas fa-bars toggle-menu   olaicon"  onClick={handleClick} ></Olaicon>
                     <UlList className="ola">
                     {/* <UlList style={{display:Visible ? 'block': 'flex'}}> */}
                     {/* <UlList style={{display:Visible ? 'block': 'none'}}> */}
                     {/* <UlList style={{display:Visible ? 'inline': 'none'}} > */}
                         <LiList><LinkAnchor to="/">Home</LinkAnchor></LiList>
                         <LiList><LinkAnchor to="/About">About</LinkAnchor></LiList>
                         <LiList><LinkAnchor to="/Menu">Menu</LinkAnchor></LiList>
                         <LiList><LinkAnchor to="/Contact">Contact</LinkAnchor></LiList>
                     </UlList>
             </All>

            {/* <style jsx>{` */}
            <style jsx="true">{`
              .ola{
                display: ${ Visible ? 'inline' : 'none'};
              }

              @media (min-width: 768px){
                  .ola{
                    display: flex;
                  }
              }
           `}</style>

           </div>
         </div>
         
    )
}
export default Header;