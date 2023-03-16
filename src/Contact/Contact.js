import React from "react";
import { Link } from "react-router-dom";
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import {Contactt , Pic , Text , Title , Para , Form , Alll , H2 , PPP , Input , SSend , Area , Mapandinfo , Map , IIFFrame , Info , Text1 , HH3 , SSpan , List , ListLI , Third , Paarraa} from './Style.js'
import Up from '../Up/Up'
const Contact = () => {
    return(
        <div>
            <Header />


        <Contactt>
          <Pic>
            <Text>
              <Title>We Have A Discount</Title>
              <Para>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Esse officiis consectetur quam voluptatibus consequatur velit dolore adipisci aspernatur recusandae temporibus, accusantium sunt eum blanditiis quae eaque iure molestias sint maiores?</Para>
            </Text>
          </Pic>

          <Form>
            <Alll>
              <H2>Book a table</H2>
              <PPP>Please fill out the form below, or call us directly at (987) 654-3210 to book a table.</PPP>
              <form>
                <Input type="text" placeholder="    your Name" name="Name"/>
                <Input type="email" placeholder="    your Email" name="Email"/>
                <Input type="number" placeholder="    your Phone" name="Phone"/>
                <Area placeholder="  Tell Us About Your Needs" name="message"></Area>
                {/* <Input type="submit" value="Send"  /> */}
                <SSend type="submit" value="Send"  />
              </form>
           </Alll>
          </Form>
     

        






          <div className="container">
            <Mapandinfo>
              <Map>
              <IIFFrame src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d27610.9703464107!2d31.9051145!3d30.1121873!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1457e77e9dce731f%3A0xf0ed5d06577c066a!2z2YXYr9mK2YbZhyDZhtmI2LEg2LfZhNi52Kog2YXYtdi32YHZiQ!5e0!3m2!1sar!2seg!4v1670081505817!5m2!1sar!2seg" width ={770} height={440}></IIFFrame>
              {/* <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d27610.9703464107!2d31.9051145!3d30.1121873!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1457e77e9dce731f%3A0xf0ed5d06577c066a!2z2YXYr9mK2YbZhyDZhtmI2LEg2LfZhNi52Kog2YXYtdi32YHZiQ!5e0!3m2!1sar!2seg!4v1670081505817!5m2!1sar!2seg" width ={770} height={440} style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe> */}
              </Map>
              
              <Info>
                <Text1>
                  <HH3>GET IN TOUCH</HH3>
                  <SSpan>+00 123.456.789</SSpan>
                  <SSpan>+00 123.456.789</SSpan>
                  <List>
                    <ListLI><i className="fa-brands fa-square-instagram"></i></ListLI>
                    <ListLI><i className="fa-brands fa-square-facebook"></i></ListLI>
                    <ListLI><i className="fa-brands fa-square-youtube"></i></ListLI>
                    <ListLI><i className="fa-brands fa-square-twitter"></i></ListLI>
                   </List>
                </Text1>
                <div className="text2">
                  <Third>WHERE WE ARE</Third>
                  <Paarraa>Awesome Address 17<br/>
                      New York, NYC<br/>
                      123-4567-890<br/>
                      USA<br/>
                  </Paarraa>
                </div>
              </Info>
            </Mapandinfo>
          </div>
        </Contactt>



            <Footer />
            <Up />
        </div>
    )
}
export default Contact;