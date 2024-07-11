import Greeting from './components/Greeeting';
import LuckyNumbers from './components/LuckyNumbers';
import LottoNumbers from './components/LottoNumbers';

import './App.css';

function App() {
    const lotto = [7, 21, 59, 12, 42, 30];

    return (
        <>
            <Greeting person={{ firstName: 'Chapolin', lastName: 'Colorado' }} />
            <LuckyNumbers />
            <LottoNumbers numbers={ lotto }/>
        </>
    );
}

export default App;
