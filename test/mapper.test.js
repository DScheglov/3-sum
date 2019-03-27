const { fromText, toText } = require('../lib/mappers');

const text = '1,2,3,4,5,6,7';
const multiLineText = `1,2,3,4,5,6,7
8,9,10,11,12,13,14
21,22,23,24,25,26,27`

describe('fromText', () => {
  it('should process an empty string', () => {
    expect(fromText('')).toEqual([]);
  });

  it('should process single line', () => {
    expect(fromText(text)).toEqual([[1, 2, 3, 4, 5, 6, 7]]);
  })

  it('should process multi-line', () => {
    expect(fromText(multiLineText)).toEqual([
      [1, 2, 3, 4, 5, 6, 7],
      [8, 9, 10, 11, 12, 13, 14],
      [21, 22, 23, 24, 25, 26, 27],
    ])
  });

  it('should raise exception if invalid data passed', () => {
    expect(
      () => fromText('abc,123, 3434')
    ).toThrow('Invalid token: abc. It is not a safe integer.')
  });
});

describe('toText', () => {
  it('should process an empty array to empty string', () => {
    expect(toText([])).toBe('');
  });

  it('should process a single array to single row', () => {
    expect(toText([[1, 2, 3, 4, 5, 6, 7]])).toBe(text);
  });

  it('should process multi items array to mulity line text', () => {
    const listOfLists = [
      [1, 2, 3, 4, 5, 6, 7],
      [8, 9, 10, 11, 12, 13, 14],
      [21, 22, 23, 24, 25, 26, 27],
    ];
    expect(toText(listOfLists)).toBe(multiLineText);
  });
})