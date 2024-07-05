import './style.css';
import Swal from 'sweetalert2';

const input = document.querySelector('input');
const btn = document.querySelector('button');
const currencyPanel = document.querySelector('#currency-container');


btn.addEventListener('click', () => {
    currencyPanel.innerHTML = '';

    const currencyInput = input.value;

    if(!currencyInput) {
        return Swal.fire({
            title: 'Oops ...',
            text: 'You need to pass a currency',
            icon: 'error',
            confirmButtonText: 'OK',
        });
    }

    const API_KEY = import.meta.env.VITE_API_KEY;
    const API_URL = `https://v6.exchangerate-api.com/v6/${API_KEY}/latest/${currencyInput}`;
    
    
    fetch(API_URL)
        .then((response) => response.json())
        .then((data) => {
            const currencyContainerText = document.createElement('h2');
            currencyContainerText.innerHTML = `Values referring to 1 ${currencyInput}`;
            currencyPanel.appendChild(currencyContainerText);

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
        })
        .catch(() => {
            const currencyContainerText = document.querySelector('h2');
            currencyContainerText.innerHTML = '';

            Swal.fire({
                title: 'Oops ...',
                text: 'Non-existing currency',
                icon: 'error',
                confirmButtonText: 'OK',
            });
        });
});
