import styled from "styled-components";

export const Sec1 = styled.div`
display: flex;
align-items: center;
margin-top:30px;
justify-content: space-between;


@media (max-width: 767px){
  flex-direction: column;
}
`
// .about .container .sec1 {
//     display: flex;
//     justify-content: space-between;
//     align-items: center;
//   }

export const Photos = styled.div`
flex-basis: 48%;
`
  // .about .container .photos {
  //   flex-basis: 48%;
  // }

export const Img = styled.img`
 max-width: 100%;
//  width: 470px;
//  height: 470px;
`
  // .about .container .photos img{
  //   max-width: 100%;
  // }

export const Baragraph = styled.p`
  flex-basis: 48%;
    line-height: 1.6;
    color: #5a7c8d;
`  
  // .about .container p {
  //   flex-basis: 48%;
  //   line-height: 1.6;
  //   color: #5a7c8d;
  // }

export const Span = styled.span`
font-weight: bold;
color: red;
color: #b2b5cb;
`
  // .about .container p span {
  //   font-weight: bold;
  //   color: red;
  //   color: #b2b5cb;
  // }


export const Sec2 = styled.div`
display: grid;
grid-template-columns: repeat(auto-fill, minmax(400px , 1fr));
gap: 20px;
margin-top: 100px;
margin-bottom:50px
`
  // .about .container .sec2 {
  //   display: grid;
  //   grid-template-columns: repeat(auto-fill, minmax(400px , 1fr));
  //   gap: 20px;
  //   margin-top: 100px;
  // }

export const Box = styled.div`
/* background-color: #00968859; */
background-color: #b3b9cb59;
padding: 20px;
position: relative;
border-radius: 5px;
`  
  // .about .container .sec2 .box {
  //   /* background-color: #00968859; */
  //   background-color: #b3b9cb59;
  //   padding: 20px;
  //   position: relative;
  //   border-radius: 5px;
  // }

export const TheImage = styled.img`
position: absolute;
right: -4px;
top: 0;
transform: translateY(-50%);
width: 100px;
height: 100px;
border-radius: 50%;
border: 10px solid white
`  
  // .about .container .sec2 .box img{
  //   position: absolute;
  //   right: -4px;
  //   top: 0;
  //   transform: translateY(-50%);
  //   width: 100px;
  //   height: 100px;
  //   border-radius: 50%;
  //   border: 10px solid white;
  // }

export const TheTitle = styled.h2`
margin: 0 0 10px 0;
`
  // .about .container .sec2 .box h2{
  //   margin: 0 0 10px 0;
  // }

export const List = styled.ul`
list-style: none;
display: flex;
padding-left: 0;
font-size: 24px;
margin: 10px 0 ;
` 
  // .about .container .sec2 .box ul {
  //   list-style: none;
  //   display: flex;
  //   padding-left: 0;
  //   font-size: 24px;
  //   margin: 10px 0 ;
  // }

export const ListLi = styled.li`
margin-right: 5px;
transition: .3s;

&:first-child{
  &:hover{
    color: #b14cc3
  }
}
&:nth-child(2){
  &:hover{
    color: #0923b1;
  }
}
&:nth-child(3){
  &:hover{
    color: red;
  }
}
&:nth-child(4){
  &:hover{
    color: #03a9f4;
  }
}
`
  // .about .container .sec2 .box ul li{
  //   margin-right: 5px;
  //   transition: .3s;
  // }
export const OnlyOne = styled.li`
margin:0;
`
//  .about .container .sec2 .box ul li.onlyOne{
//     margin:0;
//   }



  // .about .container .sec2 .box ul li:first-child:hover{
  //   color: #b14cc3;
  // }
  // .about .container .sec2 .box ul li:nth-child(2):hover{
  //   color: #0923b1;
  // }
  // .about .container .sec2 .box ul li:nth-child(3):hover{
  //   color: red;
  // }
  // .about .container .sec2 .box ul li:nth-child(4):hover{
  //   color: #03a9f4;
  // }


  export const PPP = styled.p`
  margin-bottom: 0;
  `
  // .about .container .sec2 .box p{
  //   margin-bottom: 0;
  // }
  /* about  */
  