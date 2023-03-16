import styled from "styled-components";


export const Contactt = styled.div`
display: flex;
flex-wrap: wrap;
min-height: 100vh;


@media (max-width: 767px){
  flex-wrap: wrap;
  min-height: 100vh;
}
`
// .contact{
//     display: flex;
//     flex-wrap: wrap;
//     min-height: 100vh;
//   }

export const Pic = styled.div`
flex-basis: 60%;
background-image: url(https://media.istockphoto.com/id/488439655/photo/chicken-stripsy.jpg?s=612x612&w=0&k=20&c=pljFTGOs0yZskWrKTaJNTuPjno42HmlfoJRPh4BDkRA=);
background-size: cover;
background-repeat: no-repeat;
width: 200px;


@media (max-width: 767px){
  height: 511px;
  flex-basis: 100%;
  background-image: url(https://media.istockphoto.com/id/488439655/photo/chicken-stripsy.jpg?s=612x612&w=0&k=20&c=pljFTGOs0yZskWrKTaJNTuPjno42HmlfoJRPh4BDkRA=);
  background-size: cover;
  background-repeat: no-repeat;
}
`
//   .contact .pic{
//     flex-basis: 60%;
//     background-image: url(https://media.istockphoto.com/id/488439655/photo/chicken-stripsy.jpg?s=612x612&w=0&k=20&c=pljFTGOs0yZskWrKTaJNTuPjno42HmlfoJRPh4BDkRA=);
//     background-size: cover;
//     background-repeat: no-repeat;
//     width: 200px;
//   }

export const Text = styled.div`
padding: 20px;
text-align: center;
`
//   .contact .pic .text{
//     padding: 20px;
//     text-align: center;
//   }

export const Title = styled.h2`
font-size: 40px;
letter-spacing: -2px;
`
//   .contact .pic .text h2{
//    font-size: 40px;
//    letter-spacing: -2px;
//   }

export const Para = styled.p`
line-height: 1.6;
font-size: 18px;
`
//   .contact .pic .text p{
//     line-height: 1.6;
//     font-size: 18px;
//   }
  
export const Form = styled.div`
display: flex;
align-items: center;
justify-content: center;
/* flex-basis: 50%; */
flex-basis: 40%;
padding-bottom: 50px;
/* padding: 0 85px; */
// padding: 0 10px;
text-align: center;

@media (max-width: 767px){
  flex-basis: 100%;
}

`  
//   .contact .form {  
//       display: flex;
//       align-items: center;
//       justify-content: center;
//       /* flex-basis: 50%; */
//       flex-basis: 40%;
//       padding-bottom: 50px;
//       /* padding: 0 85px; */
//       padding: 0 10px;
//       text-align: center;
//   }

export const Alll = styled.div`
text-align: center;
padding: 0 61px;
`
//   .contact .form .alll{
//     text-align: center;
//     padding: 0 61px;
//   }

export const H2 = styled.h2`
font-size: 40px; 
letter-spacing: -2px;
padding-top: 26px;
`
//   .contact .form .alll h2{
//     font-size: 40px; 
//     letter-spacing: -2px;
//     padding-top: 26px;
//   }

export const PPP = styled.p`
line-height: 1.4;
`
//   .contact .form .alll p{
//     line-height: 1.4;
//   }

export const Input = styled.input`
display: block;
  width: 100%;
  margin-bottom: 25px;
  // padding: 15px;
  padding: 15px 0;
  border: none;
  border-bottom: 1px solid #eba402;
  background-color: #facf2c54;
  &:focus{
    outline: none;
  }
  `
//   .contact .form .alll form .input{
//   display: block;
//   width: 100%;
//   margin-bottom: 25px;
//   padding: 15px;
//   border: none;
//   border-bottom: 1px solid #eba402;
//   background-color: #facf2c54;
//   }

//   .contact .form .alll form .input:focus{
//   outline: none;
//   }


