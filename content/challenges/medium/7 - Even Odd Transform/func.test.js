const func = require('./func.js');

test('Expect result to be [9, -2, 15]', () => {
    expect(func([3, 4, 9], 3)).toStrictEqual([9, -2, 15]);
});

test('Expect result to be [-20, -20, -20]', () => {
    expect(func([0, 0, 0], 10)).toStrictEqual([-20, -20, -20]);
});

test('Expect result to be [3, 0, 5]', () => {
    expect(func([1, 2, 3], 1)).toStrictEqual([3, 0, 5]);
});