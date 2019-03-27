function add(map, key, value) {
  map.set(key, value);
  return value;
}

const asc = (x, y) => x - y;

function addPairSum(pairSums, list, i, j) {
  const a = list[i];
  const b = list[j];
  const c = -a - b;
  const sumInfo = pairSums.get(c) || add(pairSums, c, {
    triplets: {},
    indexes: new Set(),
  })
  const triplet = [a, b, c].sort(asc);
  sumInfo.triplets[triplet.join(',')] = triplet;
  sumInfo.indexes.add(i);
  sumInfo.indexes.add(j);
};

const toTriplets = pairSums => (triplets, c, i) => {
  const sumInfo = pairSums.get(c);
  if (sumInfo == null || sumInfo.indexes.has(i)) return triplets;
  pairSums.delete(c); // ignoring not-unique items
  return Object.assign(triplets, sumInfo.triplets);
}

const findTriplets = list => {
  const n = list.length;
  if (n < 3) return [];
  const pairSums = new Map();
  const n1 = n - 1;
  for (let i = 0; i < n1; i++) {
    for(let j = i + 1; j < n; j++) {
      addPairSum(pairSums, list, i, j)
    }
  }
  return Object.values(
    list.reduce(toTriplets(pairSums), {})
  );
}

module.exports = findTriplets;
