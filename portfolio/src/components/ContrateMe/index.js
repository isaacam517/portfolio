import React from 'react';
import { FirstSection, ContrateMeContainer, H1, RedesSociais, DivNome } from './styles';
import github from '../img/github.png';
import twitter from '../img/twitter.png';
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
                    <img src={github} alt="github"/>
                    <img src={twitter} alt="twitter"/>
                    <img src={whats} alt="whats"/>
                    <img src={insta} alt="insta"/>
                    <img src={linkedin} alt="linkedin"/>
                </RedesSociais>           
            </FirstSection>            
        </ContrateMeContainer>
    );
}

export default ContrateMe;