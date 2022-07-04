// 1. maxSubArray Solution
/*
Given an array of integers and a number, write a function called maxSubarraySum , which finds the maximum sum of a subarray with the length of the number passed to the function. 
*/
function maxSubArraySum(arr, num){
    if (arr.length < num) return null;
 
    let total = 0;
    for (let i=0; i<num; i++){
       total += arr[i];
    }
    let currentTotal = total;
    for (let i = num; i < arr.length; i++) {
       currentTotal += arr[i] - arr[i-num];
       total = Math.max(total, currentTotal);
    }
    return total;
}

console.log(maxSubArraySum([2,6,9,2,1,8,5,6,3], 4)); //22

console.log(maxSubArraySum([100,200,300,400], 2)); //700

console.log(maxSubArraySum([1,4,2,10,23,3,1,0,20], 4)); // 39

console.log(maxSubArraySum([2,3], 3)); // null

console.log(maxSubArraySum([3,-2,7,-4,1,-1,4,-2,1], 2)); // 5


/*
Write a function called minSubArrayLen  which accepts two parameters - an array of positive integers and a positive integer. 
This function should return the minimal length of a contiguous subarray of which the sum is greater or equal to the integer passed to the function. If there isn't one, return 0 instead.
*/
// Example
/*
[2,3,1,1,-1,6,4,3,8], k=7
 2,3,1,1 = 7
     1,1,-1,6 = 7
              4,3 = 7

*/

// 2. minSubArrayLen Solution
function minSubArrayLen(nums, sum) {
  let total = 0;
  let start = 0;
  let end = 0;
  let minLen = Infinity;
 
  while (start < nums.length) {
    // if current window doesn't add up to the given sum then 
		// move the window to right
    if(total < sum && end < nums.length){
      total += nums[end];
			end++;
    }
    // if current window adds up to at least the sum given then
		// we can shrink the window 
    else if(total >= sum){
      minLen = Math.min(minLen, end-start);
			total -= nums[start];
			start++;
    } 
    // current total less than required total but we reach the end, need this or else we'll be in an infinite loop 
    else {
      break;
    }
  }
 
  return minLen === Infinity ? 0 : minLen;
}
/*
console.log(minSubArrayLen([2,3,1,2,4,3], 7)); // 2 -> [4,3] is the smallest subarray

console.log(minSubArrayLen([2,1,6,5,4], 9)); // 2 -> [5,4]

console.log(minSubArrayLen([3,1,7,11,2,9,8,21, 62,33,19], 52)); // 1 [62] > 52

console.log(minSubArrayLen([1,4,16,22,5,7,8,9,10], 39)); // 3

console.log(minSubArrayLen([1,4,16,22,5,7,8,9,10], 55)); // 5

console.log(minSubArrayLen([1,4,16,22,5,7,8,9,10], 95)); // 5
*/



//  findLongestSubstring Solution -  Longest Substring Without Repeating Characters
/*
Input: "abcabcbb"
Output: 3 
Explanation: The answer is "abc", with the length of 3. 
Input: "bbbbb"
Output: 1
Explanation: The answer is "b", with the length of 1.
Input: "pwwkew"
Output: 3
Explanation: The answer is "wke", with the length of 3. 
             Note that the answer must be a substring, "pwke" is a subsequence and not a substring.
             
*/
function findLongestSubstring(str) {
  let longest = 0;
  let seen = {};
  let start = 0;
 
  for (let i = 0; i < str.length; i++) {
    let char = str[i];
    if (seen[char]) {
      start = Math.max(start, seen[char]);
    }
    // index - beginning of substring + 1 (to include current in count)
    longest = Math.max(longest, i - start + 1);
    // store the index of the next char so as to not double count
    seen[char] = i + 1;
  }
  return longest;
}
