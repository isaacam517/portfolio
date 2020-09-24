import React from 'react';
import { SobreMimContainer, TextoSobreMim, Avatar, Button } from './styles';
import avatar from '../img/avatar.png';





const SobreMim = () => {
  return (
    <SobreMimContainer>
        <TextoSobreMim>
            <h2>Sobre mim</h2>
            <p> Olá tudo bem? Meu nome é Isaac Martiniano, sou uma pessoa que ama o mundo
                tecnológico, e as novidades diarias dessa imensidão, gosto muito de codar ouvindo
                músicas, gosto de séries, filmes e games, mas concerteza gosto muito de ir à praia
                ver o sol nascer, gosto de viajar, principalmente dirigindo ou pilotando uma moto.
                Gosto de resolver problemas, criar soluções, inovar e avançar sempre! "A Persistência 
                é o caminho do êxito!" Charlie Chaplin. A resiliência me define, juntamente com essa
                vontade incansável de aprender! O céu é o limite!        
            </p>
            <p>NodeJS | MySQL | HTML5 | CSS3 | JavaScript | React | C# | ASP.NET</p>

            <Button>CV em PDF</Button>
        </TextoSobreMim>
        <Avatar>
            <img src={avatar} alt="avatar"/>
        </Avatar>
    </SobreMimContainer>
  );
}

export default SobreMim;