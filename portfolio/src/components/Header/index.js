import React from 'react';
import { FirstSection, HeaderContainer, H1, H2, RedesSociais, DivNome } from './styles';
import foto from '../img/foto.png'
import github from '../img/github.png';
import whats from '../img/whats.png';
import insta from '../img/insta.png';
import linkedin from '../img/linkedin.png';


const Header = () => {
    return (
        <HeaderContainer>       
            <FirstSection>                
                <img src={foto} alt="foto"/>
                <DivNome>
                    
                    <H2>Eu sou </H2>
                    <H1>Isaac Martiniano</H1>
                    <h4>Desenvolvedor Web Front End</h4>
                    <p>Apaixonado por tecnologia e programação</p>
                    
                </DivNome>
                <RedesSociais>
                    <a href="https://github.com/isaacam517" ><img src={github} alt="github"/></a>                   
                    <a href="https://api.whatsapp.com/send?phone=5511965936391&text=Olá%20tudo%20bem?%20Seja%20Bem%20Vind@!" ><img src={whats} alt="whats"/></a>
                    <a href="https://www.instagram.com/isaacmartiniano/" ><img src={insta} alt="insta"/></a>
                    <a href="https://www.linkedin.com/in/isaac-martiniano-aa799a147/" ><img src={linkedin} alt="linkedin"/></a>
                </RedesSociais>           
            </FirstSection>            
        </HeaderContainer>
    );
}

export default Header;
