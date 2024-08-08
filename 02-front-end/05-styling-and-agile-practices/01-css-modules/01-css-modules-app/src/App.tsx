import Title from './components/title';
import News from './components/news';

import './App.css';

function App() {
  return (
    <div>
      <header className="header">
        <Title />
      </header>

      <div className="container">
        <News
          title="Cientistas descobrem nova espécia de planta que brilha no escuro"
          content="Um time de cientistas fez a descoberta enquanto conduzia um estudo com uma nova espécie de planta. Um dos membros da equipe confundiu o interruptor e apagou a luz do laboratório por acidente."
        />
        <News
          title="Artista cria escultura usando apenas materiais reciclados retirados do
       oceano"
          content="A ideia para a obra de arte surgiu após uma garrafa plástica raspar em seu tornozelo enquanto nadava na praia e o artista imaginou que fosse um tubarão."
        />
      </div>
    </div>
  );
}

export default App;
