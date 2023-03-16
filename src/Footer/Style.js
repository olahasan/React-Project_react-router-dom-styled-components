import styled from "styled-components";

export const Together = styled.div `
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 50px 0 20px;

    @media (max-width: 767px){
      flex-direction: column;
    }  
`
export const Left = styled.div `
    @media (max-width: 767px){
      margin-bottom: 30px;
    }  
`
// {/* <div className="left"></div> */}

export const TheLogo = styled.div `
font-weight: 900;
font-size: 30px;
cursor: pointer;
color: #507900;
`

export const Icons = styled.div `
display: flex;
cursor:pointer;

& div:first-child{
  font-size: 35px;
  margin: 0 2px;
  transition: .3s;

  &:hover{
    color: #b14cc3;
  }
}

& div:nth-child(2){
  font-size: 35px;
  margin: 0 2px;

  &:hover{
    color: #0923b1;
  }
}

& div:last-child{
  font-size: 35px;
  // font-size: 38px;
  margin: 0 2px;

  &:hover{
    color: red;
  }
}
`

export const TheDiv = styled.div `
display: flex;
`

export const AD = styled.div `
margin-left: 10px;
  margin-bottom: 10px;
`

export const HO = styled.div `
margin-left: 6px;
margin-bottom: 10px;
`

export const Tel = styled.div `
margin-left: 5px;
`

export const Num = styled.div `
display: block;
`

