import React, { useState } from 'react';

function App() {
    const [formInfo, setFormInfo] = useState({
        name: '',
        email: '',
        schooling: 'high-school',
        resume: '',
    });
    const [terms, setTerms] = useState(false);
    const [error, setError] = useState(false);

    function handleChange(event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) {
        const { name, value } = event.target;
        setFormInfo({
            ...formInfo,
            [name]: value,
        });
    }

    function resetForm() {
        setFormInfo({
            name: '',
            email: '',
            schooling: 'high-school',
            resume: '',
        });
        setTerms(false);
        setError(false);
    }

    function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();
        if (terms) {
            alert(
                `Name: ${formInfo.name}
                Email: ${formInfo.email}
                Schooling: ${formInfo.schooling}
                Resume: ${formInfo.resume}`
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
                        required
                        name="name"
                        value={formInfo.name}
                        onChange={handleChange}
                    />
                </label>
                <label>
                    E-mail
                    <input 
                        required
                        name="email"
                        value={formInfo.email}
                        onChange={handleChange}
                    />
                </label>
                <label>
                    Schooling
                    <select
                        name="schooling"
                        value={formInfo.schooling}
                        onChange={handleChange}
                    >
                        <option value="high-school">High School</option>
                        <option value="university">University</option>
                        <option value="postgraduate">Postgraduate</option>
                    </select>
                </label>
                <label>
                    Resume
                    <textarea
                        name="resume"
                        value={formInfo.resume}
                        onChange={handleChange}
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
