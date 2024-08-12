import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { actionCreator } from './redux/actions';

type RootStateType = {
  count: number;
};

function App() {
  const rootState = useSelector((state: RootStateType) => state);
  const dispatch = useDispatch();

  return (
    <>
      <h1>Contador</h1>
      <h2>{ rootState.count }</h2>
      <button onClick={ () => dispatch(actionCreator()) }>Incrementa 1</button>
      <button onClick={ () => dispatch(actionCreator(5)) }>Incrementa 5</button>
    </>
  )
}

export default App
