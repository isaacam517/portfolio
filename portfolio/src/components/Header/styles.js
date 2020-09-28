import styled from 'styled-components'

export const HeaderContainer = styled.div`

`

export const FirstSection = styled.div`
    display:flex;
    
    background-color:#8d1c31;

    img {
        width:30vw;
        height:70vh;
    }    
    h4, p {
        margin-left: 20%;
        color: white;
        margin:1% 20%;
    }
`
export const DivNome = styled.div`  
    width: 45%;
        
`
export const H2 = styled.h2`
    margin-top: 15%;
    margin-left: 20%;
    margin-bottom: 1%;
    font-family: Montserrat;
    font-size: 50px;
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: -0.29px;
    color: #d97824;
`

export const H1 = styled.h1`
    margin-left: 20%;
    margin-top: 1%;    
    font-family: Montserrat;
    font-size: 4rem;
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: -0.29px;
    color: #d97824;
`
export const RedesSociais = styled.div`
    background-color: green;
    position: fixed;
    right: 8px;
    top: 35%;
    width: 2,5%;
    padding: 8px;
    border-radius: 10px;
    justify-content: center;    
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    gap: 16px;
    img{
        width: 100%;
        height: 80%;
        margin-right: 5%;
             
    }
`