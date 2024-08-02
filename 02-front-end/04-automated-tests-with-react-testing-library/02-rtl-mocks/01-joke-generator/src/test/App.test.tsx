import { render, screen } from '@testing-library/react';
import { vi } from 'vitest';
import App from '../App';

describe('Testing App.js', () => {
    it('checks if when rendering the page, a joke is rendered', async () => {
        afterEach(() => vi.clearAllMocks());
        
        const MOCK_JOKE = {
            id: '7h3oGtrOfxc',
            joke: 'Thanks for explaining the word "many" to me. It means a lot.',
        };

        const MOCK_RESPONSE = {
            ok: true,
            status: 200,
            json: async () => MOCK_JOKE,
        } as Response;

        const mockFetch = vi.spyOn(global, 'fetch').mockResolvedValue(MOCK_RESPONSE);
        
        render(<App />);
        const renderedJoke = await screen.findByText('Thanks for explaining the word "many" to me. It means a lot.');

        expect(renderedJoke).toBeInTheDocument();
        expect(mockFetch).toHaveBeenCalledTimes(1);
        expect(mockFetch).toHaveBeenCalledWith('https://icanhazdadjoke.com/', { headers: { Accept: 'application/json' } });
    });
});
