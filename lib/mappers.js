const parseNum = numStr => {
  const num = parseInt(numStr, 10);
  if (!Number.isSafeInteger(num)) {
    throw new TypeError(`Invalid token: ${numStr}. It is not a safe integer.`);
  }
  return num;
}

const parseRow = row => row.split(/\s*,\s*/g).map(parseNum);

const fromText = text => text.split('\n').filter(Boolean).map(parseRow);

const listToText = list => list.join(',');

const toText = listOfLists => listOfLists.map(listToText).join('\n');


module.exports = {
  fromText,
  toText,
};