import React from 'react';
import { MeusConhecimentosContainer, DivSkills, Projeto1, Projeto2, Projeto3, Button } from './styles';
import ipad from '../img/ipad.png';
import imac from '../img/imac.png';
import macbook from '../img/macbook.png';



const MeusProjetos = () => {
  return (
    <MeusConhecimentosContainer>
            <h4>Meus Projetos</h4>
            <DivSkills>
            <Projeto1>                
                <div>
                    <img src={macbook} alt="macbook"/></div>
                <div>
                    <h2>Planner</h2>
                    <h3>Front-end</h3>
                    <p> 
                        Desenvolvimento de aplicações web utilizando HTML, CSS e JavaScript consumindo API's.
                        Modelo de uma planilha com atividades diárias, podendo ser adicionadas
                        e excluídas, armazenadas em um banco de dados, e segurando princípio de Desktop First.
                    </p>
                    <a href="https://github.com/isaacam517/planner" target="blank"><Button>Ver no GitHub</Button></a>                    
                </div>
            </Projeto1>
            <Projeto2>
                <div>
                    <img src={imac} alt="imac"/></div>
                <div>
                    <h2>Fast Convert</h2>
                    <h3>Front-end</h3>
                    <p> 
                        Desenvolvimento de aplicações web utilizando HTML, CSS e JavaScript.
                        Conversor de moedas, com endpoints atualizando a cada 30 segundos 
                        seguindo princípio de Desktop First.
                    </p>
                    <a href="https://github.com/isaacam517/fast-converter" target="blank"><Button>Ver no GitHub</Button></a>
                 </div>
            </Projeto2>
            <Projeto3>
                <div>
                    <img src={ipad} alt="ipad"/>
                </div>
                <div>
                    <h2>Labex</h2>
                    <h3>Front-end</h3>
                    <p> 
                        Desenvolvimento de aplicações web utilizando HTML, CSS e JavaScript.
                        Criação de sites responsivos seguindo princípio de Mobile First.
                    </p>
                    <a href="https://github.com/isaacam517/labex" target="blank"><Button>Ver no GitHub</Button></a>
                </div>
            </Projeto3>        
            <a href="https://github.com/isaacam517?tab=repositories" target="blank"><Button>Ver Todos</Button></a>       
        </DivSkills>

    </MeusConhecimentosContainer>
  );
}

export default MeusProjetos;