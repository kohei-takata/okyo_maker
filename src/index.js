#!/usr/bin/env node

const kanjis = require('joyo-kanji');

if(process.argv.length !== 3 || !isNumber(process.argv[2])) {
  console.log('Invalid argument. Please pass a number.');
  process.exit(1);
}

const size = process.argv[2];

let outputKanjiList = '';

for (let i = 0; i < size; i++) {
  let n = Math.floor(Math.random() * kanjis.kanji.length);
  let kanji = kanjis.kanji[n];

  if (i % 5 === 0){
    outputKanjiList += ' ';
  }
  if (i % 10 === 0){
    outputKanjiList += '\n';
  }
  outputKanjiList += kanji;
};

console.log(outputKanjiList);

function isNumber(x) { 
  if(typeof(x) != 'number' && typeof(x) != 'string')
    return false;
  else 
    return (x == parseFloat(x) && isFinite(x));
}
