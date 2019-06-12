// Multiple Pointer pattern - Find for sum of two values that sums up in a sorted array and matches with a given key

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

// Multiple Pointer pattern - Replacing feat instead of comparison for few cases - Count Unique Values in sorted array
function countUniqueValues(arr){
    if(arr.length === 0) return 0;
    var i = 0;
    for(var j = 1; j < arr.length; j++){
        if(arr[i] !== arr[j]){
            i++;
            arr[i] = arr[j]
        }
    }
    return i + 1;
}
countUniqueValues([1,2,2,5,7,7,99])
