import styled from "styled-components";

export const HomeSection = styled.div`
    padding-bottom: 50px;
`  

export const Big = styled.div`
padding: 50px 0 0;
display: flex;
flex-wrap: wrap;
justify-content: space-between;
align-items: center;
    @media (max-width: 767px){
        flex-direction: column;
    }
`

export const Big2 = styled.div`
padding: 50px 0 0;
display: flex;
flex-wrap: wrap;
justify-content: space-between;
align-items: center;

    @media (max-width: 767px){
        flex-direction: column-reverse;
        padding: 100px 0 0;
    }
`

export const One = styled.div`
flex-basis: 48%;
`

export const Image = styled.img`
max-width: 100%;
`

export const Two = styled.div`
flex-basis: 48%;
text-align: center;
`

export const Title = styled.h3`
color: #cf5c42;
`

export const Paragraph = styled.p`
line-height: 1.6;
`

export const Btn = styled.button`
border-radius: 7px;
color: #cf5c42;
padding: 10px;
font-weight: bold;
border: 1px solid #507900;
background-color: transparent;
position: relative;
cursor: pointer;

&:before{
    content: "";
    position: absolute;
    left: 0;
    top: 0;
    width: 0;
    height: 100%;
    background-color: #5079008c;
    transition: .3s;
}
&:hover{
    &:before{
        width: 100%;
    }
}
`

