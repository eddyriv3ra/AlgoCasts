// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
  let chars = {};
  let max = 0;
  let maxKey = '';
  for(char of str) {
    !chars[char] ? chars[char] = 1 : chars[char]++
  }
  for (const char in chars) {
    if(chars[char] > max){
      max = char[char];
      maxKey = char;
    }
  }

  return maxKey;
}

module.exports = maxChar;
