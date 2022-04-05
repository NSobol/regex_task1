import Validator from '../validator';

test('Тестирование корректного никнейма', () => {
  const exp = 'Никнейм корректен';
  const resolved = new Validator();
  expect(resolved.validateUsername('zagadka-123a')).toBe(exp);
});

test('Тестирование некорректного никнейма', () => {
  const exp = 'Имя не должно содержать подряд более трёх цифр, а также начинаться и заканчиваться цифрами, символами подчёркивания или тире.';
  const resolved = new Validator();
  expect(resolved.validateUsername('_zagadka-123')).toBe(exp);
});