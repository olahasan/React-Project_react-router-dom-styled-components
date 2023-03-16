import React from "react";
import Header from '../Header/Header'
import Photo from '../Photo/Photo'
import Hhome1 from '../Hhome1/Hhome1'
import Footer from '../Footer/Footer'
// import { Link } from "react-router-dom";

import Up from '../Up/Up'

const Home = () => {
    return(
        <div>
            <Header />
            <Photo />
            <Hhome1 />
            <Footer />


            <Up />
        </div>
    )
}
export default Home;