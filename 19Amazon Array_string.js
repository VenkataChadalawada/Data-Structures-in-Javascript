// 1 Two Sum
// approach A
var twoSum = function(nums, target) {
    var obj = new Map();
    nums.map((val, ind) => {
        obj.set(target-val, [val, ind]); // SECRET
    });
    // console.log('---obj---', obj);
   
    
     for(var i=0; i<nums.length; i++){
         //console.log('---------', i!== obj[nums[i][1]], obj[nums[i][1]]);
        if(obj.has(nums[i]) && i!== obj.get(nums[i])[1]){
            // console.log('======', [i, obj.get(nums[i])[1]])
            return [i, obj.get(nums[i])[1]];
        }
    }
};
// Approach B
/*
var twoSum = function(nums, target) {
    if (nums.length === 2) return [0, 1];
    const len = nums.length;
    let map = {};
    for(let i = 0; i < len; i++) {
        let n = target - nums[i];
        let find = map[n];
        if(find !== undefined) return [find, i];
        else map[nums[i]] = i;
    }
};
*/

// console.log(TwoSum([2,7,11,15],9))
console.log(TwoSum([0,4,3,0],0))
// approach is making obejct that matches to expected element as key and the element & its position as value array
/*
---obj--- Map { 0 => [ 0, 3 ], -4 => [ 4, 1 ], -3 => [ 3, 2 ] }
*/

// 2 Longest Substring Without Repeating Characters
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
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let seen = {};
    let longest = 0;
    let start = 0;
    for(var i=0;i<s.length;i++){
        let char = s[i];
        if(seen[char]){
            start = Math.max(start, seen[char]);
        }
        longest = Math.max(longest, i-start+1); // SECRET
        seen[char] = i+1;            
    }
    return longest;
};


// 3 atoi

function atoi(str){
   let index = 0, sign = 1, total = 0;
    //1. Empty string
    if(str.length === 0) return 0;

    //2. Remove Spaces
    while(str.charAt(index) == ' ' && index < str.length){
        index ++;
    }
    //3. Handle signs
    if(str.charAt(index) == '+' || str.charAt(index) == '-'){
        sign = str.charAt(index) == '+' ? 1 : -1;
        index ++;
    }
    
    //4. Convert number and avoid overflow
    while(index < str.length){
        let digit = str.charAt(index) - '0'; // to get number from character
        if(digit < 0 || digit > 9 || !digit){
          break;
        }
        //check if total will be overflow after 10 times and add digit
        if(Number.MAX_VALUE/10 < total || Number.MAX_VALUE/10 == total && Number.MAX_VALUE %10 < digit){
            return sign == 1 ? Number.MAX_VALUE : Number.MIN_VALUE;
        }

        total = 10 * total + digit;
        index ++;
    }
    return total * sign;
}

console.log(atoi("42"));
console.log(atoi("   -42"));
console.log(atoi("4193 with words"));
console.log(atoi("words and 987"));
console.log(atoi("-91283472332"));


