const fs = require('fs');
const { fromText, toText } = require('./mappers');
const findTriplets = require('./find-triplets');

const {
  SOURCE_FILE = '/dev/stdin',
  DEST_FILE = '/dev/stdout',
} = process.env;

const pipe = (...fns) => fns.reduce((f, g) => g(f));

pipe(
  fs.readFileSync(SOURCE_FILE, { encoding: 'utf-8' }),
  fromText,
  rows => rows.map(findTriplets).map(toText).join('\n\n'),
  text => fs.writeSync(
    fs.openSync(DEST_FILE, 'w'),
    Buffer.from(text, 'utf-8')
  ),
);