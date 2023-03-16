import React from "react";
import {Together , Left , TheLogo , Icons , TheDiv , AD , HO , Tel , Num} from './Style.js'

const Footer = () => {
    return(
     
        <div className="footer">
         <hr />
         <div className="container">
           <Together>
             <Left>
                <TheLogo>HELLO</TheLogo>
                <Icons>
                 <div><i className="fa-brands fa-square-instagram"></i></div>
                 <div><i className="fa-brands fa-square-facebook"></i></div>
                 {/* <div><i className="fa-brands fa-youtube"></i></div> */}
                 <div><i className="fa-brands fa-square-youtube"></i></div>
                </Icons>
             </Left>

             <div className="right">
               <TheDiv>
                 <div className="icon"><i className="fa-sharp fa-solid fa-location-dot"></i></div>
                 <AD>Egypt, Giza, Inside The Sphinx, Room Number 220</AD>
               </TheDiv>
               <TheDiv>
                 <div className="icon"><i className="fa-solid fa-clock"></i></div>
                 <HO>Business Hours: From 10:00 To 18:00</HO>
               </TheDiv>
               <TheDiv>
                 <div className="icon"><i className="fa-solid fa-phone"></i></div>
                 <Tel>
                   <Num>+20123456789</Num>
                 </Tel>
               </TheDiv>
             </div>
           </Together>
         </div>
        </div>
    )
}
export default Footer;