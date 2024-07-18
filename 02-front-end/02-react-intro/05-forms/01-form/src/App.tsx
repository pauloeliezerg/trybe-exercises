function App() {
    return (
        <>
            <form>
                <label>
                    Name
                    <input />
                </label>
                <label>
                    E-mail
                    <input />
                </label>
                <label>
                    Schooling
                    <select>
                        <option value="high-school">High School</option>
                        <option value="university">University</option>
                        <option value="postgraduate">Postgraduate</option>
                    </select>
                </label>
                <label>
                    Resume
                    <textarea />
                </label>
                <button>Send</button>
            </form>
        </>
    );
}

export default App;
