// https://leetcode.com/problems/product-of-array-except-self/description/
// https://neetcode.io/problems/products-of-array-discluding-self

// Given an integer array nums, return an array answer such that answer[i] is equal to the product of all the elements of nums except nums[i].
// The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.
// You must write an algorithm that runs in O(n) time and without using the division operation.

// Example 1:

// Input: nums = [1,2,3,4]
// Output: [24,12,8,6]

// Example 2:

// Input: nums = [-1,1,0,-3,3]
// Output: [0,0,9,0,0]

// Constraints:

// 2 <= nums.length <= 105
// -30 <= nums[i] <= 30
// The input is generated such that answer[i] is guaranteed to fit in a 32-bit integer.

// Follow up: Can you solve the problem in O(1) extra space complexity? (The output array does not count as extra space for space complexity analysis.)

function productExceptSelf(nums: number[]): number[] {
  const results: number[] = Array(nums.length).fill(1);

  for (const [i, num] of nums.entries()) {
    if (i === 0) continue;

    results[i] = results[i - 1] * nums[i - 1];
  }

  let rightProduct = 1;
  for (let j = nums.length - 1; j >= 0; j--) {
    results[j] *= rightProduct;
    rightProduct *= nums[j];
  }

  return results;
}
