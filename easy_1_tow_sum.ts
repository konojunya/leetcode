/*
 * @lc app=leetcode id=1 lang=typescript
 *
 * [1] Two Sum
 */

// @lc code=start
function twoSum(nums: number[], target: number): number[] {
  const map = new Map();

  for (let index = 0; index < nums.length; index++) {
    const i = nums[index];
    const j = target - i;

    if (map.has(j)) {
      return [map.get(j), index];
    }

    map.set(i, index);
  }

  return [];
}
// @lc code=end
