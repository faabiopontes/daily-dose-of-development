import 'reflect-metadata';
import sum from './sum';

describe('sum', () => {
  it('should sum two numbers', async () => {
    const expectedResult = 9;
    const result = sum(4, 5);
    expect(result).toStrictEqual(expectedResult);
  });
});
