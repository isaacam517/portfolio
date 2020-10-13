import React from 'react';
import { MeusConhecimentosContainer, DivSkills, Skills } from './styles';


const MeusConhecimentos = () => {
  return (
    <MeusConhecimentosContainer>
            <h4>Meus Conhecimentos</h4>
            <DivSkills>
            <Skills>
                <h2>Front-end</h2>
                <p> Desenvolvimento de aplicações web utilizando HTML, CSS e JavaScript.
                  Com React.JS, Git, alguns projetos no repositório do GitHub. 
                 Criação de sites responsivos seguindo princípio de Mobile First.
                 Também iniciante em C#, ASP.NET Core MVC, com MySQL</p>
            </Skills>           
        </DivSkills>
    </MeusConhecimentosContainer>
  );
}

export default MeusConhecimentos;