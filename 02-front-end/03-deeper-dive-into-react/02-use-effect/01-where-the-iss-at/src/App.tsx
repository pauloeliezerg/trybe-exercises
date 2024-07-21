import { useState, useEffect } from 'react';
import { fetchCoordinates } from './services';

type Coordinates = {
    latitude: number;
    longitude: number;
};

function App() {
    const [coordinates, setCoordinates] = useState<Coordinates | null>(null);
    const [loading, setLoading] = useState(false);
    
    useEffect(() => {
        async function fetchData() {
            try {
                setLoading(true);
                const data = await fetchCoordinates();
                const { latitude, longitude } = data;

                setCoordinates({ latitude, longitude });
                setLoading(false);
            } catch (error) {
                console.error('Error fetching data:',error);
                setLoading(false);
            }
        }

        fetchData();

        const intervalId = setInterval(() => {
            fetchData();
        }, 3000);

        return () => clearInterval(intervalId);
    }, []);

    if(loading) {
        return <h1>Loading...</h1>;
    }

    return (
        <>
            <h1>International Space Station Location Tracker</h1>
            {coordinates && (
                <>
                    <h2>{`Latitude: ${coordinates.latitude}`}</h2>
                    <h2>{`Longitude: ${coordinates.longitude}`}</h2>
                </>
            )}
        </>
    );
}

export default App;
