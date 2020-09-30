import React from 'react';
import { FirstSection, ContrateMeContainer, H1, RedesSociais, DivNome } from './styles';
import github from '../img/github.png';
import whats from '../img/whats.png';
import insta from '../img/insta.png';
import linkedin from '../img/linkedin.png';


const ContrateMe = () => {
    return (
        <ContrateMeContainer>
           <FirstSection>            
                <DivNome>                
                    <H1>Contrate-me!</H1>
                    
                    <p>Procuro oportunidade de trabalho onde eu possa aprender,
                        me desenvolver e evoluir na minha carreia profissional.</p>

                       <p>  E-mail para contato: isaacam517@gmail.com.br
                            Celular: (11) 96593-6391<br/>
                            Celular: (81) 99507-3317
                        </p>
                    
                </DivNome>
                <RedesSociais>
                <a href="https://github.com/isaacam517" target="blank" ><img src={github} alt="github"/></a>
                <a href="https://api.whatsapp.com/send?phone=5511965936391&text=Olá%20tudo%20bem?%20Seja%20Bem%20Vind@!" target="blank" ><img src={whats} alt="whats"/></a>
                <a href="https://www.instagram.com/isaacmartiniano/" target="blank"><img src={insta} alt="insta"/></a>
                <a href="https://www.linkedin.com/in/isaac-martiniano-aa799a147/" target="blank"><img src={linkedin} alt="linkedin"/></a>    
                    
                </RedesSociais>           
            </FirstSection>            
        </ContrateMeContainer>
    );
}

export default ContrateMe;