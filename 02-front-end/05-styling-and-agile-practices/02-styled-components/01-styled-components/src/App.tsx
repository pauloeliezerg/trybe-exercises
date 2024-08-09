import Title from './components/title';
import News from './components/news';

import styled from 'styled-components';

function App() {
  const Header = styled.header`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 1em;
    background-color: #022c16;
    margin-bottom: 3em;
  `;

  const Container = styled.div`
    width: 80%;
    max-width: 800px;
    margin: 0 auto;
  `;

  return (
    <div>
      <Header>
        <Title />
      </Header>

      <Container>
        <News
          title="Cientistas descobrem nova espécia de planta que brilha no escuro"
          content="Um time de cientistas fez a descoberta enquanto conduzia um estudo com uma nova espécie de planta. Um dos membros da equipe confundiu o interruptor e apagou a luz do laboratório por acidente."
        />
        <News
          title="Artista cria escultura usando apenas materiais reciclados retirados do
        oceano"
          content="A ideia para a obra de arte surgiu após uma garrafa plástica raspar em seu tornozelo enquanto nadava na praia e o artista imaginou que fosse um tubarão."
        />
      </Container>
    </div>
  );
}

export default App;
