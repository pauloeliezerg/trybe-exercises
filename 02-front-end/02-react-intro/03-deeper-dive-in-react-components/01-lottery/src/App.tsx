import Greeting from './components/Greeeting';
import LuckyNumbers from './components/LuckyNumbers';

import './App.css';

function App() {
    const lotto = [7, 21, 59, 12, 42, 30];

    return (
        <>
            <Greeting person={{ firstName: 'Chapolin', lastName: 'Colorado' }} />
            <LuckyNumbers />
        </>
    );
}

export default App;
