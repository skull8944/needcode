// https://leetcode.com/problems/top-k-frequent-elements/description/
// https://neetcode.io/problems/top-k-elements-in-list

// Top K Frequent Elements
// Given an integer array nums and an integer k, return the k most frequent elements. You may return the answer in any order.

// Example 1:

// Input: nums = [1,1,1,2,2,3], k = 2
// Output: [1,2]
// Example 2:

// Input: nums = [1], k = 1
// Output: [1]

// Constraints:

// 1 <= nums.length <= 105
// -104 <= nums[i] <= 104
// k is in the range [1, the number of unique elements in the array].
// It is guaranteed that the answer is unique.

function topKFrequent(nums: number[], k: number): number[] {
  const map = nums.reduce(
    (m, num) => m.set(num, (m.get(num) ?? 0) + 1),
    new Map<number, number>()
  );

  const arr = [...map].sort((a, b) => b[1] - a[1]);

  return Array.from({ length: k }, (_, i) => arr[i][0]);

  // const minHeap: [number, number][] = [];

  // for (const [num, freq] of map) {
  //   minHeap.push([num, freq]);
  //   minHeap.sort((a, b) => a[1] - b[1]);

  //   if (minHeap.length > k) {
  //     minHeap.shift();
  //   }
  // }

  // return minHeap.map(([num]) => num);
}
