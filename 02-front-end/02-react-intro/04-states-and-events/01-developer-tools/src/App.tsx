import { useState } from 'react';

function App() {
    const toolKit = [
        'JavaScript',
        'TypeScript',
        'React',
        'HTML',
        'CSS',
        'Node',
        'Automated tests',
    ];

    const [index, setIndex] = useState(0);
    const [toolList, setToolList] = useState(toolKit);
    const [inputValue, setInputValue] = useState('');
    
    function handleNextClick() {
        if (index + 1 < toolList.length) setIndex(index + 1);
        else setIndex(0);
    }

    function handlePreviousClick() {
        if (index - 1 >= 0) setIndex(index - 1);
        else setIndex(toolList.length - 1);
    }

    function handleAddClick() {
        if (inputValue) {
            setToolList([...toolList, inputValue]);
        }
    }

    return (
        <>
            <h1>Developer's Tools Box</h1>
            <h2>{ toolList[index] }</h2>
            <button onClick={ handlePreviousClick }>Previous</button>
            <button onClick={ handleNextClick }>Next</button>
            <section>
                <h3>Add new tools</h3>
                <input onChange={({ target }) => setInputValue(target.value)}/>
                <button onClick={ handleAddClick }>Add</button>
            </section>
            <section>
                <h3>Carousel Item List</h3>
                <ul>
                    { toolList.map((tool) => (
                        <li>{ tool }</li>
                    ))}
                </ul>
            </section>
        </>
    );
}

export default App;
