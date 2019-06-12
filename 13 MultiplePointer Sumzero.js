// Multiple Pointer patter - Find for sum of two values that sums up in a sorted array and matches with a given key

function sumZero(arr, key){
  let p1 = 0;
  let p2 = arr.length-1;
  while(p1<p2){
    let res = arr[p1]+arr[p2];
    // console.log(p1, p2);
    if(res===key){
      return true;
    } else if(res>key){
      p2--;
    } else if(res<key){
      p1++;
    }
  }
   return false;
}

console.log(sumZero([-3,-2,-1,0,1,2,4,10], 0));
console.log(sumZero([-3,-2,-1,0], 0));
