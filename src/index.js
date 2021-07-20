import emojipedia from "./emojipedia";

var numbers = [3, 56, 2, 48, 5];

//Map -Create a new array by doing something with each item in an array.
function double(x) {
  return x * 2;
}
const doubledNumbers = numbers.map(double);

//Filter - Create a new array by keeping the items that return true.
const numbersGreater = numbers.filter(function (num) {
  return num > 10;
});

//Reduce - Accumulate a value by doing something to each item in an array.
const sumAccumulator = numbers.reduce(function (accumulator, currentNumber) {
  return accumulator + currentNumber;
});

//Find - find the first item that matches from an array.
const numberGreaterThan10 = numbers.find(function (num) {
  return num > 10;
});
//FindIndex - find the index of the first item that matches.
const indexGreaterThan10 = numbers.findIndex(function (num) {
  return num > 10;
});

console.log(
  { doubledNumbers },
  { numbersGreater },
  { sumAccumulator },
  { numberGreaterThan10 },
  { indexGreaterThan10 }
);

const newEmojiPedia = emojipedia.map(function (emojiEntry) {
  return emojiEntry.meaning.substring(0, 100);
});

console.log(newEmojiPedia);
