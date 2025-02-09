// https://leetcode.com/problems/valid-anagram/
// https://neetcode.io/problems/is-anagram

// Valid Anagram
// Given two strings s and t, return true if the two strings are anagrams of each other, otherwise return false.

// An anagram is a string that contains the exact same characters as another string, but the order of the characters can be different.

// Example 1:
// Input: s = "racecar", t = "carrace"
// Output: true

// Example 2:
// Input: s = "jar", t = "jam"
// Output: false

// Constraints:
// s and t consist of lowercase English letters.

function isAnagram(s: string, t: string): boolean {
  if (s.length !== t.length) return false;

  const sMap = [...s].reduce(
    (map, char) => map.set(char, (map.get(char) ?? 0) + 1),
    new Map()
  );

  for (const char of t) {
    const counts = sMap.get(char);

    if (!counts) return false;

    const decreasedCount = counts - 1;

    if (decreasedCount === 0) {
      sMap.delete(char);
    } else {
      sMap.set(char, decreasedCount);
    }
  }

  return sMap.size === 0;

  // reviewed by GPT
  // if (s.length !== t.length) return false;

  // const charCount = new Array(26).fill(0);
  // const base = "a".charCodeAt(0);

  // for (const char of s) {
  //   charCount[char.charCodeAt(0) - base]++;
  // }

  // for (const char of t) {
  //   const index = char.charCodeAt(0) - base;
  //   if (--charCount[index] < 0) return false;
  // }

  // return true;
}
