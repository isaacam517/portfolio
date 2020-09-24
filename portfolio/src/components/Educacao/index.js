import React from 'react';
import { MeusConhecimentosContainer, DivSkills, Skills } from './styles';


const Educacao = () => {
  return (
    <MeusConhecimentosContainer>
            <h4>Educação</h4>
            <DivSkills>
            <Skills>
                <h2>Superior</h2>
                <p><strong>Tecnólogo em Análise e Desenvolvimento de Sistemas</strong> -
                </p>
                <p> Universidade São Miguel. 01/2018 a 07-2020.</p>

                
            </Skills>
            <Skills>
                <h2>Web Full Stack</h2>
                <p> HTML5, CSS3, JacaScript, React, Consumindo API's do Back,
                    NodeJS, Typescript e MySQL. Criação de API´s para
                    comunicação com front-end seguindo princípio de Clean Code.
                    Git, Github.       
                </p>
                <p> Labenu - 6 meses 2020</p>
            </Skills>
            <Skills>
                <h2>Técnico</h2>
                <p> Informática para Internet (C#, ASP.NET Core, MySQL)- CURSANDO.</p>
                <p> SENAC - EAD - 07/2020 a 12/2021</p>
            </Skills>
        </DivSkills>
    </MeusConhecimentosContainer>
  );
}

export default Educacao;