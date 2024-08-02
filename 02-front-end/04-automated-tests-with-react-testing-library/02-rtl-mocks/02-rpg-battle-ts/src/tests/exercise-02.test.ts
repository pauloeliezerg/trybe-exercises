import rollDice from '../service/rollDice';
import rollMultipleDice from '../service/rollMultipleDice';
import { vi } from 'vitest';

vi.mock('../service/rollDice');

it('testa a função `rollMultipleDice`', () => {
  (rollDice as any)
    .mockReturnValueOnce(6)
    .mockReturnValueOnce(4);

  expect(rollMultipleDice(2)).toBe(10);
  expect(rollDice).toHaveBeenCalledTimes(2);
});
