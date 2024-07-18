import { useState } from 'react';
import Form from './components/Form';

import './App.css';

function App() {
    const [phrases, setPhrases] = useState<string[]>([]);

    return (
        <>
            <Form />
            {phrases.length > 0 ? (
                <main>
                    <h1>Lista de frases:</h1>
                    <ul>
                        {phrases.map((phrase) => (
                            <li>{phrase}</li>
                        ))}
                    </ul>
                </main>
            ) : (
                <h2>Não há frases registradas.</h2>
            )}
        </>
    );
}

export default App;
