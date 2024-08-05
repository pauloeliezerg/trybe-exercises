import rollDice from '../service/rollDice';
import { vi } from 'vitest';

it('testa a função `rollDice`', () => {
  vi.spyOn(global.Math, 'random').mockReturnValue(.8);
  expect(rollDice(20)).toBe(16);
  expect(global.Math.random).toHaveBeenCalledTimes(1);
});
