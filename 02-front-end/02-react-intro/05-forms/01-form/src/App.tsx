import React, { useState } from 'react';

function App() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [schooling, setSchooling] = useState('high-school');
    const [resume, setResume] = useState('');

    function resetForm() {
        setName('');
        setEmail('');
        setSchooling('high-school');
        setResume('');
    }
  
    function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();
        alert(
            `Name: ${name}
            Email: ${email}
            Schooling: ${schooling}
            Resume: ${resume}`
        );
        resetForm();
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
                <button>Send</button>
            </form>
        </>
    );
}

export default App;
