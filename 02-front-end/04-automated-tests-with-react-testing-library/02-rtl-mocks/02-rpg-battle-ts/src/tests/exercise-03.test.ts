import rollMultipleDice from '../service/rollMultipleDice';
import attackEnemy from '../service/attackEnemy';
import { vi } from 'vitest';

vi.mock('../service/rollMultipleDice');

const enemy = {
  name: 'Chapolin Colorado',
  defensePoints: 30,
};

beforeEach(() => vi.resetAllMocks());

it('testa uma vitória na função `attackEnemy`', () => {
  (rollMultipleDice as any).mockReturnValueOnce(40);
  const resultObject = attackEnemy(2, 20, enemy);

  expect(resultObject.success).toBe(true);
  expect(rollMultipleDice).toHaveBeenCalledTimes(1);
});

it('testa uma derrota na função `attackEnemy`', () => {
  (rollMultipleDice as any).mockReturnValueOnce(20);
  const resultObject = attackEnemy(2,20, enemy);

  expect(resultObject.success).toBe(false);
  expect(rollMultipleDice).toHaveBeenCalledTimes(1);
});

it('testa um empate nos dados, gerando derrota no `attackEnemy`', () => {
  (rollMultipleDice as any).mockReturnValueOnce(30);
  const resultObject = attackEnemy(2,20, enemy);

  expect(resultObject.success).toBe(false);
  expect(rollMultipleDice).toHaveBeenCalledTimes(1);
});
