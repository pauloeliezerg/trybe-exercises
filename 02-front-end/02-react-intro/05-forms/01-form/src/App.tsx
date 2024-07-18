import React, { useState } from 'react';

function App() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [schooling, setSchooling] = useState('high-school');
    const [resume, setResume] = useState('');
    const [terms, setTerms] = useState(false);
    const [error, setError] = useState(false);

    function resetForm() {
        setName('');
        setEmail('');
        setSchooling('high-school');
        setResume('');
        setError(false);
    }

    function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();
        if (terms) {
            alert(
                `Name: ${name}
                Email: ${email}
                Schooling: ${schooling}
                Resume: ${resume}`
            );
            resetForm();
        } else setError(true);
    }

    return (
        <>
            <form
                onSubmit={(event) => handleSubmit(event)}
            >
                <label>
                    Name
                    <input 
                        value={name}
                        onChange={({ target }) => setName(target.value)}
                    />
                </label>
                <label>
                    E-mail
                    <input 
                        value={email}
                        onChange={({ target }) => setEmail(target.value)}
                    />
                </label>
                <label>
                    Schooling
                    <select
                        value={schooling}
                        onChange={({ target }) => setSchooling(target.value)}
                    >
                        <option value="high-school">High School</option>
                        <option value="university">University</option>
                        <option value="postgraduate">Postgraduate</option>
                    </select>
                </label>
                <label>
                    Resume
                    <textarea
                        value={resume}
                        onChange={({ target }) => setResume(target.value)}
                    />
                </label>
                <label>
                    I have read and accept the terms and conditions
                    <input
                        type="checkbox"
                        checked={terms}
                        onChange={() => setTerms((terms) => !terms)}
                    />
                </label>
                <button>Send</button>
            </form>
            {error && (
                <h4>
                    You need to accept the terms and conditions to be able to submit your CV
                </h4>
            )}
        </>
    );
}

export default App;
