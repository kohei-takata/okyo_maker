#!/usr/bin/env node

var kanjis = require('joyo-kanji');

if(process.argv.length !== 3 || !isNumber(process.argv[2])) {
  return console.log('Invalid argument. Please pass a number.');
}

var size = process.argv[2];

var outputKanjiList = '';

for (var i = 0; i < size; i++) {
  var n = Math.floor(Math.random() * kanjis.kanji.length);
  var kanji = kanjis.kanji[n];

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
