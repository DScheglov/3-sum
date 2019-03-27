const findTriplets = require('../lib/find-triplets');


describe('findTriplet', () => {
  it('f([2, 4, 0, 9, -6]) -> [[-6, 2, 4]]', () => {
    const result = findTriplets([2, 4, 0, 9, -6]);
    expect(result).toHaveLength(1)
    expect(result[0]).toEqual([-6, 2, 4]);
  });

  it('f([-2, -4, 0, 9, 6]) -> [[-4, -2, 6]]', () => {
    const result = findTriplets([-2, -4, 0, 9, 6]);
    expect(result).toHaveLength(1)
    expect(result[0]).toEqual([-4, -2, 6]);
  });

  it('f([-2, -4, 0, 9, 6, 1, 1]) -> [[-6, 2, 4], [-2, 1, 1]]', () => {
    const result = findTriplets([-2, -4, 0, 9, 6, 1, 1]);
    expect(result).toHaveLength(2);
    expect(result).toContainEqual([-4, -2, 6]);
    expect(result).toContainEqual([-2, 1, 1]);
  });

  it('f([-2, -4, 0, 9, 7, 1, 5]) -> []', () => {
    const result = findTriplets([-2, -4, 0, 9, 7, 1, 5]);
    expect(result).toHaveLength(0);
  });

  it('f([-3, -4, 0, 9, 7, 1, -2, -5]) -> [[-4, -3, 7], [-5, -4, 9], [-5, -2, 7]]', () => {
    const result = findTriplets([-3, -4, 0, 9, 7, 1, -2, -5]);
    expect(result).toHaveLength(3);
    expect(result).toContainEqual([-5, -4, 9]);
    expect(result).toContainEqual([-5, -2, 7]);
    expect(result).toContainEqual([-4, -3, 7]);
  });

  it('f([9, 0, -4, -3, -5, -2, 1, 7]) -> [[-4, -3, 7], [-5, -4, 9], [-5, -2, 7]]', () => {
    const result = findTriplets([9, 0, -4, -3, -5, -2, 1, 7]);
    expect(result).toHaveLength(3)
    expect(result).toContainEqual([-5, -4, 9]);
    expect(result).toContainEqual([-4, -3, 7]);
    expect(result).toContainEqual([-5, -2, 7]);
  });

  it('f([1, -2, 0, 2, -1]) -> [[-1, 0, 1], [-2, 0, 2]]', () => {
    const result = findTriplets([1, -2, 0, 2, -1]);
    expect(result).toHaveLength(2);
    expect(result).toContainEqual([-1, 0, 1]);
    expect(result).toContainEqual([-2, 0, 2]);
  });

  it('f([]) -> []', () => {
    expect(findTriplets([])).toEqual([]);
  });

  it('f([1, -3]) -> []', () => {
    expect(findTriplets([1, -3])).toEqual([]);
  });

  it('f([1, -3, 2]) -> [-3, 1, 2]', () => {
    const result = findTriplets([1, -3, 2]);
    expect(result).toHaveLength(1);
    expect(result).toContainEqual([-3, 1, 2])
  });
});