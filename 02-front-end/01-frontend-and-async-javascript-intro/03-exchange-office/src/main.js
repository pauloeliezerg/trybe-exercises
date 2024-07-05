import './style.css';

const input = document.querySelector('input');
const btn = document.querySelector('button');
const currencyPanel = document.querySelector('#currency-container');


btn.addEventListener('click', () => {
    currencyPanel.innerHTML = '';

    const API_KEY = import.meta.env.VITE_API_KEY;
    const API_URL = `https://v6.exchangerate-api.com/v6/${API_KEY}/latest/${input.value}`;
    
    const currencyContainerText = document.createElement('h2');
    currencyContainerText.innerHTML = `Values referring to 1 ${input.value}`;
    currencyPanel.appendChild(currencyContainerText);

    fetch(API_URL)
        .then((response) => response.json())
        .then((data) => {
            const currencies = data.conversion_rates;
            Object.keys(currencies).map((currency, index) => {
        
                const card = document.createElement('div');
                const currencyName = document.createElement('span');
                const currencyValue = document.createElement('span');
        
                card.className = 'card';
                currencyName.className = 'currency-name';
                currencyValue.className = 'currency-value';
        
                currencyName.innerHTML = `💱 ${currency}`;
                currencyValue.innerHTML = `${Object.values(currencies)[index].toFixed(3)}`;
        
                currencyPanel.appendChild(card);
                card.appendChild(currencyName);
                card.appendChild(currencyValue);
            });
        });
});
