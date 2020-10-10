const word = prompt('Enter a word');
const word_arr = word.trim().split('');
const word_length = word_arr.length;
const two = 2;
let result;

if (word.trim() === '') {
  result = 'Invalid value';
} else if (word_length % two === 1) {
  result = word_arr[(word_length / two).toFixed() - 1];
} else if (word_length % two === 0) {
  if (word_arr[word_length / two - 1] === word_arr[word_length / two]) {
    result = 'Middle characters are the same';
  } else {
    result = word_arr.slice(word_length / two - 1, word_length / two + 1).join('');
  }
} 

alert(result);
