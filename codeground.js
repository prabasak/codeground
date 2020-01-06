// #1: from entered name, return which charactor was repeated how many times
function text(str) {
  const result = {};
  for (let i = 0; i < str.length; i++) {
    let char = str.charAt(i);
    if (char !== " ") result[char] = isNaN(result[char]) ? 1 : result[char] + 1;
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
// textConvert("toUpperCase toLowerCase");

// #3: sample input - aaaabbbcccaaeeffz, expected output - a4b3c3a2e2f2z
function charCount(str) {
  let result,
    count = 1,
    i;

  if (!str) {
    return "";
  }

  result = str.charAt(0);
  for (i = 1; i < str.length; i++) {
    if (str.charAt(i) !== str.charAt(i - 1)) {
      result += count + str.charAt(i);
      count = 1;
    } else {
      count++;
    }
  }
  return result + count;
}
console.log(charCount("aabbcccaeeeeetz"));

// #4: if input is ["r", "b", "w", "b", "w", "r", "w", "r"], output will be in the following order ["r", "r", "r", "b", "b", "w", "w", "w"], where r stands for red, w fo white, b for blue