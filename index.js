var kanjis = require('joyo-kanji');
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
