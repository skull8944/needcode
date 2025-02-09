// https://leetcode.com/problems/contains-duplicate/
// https://neetcode.io/problems/duplicate-integer

// Contains Duplicate
// Given an integer array nums, return true if any value appears more than once in the array, otherwise return false.

// Example 1:
// Input: nums = [1, 2, 3, 3]
// Output: true

// Example 2:
// Input: nums = [1, 2, 3, 4]
// Output: false

function containsDuplicate(nums: number[]): boolean {
  const set = new Set();

  return nums.some((n) => {
    if (set.has(n)) return true;

    set.add(n);
    return false;
  });

  // reviewed by GPT
  // for (const n of nums) {
  //   if (set.has(n)) return true;
  //   set.add(n);
  // }

  // return false;
}
