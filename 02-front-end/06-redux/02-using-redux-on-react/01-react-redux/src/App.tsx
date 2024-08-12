import { useSelector } from 'react-redux';

type RootStateType = {
  count: number;
};

function App() {
  const rootState = useSelector((state: RootStateType) => state);

  return (
    <>
      <h1>Contador</h1>
      <h2>{ rootState.count }</h2>
      <button>Incrementa 1</button>
      <button>Incrementa 5</button>
    </>
  )
}

export default App
