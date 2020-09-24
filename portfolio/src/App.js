import React from 'react';
import Header from './components/Header/index';
import SobreMim from './components/SobreMim';

import styled from 'styled-components'
import MeusConhecimentos from './components/MeusConhecimentos';
import Educacao from './components/Educacao';
import MeusProjetos from './components/MeusProjetos';
import ContrateMe from './components/ContrateMe';
import Footer from './components/Footer';

export const Container = styled.div`
  margin: 2px;
`

function App() {
  return (
    <Container>
      <Header />
      <SobreMim />
      <MeusConhecimentos />
      <Educacao />
      <MeusProjetos />
      <ContrateMe />
      <Footer />
    </Container>
  );
}

export default App;
