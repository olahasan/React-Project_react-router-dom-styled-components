import React, { useState , useEffect} from "react";
import {TheSpan} from './Style.js'

const Up = () => {

const[Show ,setShow] = useState(false)

useEffect(() => {
    window.addEventListener('scroll', () => {
        if (window.scrollY > 400) {
            setShow(true);
        } else {
            setShow(false);
        }
    });
}, []);

const scrollToTop = () =>{
    window.scrollTo({
      top: 0, 
      behavior: 'smooth'
      /* you can also use 'auto' behaviour
         in place of 'smooth' */
    });
  };


    return(
        <div>
            <TheSpan onClick={scrollToTop} style={{display:Show ? 'block': 'none'}}>Up</TheSpan>
        </div>
    )
}

export default Up













