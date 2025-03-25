// https://neetcode.io/problems/string-encode-and-decode

// Encode and Decode Strings
// Design an algorithm to encode a list of strings to a single string. The encoded string is then decoded back to the original list of strings.

// Please implement encode and decode

// Example 1:

// Input: ["neet","code","love","you"]

// Output:["neet","code","love","you"]
// Example 2:

// Input: ["we","say",":","yes"]

// Output: ["we","say",":","yes"]
// Constraints:

// 0 <= strs.length < 100
// 0 <= strs[i].length < 200
// strs[i] contains only UTF-8 characters.

function encode(strs: string[]): string {
  // 4#leet4#code4#love3#you
  return strs.map((str) => `${str.length}#${str}`).join("");
}

function decode(str: string): string[] {
  const strs: string[] = [];
  let i = 0;

  while (i < str.length) {
    let j = i;

    while (j < str.length && str[j] !== "#") {
      j++;
    }

    const len = Number(str.slice(i, j));
    const word = str.slice(j + 1, j + 1 + len);

    strs.push(word);
    i = j + 1 + len;
  }

  return strs;
}

console.log(decode(encode(["neet", "code", "love", "you"])));
