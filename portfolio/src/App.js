import React from 'react';
import Header from './components/Header/index';
import SobreMim from './components/SobreMim';
import {Link} from 'react-scroll';
import styled from 'styled-components'
import MeusConhecimentos from './components/MeusConhecimentos';
import Educacao from './components/Educacao';
import MeusProjetos from './components/MeusProjetos';
import ContrateMe from './components/ContrateMe';
import Footer from './components/Footer';
import topo from './components/img/topo.png'

export const Container = styled.div`

`
export const Topo = styled.div`
    position: fixed;
    top: 0;
    padding-top:8px;
    padding-left: 8px;
    background-color: white;
    width:100%;
    height: 5vh;
    display: flex;
    justify-content: space-between;  
    `
export const Nav = styled.nav`        
    a {
        text-decoration: none;
        margin-right: 16px;
    }
`
export const Nome = styled.div`
    width: 75px;
    height: 19px;
    font-family: Montserrat;
    font-size: 21px;
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: -0.28px;  
    a {
        text-decoration: none;
        color: #8d1c31;
    }
` 
export const Link2 = styled.a`
    cursor: pointer;
    width: 64px;
    height: 19px;
    font-family: Montserrat;
    font-size: 16px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: -0.22px;
    text-align: center;    
    color: #063447;  
` 
export const Link1 = styled.a`
    cursor: pointer;
    width: 80px;
    height: 19px;
    font-family: Montserrat;
    font-size: 16px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: -0.22px;
    text-align: center;    
    color: #8d1c31;
  
` 
export const Link3 = styled.a`
    cursor: pointer;
    width: 61px;
    height: 19px;
    font-family: Montserrat;
    font-size: 16px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: -0.22px;
    text-align: center;    
    color: #063447;  
` 
export const NavTop = styled.div`  
  a img {
    cursor: pointer;
    position: fixed;
    bottom: 8px;
    right: 8px;    
    width:3%;
    height: 5vh;    
    justify-content: space-between;  
  }
`

function App() {
  
  return (
    <Container>
      <div id="topo"></div>
      <Topo >       
        <Nome >
          <a href="">Isaac</a>     
        </Nome>
        <Nav>        
          <Link to="sobre-mim"smooth={true} offset={-40} duration={1000}>
            <Link1>quem sou</Link1>
          </Link>&nbsp;       
          <Link to="projetos" smooth={true} offset={-40} duration={1200}>
            <Link2>projetos</Link2>
          </Link>&nbsp;       
          <Link to="contato"  smooth={true} duration={1500} >
            <Link3>Contato</Link3>
          </Link>  
        </Nav>              
      </Topo>
      <Header />
      <div id="sobre-mim">
        <SobreMim />
      </div>
      <MeusConhecimentos />
      <Educacao />
      <div id="projetos">
        <MeusProjetos/>
      </div>
      <div id="contato">
        <ContrateMe />
      </div>
      <Footer />
      <NavTop>
        <Link to="topo"smooth={true} duration={1000}><img src={topo} alt="topo" /></Link>
      </NavTop>
    </Container>
  );
}

export default App;
