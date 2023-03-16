// import React, { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
// import axios from "axios";
import {Sec1 , Photos , Img , Baragraph , Span , Sec2 , Box , TheImage , TheTitle , List , ListLi , PPP} from './Style.js'
// import {Sec1 , Photos , Img , Baragraph , Span , Sec2 , Box , TheImage , TheTitle , List , ListLi , OnlyOne , PPP} from './Style.js'
import Up from '../Up/Up'
const About = () => {

// const[Ola , setOla] = useState([])
// useEffect(()=>{
//   axios.get('js/Data.json').then(res => console.log(res.data.about))
//   axios.get('js/Data.json').then(res => setOla(res.data.about) )
// } , [])


// const WorkList = Ola.map((e)=>{
//   return(
//     <Box key={e.id}>
//       <TheImage src={e.pic} alt="pic" />
//       <TheTitle>{e.name}</TheTitle>
//       <span>{e.joptitle}</span>
//       <List>
//         <ListLi><i className={e.ins}></i></ListLi>
//         <ListLi><i className={e.fac}></i></ListLi>
//         <ListLi><i className={e.you}></i></ListLi>
//         <ListLi><i className={e.twit}></i></ListLi>
//         </List>
//       <PPP>{e.text}</PPP>
//     </Box>
//   )
// })

    return(
        <div>
            <Header />

            <div className="about">
              <div className="container">

                <Sec1>
                  <Photos>
                    <Img src="https://templatedemo.website.com/remote/imageProxy.cfc?method=viewLibraryImage&s=MEVDXzFAS008T0RfMCw3TVAqPTAnQFAgIAo%3D&w=480" alt="pic" />
                    {/* <Img src="https://templatedemo.website.com/remote/imageProxy.cfc?method=viewLibraryImage&s=MFBERiYtLF9aOktULzxSX0pXOUtePkAgIAo%3D&w=768" alt="pic" /> */}
                  </Photos>
                  <Baragraph>
                  <Span> This is a paragraph.</Span> You can write your own content here, and fill in the blanks. What's your story and where do you go from here? Tell the world about your business, and make this text yours. 
                  This is a paragraph. You can write your own content here, and fill in the blanks. What's your story and where do you go from here? Tell the world about your business, and make this text yours.
                  This is a paragraph. You can write your own content here, and fill in the blanks. What's your story and where do you go from here? Tell the world about your business, and make this text yours.
                  </Baragraph>
                </Sec1>

                <Sec2>
                  {/* {WorkList} */}
                  {/* {
                    Ola.length > 0?
                    Ola.map((e)=>{
                      return(
                        <Box key={e.id}>
                          <TheImage src={e.pic} alt="pic" />
                          <TheTitle>{e.name}</TheTitle>
                          <span>{e.joptitle}</span>
                          <List>
                            <ListLi><i className={e.ins}></i></ListLi>
                            <ListLi><i className={e.fac}></i></ListLi>
                            <ListLi><i className={e.you}></i></ListLi>
                            <ListLi><i className={e.twit}></i></ListLi>
                            </List>
                          <PPP>{e.text}</PPP>
                        </Box>
                      )
                    }) : <p>no </p>
                  } */}
                <Box>
                  <TheImage src="https://templatemo.com/templates/templatemo_539_simple_house/img/about-01.jpg" alt="pic" />
                  <TheTitle>Jennifer Soft</TheTitle>
                  <span>Founder and CEO</span>
                  <List>
                    <ListLi><i className="fa-brands fa-square-instagram"></i></ListLi>
                    <ListLi><i className="fa-brands fa-square-facebook"></i></ListLi>
                    <ListLi><i className="fa-brands fa-square-youtube"></i></ListLi>
                    <ListLi><i className="fa-brands fa-square-twitter"></i></ListLi>
                    </List>
                  <PPP>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt iusto in maxime ipsum velit eum natus illo! Facilis ab perferendis animi eos dignissimos. Numquam soluta ad iste asperiores quod cumque? </PPP>
                </Box>
                <Box>
                  <div>
                    <TheImage src="https://templatemo.com/templates/templatemo_539_simple_house/img/about-02.jpg" alt="pic" />
                  </div>
                  <div>
                    <TheTitle>Daisy Walker</TheTitle>
                    <span>Executive Chef</span>
                    <List>
                      <ListLi><i className="fa-brands fa-square-instagram"></i></ListLi>
                      <ListLi><i className="fa-brands fa-square-facebook"></i></ListLi>
                      </List>
                    <PPP>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt iusto in maxime ipsum velit eum natus illo! Facilis ab perferendis animi eos dignissimos. Numquam soluta ad iste asperiores quod cumque? </PPP>
                  </div>
                </Box>
                <Box>
                  <div>
                    <TheImage src="https://templatemo.com/templates/templatemo_539_simple_house/img/about-03.jpg" alt="pic" />
                  </div>
                  <div>
                  <TheTitle>Florence Nelson</TheTitle>
                  <span>Kitchen Manager</span>
                  <List>
                    <ListLi><i className="fa-brands fa-square-instagram"></i></ListLi>
                    <ListLi><i className="fa-brands fa-square-facebook"></i></ListLi>
                    {/* <OnlyOne></OnlyOne> */}
                    <ListLi><i className="fa-brands fa-square-twitter"></i></ListLi>
                    </List>
                  <PPP>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt iusto in maxime ipsum velit eum natus illo! Facilis ab perferendis animi eos dignissimos. Numquam soluta ad iste asperiores quod cumque? </PPP>
                  </div>
                </Box>
                <Box>
                  <div>
                    <TheImage src="https://templatemo.com/templates/templatemo_539_simple_house/img/about-04.jpg" alt="pic" />
                  </div>
                  <div>
                  <TheTitle>Valentina Martin</TheTitle>
                  <span>Culinary Director</span>
                  <List>
                    <ListLi><i className="fa-brands fa-square-instagram"></i></ListLi>
                    <ListLi><i className="fa-brands fa-square-facebook"></i></ListLi>
                    <ListLi><i className="fa-brands fa-square-youtube"></i></ListLi>
                    </List>
                  <PPP>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt iusto in maxime ipsum velit eum natus illo! Facilis ab perferendis animi eos dignissimos. Numquam soluta ad iste asperiores quod cumque? </PPP>
                  </div>
                </Box> 
                
                </Sec2>
              </div>
            </div>

            <Footer />
            <Up />
        </div>
    )
}
export default About;