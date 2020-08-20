//Kata: https://www.codewars.com/kata/5174a4c0f2769dd8b1000003/train/typescript
console.log(solution([1, 2, 10, 50, 5]));

export function solution(nums: number[]): number[] {
  for (let i: number = 0; i < nums.length; i++) {
    if (nums[i] > nums[i + 1]) {
      let temp: number = nums[i];
      nums[i] = nums[i + 1];
      nums[i + 1] = temp;
      i = -1;
    }
  }
  return nums; // your code here
}
