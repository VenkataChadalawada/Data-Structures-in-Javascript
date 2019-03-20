/**
 * @param {number[]} nums
 * @return {number}
 */
var dominantIndex = function(nums) {
    var pos=0,max=0;
    var flag = false;
    
    nums.map((a,i)=>{
        if(a>max) {
            max=a;
            pos=i;
        }
    });
    
    // console.log('---max--', max, pos);
    for(var i in nums){
        if((2*nums[i])>max && i!=pos){
            console.log('--nums[i] & i---', nums[i],i,pos);
            flag=true;
        }
    }
    // console.log(pos);
    return (!flag)?pos:-1;
    
};
