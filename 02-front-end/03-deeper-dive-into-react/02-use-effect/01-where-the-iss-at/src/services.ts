export const fetchCoordinates = async () => {
    const API_URL = 'https://api.wheretheiss.at/v1/satellites/25544';
    const response = await fetch(API_URL);
    
    if (!response.ok) throw new Error('Failed to fetch coordinates');

    const coordinates = await response.json();
    const latitude = Number(coordinates.latitude.toFixed(4));
    const longitude = Number(coordinates.longitude.toFixed(4));

    return { latitude, longitude };
};
