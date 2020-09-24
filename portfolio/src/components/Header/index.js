import React from 'react';
import { FirstSection, HeaderContainer, Topo, Nome, Link1, Link2, Link3, Menu, H1, H2, RedesSociais, DivNome } from './styles';
import foto from '../img/foto.png'
import github from '../img/github.png';
import twitter from '../img/twitter.png';
import whats from '../img/whats.png';
import insta from '../img/insta.png';
import linkedin from '../img/linkedin.png';


const Header = () => {
    return (
        <HeaderContainer>
            <Topo>
                <Nome>
                    <a href="">Isaac</a>
                </Nome>
                <Menu>        
                    <Link1 href="">quem sou</Link1>&nbsp;       
                    <Link2 href="">projetos</Link2>&nbsp;       
                    <Link3 href="">contato</Link3>
                </Menu>            
            </Topo>
            <FirstSection>                
                <img src={foto} alt="foto"/>
                <DivNome>
                    
                    <H2>Eu sou </H2>
                    <H1>Isaac Martiniano</H1>
                    <h4>Desenvolvedor Web Front End</h4>
                    <p>Apaixonado por tecnologia e programação</p>
                    
                </DivNome>
                <RedesSociais>
                    <img src={github} alt="github"/>
                    <img src={twitter} alt="twitter"/>
                    <img src={whats} alt="whats"/>
                    <img src={insta} alt="insta"/>
                    <img src={linkedin} alt="linkedin"/>
                </RedesSociais>           
            </FirstSection>            
        </HeaderContainer>
    );
}

export default Header;
