import { useState } from 'react';

function App() {
    const [index, setIndex] = useState(0);

    const toolKit = [
        'JavaScript',
        'TypeScript',
        'React',
        'HTML',
        'CSS',
        'Node',
        'Automated tests',
    ];

    function handleNextClick() {
        if (index + 1 < toolKit.length) setIndex(index + 1);
        else setIndex(0);
    }

    function handlePreviousClick() {
        if (index - 1 >= 0) setIndex(index - 1);
        else setIndex(toolKit.length - 1);
    }

    return (
        <>
            <h1>Developer's Tools Box</h1>
            <h2>{ toolKit[index] }</h2>
            <button onClick={ handlePreviousClick }>Previous</button>
            <button onClick={ handleNextClick }>Next</button>
        </>
    );
}

export default App;
