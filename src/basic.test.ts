describe('Basic test', () => {
  test('should pass', () => {
    expect(1 + 1).toBe(2);
  });

  test('should be greater than', () => {
    expect(5).toBeGreaterThan(3);
    expect(10).toBeGreaterThanOrEqual(10);
  });

  test('should handle string operations', () => {
    expect('hello world').toContain('world');
    expect('hello').toMatch(/h.llo/);
  });

  test('should work with arrays', () => {
    const arr = [1, 2, 3, 4, 5];
    expect(arr).toHaveLength(5);
    expect(arr).toContain(3);
    expect(arr).toEqual(expect.arrayContaining([2, 4]));
  });

  test('should handle objects', () => {
    const user = { name: 'John', age: 30 };
    expect(user).toHaveProperty('name');
    expect(user.name).toBe('John');
    expect(user).toEqual({ name: 'John', age: 30 });
  });

  test('should work with async/await', async () => {
    const fetchData = async () => {
      return new Promise(resolve => setTimeout(() => resolve('data'), 100));
    };
    const result = await fetchData();
    expect(result).toBe('data');
  });

  test('should throw errors', () => {
    const throwError = () => {
      throw new Error('Test error');
    };
    expect(throwError).toThrow('Test error');
    expect(throwError).toThrow(Error);
  });
});