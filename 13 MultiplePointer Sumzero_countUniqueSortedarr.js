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

// Multi Pointer Pattern - function takes in two strings and check whether the charecters in the first string form a subsequence of the charecters in the second string with out their order changing but can be discontinuous



function isSubsequence(str1, str2) {
  
  let p1=0, p2=0; //p2 is not useful actually
  for(let i=0; i<str2.length; i++){
    if(str1[p1] === str2[i]){
      p2++;
      p1++;
    } else {
      p2++;
    }
  }
  if(p1===str1.length) {
    return true;
  } else{
  return false
  }
}

console.log(isSubsequence('hello', 'hello world'));
console.log(isSubsequence('sing', 'sting'));
console.log(isSubsequence('hello', 'helli world'));
console.log(isSubsequence('abc', 'abracadabra'));
console.log(isSubsequence('abc', 'acb'));
