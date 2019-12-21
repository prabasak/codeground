// #1: from entered name, return which charactor was repeated how many times
function text(str) {
  const result = {};
  for (let i = 0; i < str.length; i++) {
    let char = str.charAt(i);
    if (char !== " ")
      result[char] = (isNaN(result[char]) ? 1 : result[char] + 1);
  }
  console.log(result);
}
// text("this is a string");

// #2: convert a camelCase string to _ seperated string and vice-versa
function textConvert(str) {
  let result = "";
  for (let i = 0; i < str.length; i++) {
    let char = str.charAt(i);
    let cachedChar = char;
    if (char === cachedChar.toUpperCase() && char !== " ") {
      char = `_${cachedChar.toLowerCase()}`;
    }
    result += char;
  }
  console.log(result);
}
textConvert("toUpperCase toLowerCase");