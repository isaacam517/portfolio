import React from 'react';
import { MeusConhecimentosContainer, DivSkills, Skills } from './styles';


const MeusConhecimentos = () => {
  return (
    <MeusConhecimentosContainer>
            <h4>Meus Conhecimentos</h4>
            <DivSkills>
            <Skills>
                <h2>Fornt-end</h2>
                <p> Desenvolvimento de aplicações web utilizando HTML, CSS e JavaScript.
                 Criação de sites responsivos seguindo princípio de Mobile First.</p>

                
            </Skills>
            <Skills>
                <h2>Back-end</h2>
                <p> Aplicações utilizando NodeJS, Typescript e MySQL. Criação de API´s para
                    comunicação com front-end seguindo princípio de Clean Code.      
                </p>
            </Skills>
        </DivSkills>
    </MeusConhecimentosContainer>
  );
}

export default MeusConhecimentos;