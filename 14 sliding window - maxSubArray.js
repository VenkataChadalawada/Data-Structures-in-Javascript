function maxSubArraySum(arr, num){
  let maxSum = 0; let tempSum = 0;
  if(num>arr.length) return null;
  for(let i=0;i<num;i++){
    maxSum+=arr[i];
  }
  // console.log(sum);
  tempSum = maxSum;
  for(let j=num;j<arr.length;j++){
    // each time substract jth position value & add j+num-1th position value
    tempSum = tempSum+arr[j]-arr[j-num];
    maxSum = Math.max(tempSum, maxSum);
    //console.log(maxSum);
  }
  return maxSum;
}

console.log(maxSubArraySum([2,6,9,2,1,8,5,6,3], 4));