export const SSend = styled.input`
font-weight: bold;
// color: red;
color: #507900;
display: block;
width: 100%;
margin-bottom: 25px;
// padding: 15px;
padding: 15px 0;
border: none;
border-bottom: 1px solid #eba402;
background-color: #facf2c54;



display: block;
width: 100%;
margin-bottom: 25px;
padding: 15px;
border: none;
border-bottom: 1px solid #eba402;
background-color: #facf2c54;


font-weight: bold;
    // color: red;
    display: block;
    width: 100%;
    margin-bottom: 25px;
    // padding: 15px;
    border: none;
    border-bottom: 1px solid #eba402;
    background-color: #facf2c54;
`
//   .contact .form .alll form .input.send{
//   font-weight: bold;
//   color: red;
//   display: block;
//   width: 100%;
//   margin-bottom: 25px;
//   padding: 15px;
//   border: none;
//   border-bottom: 1px solid #eba402;
//   background-color: #facf2c54;
//   }


export const Area = styled.textarea`
height: 200px;
resize: none;
display: block;
width: 100%;
margin-bottom: 25px;
// padding: 15px;
padding: 15px 0;
border: none;
border-bottom: 1px solid #eba402;
background-color: #facf2c54;
// resize: vertical;
&:focus{
  outline: none;
}
`
//   .contact .form .alll form textarea.input{
//   height: 200px;
//   resize: none;
//   }

export const Mapandinfo = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
margin-top: 100px;
margin-bottom: 50px;

@media (max-width: 767px){
  flex-direction: column;
} 
`
//   .contact .container .mapandinfo {
//     display: flex;
//     justify-content: space-between;
//     align-items: center;
//     margin-top: 100px;
//     margin-bottom: 50px;
//   }

export const Map = styled.div`
flex-basis: 68%;
`
//   .contact .container .mapandinfo .map {
//     /* flex-basis: 48%; */
//     flex-basis: 68%;
//   }


export const IIFFrame = styled.iframe`
border: 0;
max-width: 100%;
`
// .contact .container .mapandinfo .map iframe {
//   border: 0;
//   max-width: 100%;
// }


export const Info = styled.div`
flex-basis: 28%;

@media (max-width: 767px){
  display: flex;
  text-align: center;
} 
`
//   .contact .container .mapandinfo .info {
//     /* flex-basis: 48%; */
//     flex-basis: 28%;
//   }

export const Text1 = styled.div`
margin-bottom: 80px;

@media (max-width: 767px){
  margin-bottom: 0;
  margin-right: 82px;
}
`
//   .contact .container .mapandinfo .info .text1{
//     margin-bottom: 80px;
//   }

export const HH3 = styled.h3`
font-size: 25px;
color: #eba402;
`
//   .contact .container .mapandinfo .info .text1 h3{
//     font-size: 25px;
//     color: #eba402;
//   }

export const SSpan = styled.span`
display: block;
margin-bottom: 10px;
`
//   .contact .container .mapandinfo .info .text1 span{
//     display: block;
//     margin-bottom: 10px;
//   }

export const List = styled.ul`
list-style: none;
display: flex;
justify-content: flex-start;
padding: 0;
align-items: center;
font-size: 24px;
margin: 10px 0;

@media (max-width: 767px){
  justify-content: center;
}
`
//   .contact .container .mapandinfo .info .text1 ul{
//     list-style: none;
//     display: flex;
//     justify-content: flex-start;
//     padding: 0;
//     align-items: center;
//     font-size: 24px;
//     margin: 10px 0;
//   }

export const ListLI = styled.li`
margin-right: 5px;
&:hover{
    &:first-child{color: #b14cc3;}
    &:nth-child(2){color: #0923b1;}
    &:nth-child(3){color: red;}
    &:last-child{color: #03a9f4;}
}
`
//   .contact .container .mapandinfo .info .text1 ul li {
//     margin-right: 5px;
//   }

//   .contact .container .mapandinfo .info .text1 ul li:hover:first-child{
//     color: #b14cc3;
//   }
//   .contact .container .mapandinfo .info .text1 ul li:hover:nth-child(2){
//     color: #0923b1;
//   }
//   .contact .container .mapandinfo .info .text1 ul li:hover:nth-child(3){
//     color: red;
//   }
//   .contact .container .mapandinfo .info .text1 ul li:hover:last-child{
//     color: #03a9f4;
//   }


export const Third = styled.h3`
font-size: 25px;
color: #eba402;
`
//   .contact .container .mapandinfo .info .text2 h3{
//     font-size: 25px;
//     color: #eba402;
//   }


export const Paarraa = styled.p`
line-height: 1.6;
`
//   .contact .container .mapandinfo .info .text2 p{
//     line-height: 1.6;
//   }
  
  /* contact */
  

























