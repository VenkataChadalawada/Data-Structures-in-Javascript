var pivotIndex = function(nums) {
    var left = 0, right=0;
    nums.map((a,i) => {
        console.log(a, i);
        right+=a;
    });
    for(var i in nums) {
        if(Number.parseInt(i)!==0){
            left+=nums[i-1];
        }
        right-=nums[i];
        if(left ===right) { return i;} 
    };
    return -1;
};
