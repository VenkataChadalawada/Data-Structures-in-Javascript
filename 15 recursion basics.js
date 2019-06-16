// Recursion

// factorial Iterative

function factorial(num){
  let res = 1;
  for(let i=num;i>0;i--){
    res = res*i;
  }
  return res;
}

console.log(factorial(4));

// factorial recursively

function factorial(num){
  if(num === 1 || num === 0){
    return 1;
  }
  return num*factorial(num-1);
}

console.log(factorial(4));


/* common pitfalls in recursion
1. make sure we have a base case
2. forgetting the return or returning wrong thing
3. Stackoverflow.
*/

// Saving values - Two patterns = Helper method recursion & Pure recursion
// Helper method recursion

function collectOddValues(arr){
  let vals = [];
  function helper(lis){
    if(lis.length === 0){
      return;
    }
    if(lis[0]%2!==0){
      vals.push(lis[0]);
    }
    helper(lis.slice(1));
  }
  helper(arr);
  return vals;
}


/* keep in mind - donot mutate the data
1.For arrays use methods like - slice, concat & spread operator
2.For Strings use methods like - slice, substring to make new copies
3.To make copies of objects use Object.assign or the spread operator
*/

// fibinocci iterative
function fib(num){
  // give me 8th fib number
  let arr = [];
  for(let i=0;i<num;i++){
    if(i===0 || i===1 || i===2) {
      arr.push(i);
    } else {
      arr.push(arr[i-1]+arr[i-2]);
    }
  }
  console.log(arr);
  return arr[num-1];
}

console.log(fib(10)) // 55

// fibinocci recursive

// fib(4) // 3
// fib(10) // 55
// fib(28) // 317811
// fib(35) // 9227465

function fib(num){
  // add whatever parameters you deem necessary - good luck!  
  if(num===0) return 0;
  if(num===1) return 1;
  return fib(num-1)+fib(num-2);
}
