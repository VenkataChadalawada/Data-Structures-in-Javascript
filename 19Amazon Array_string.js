// 1 Two Sum
// approach A
var twoSum = function(nums, target) {
    var obj = new Map();
    nums.map((val, ind) => {
        obj.set(target-val, [val, ind]);
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





