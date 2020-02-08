// Frequency Counter patter - Find for each value in arr1 has corresponding square in arr2

function same(arr1, arr2){
  let obj1 = {}, obj2= {};
  if(arr1.length!=arr2.length) {return false;}
  
  arr1.map((a)=>{
    if(!obj1[a]) {obj1[a] = 1;} else {obj1[a]++;}
  });
  console.log(obj1);
  
  arr2.map((a)=>{
     if(!obj2[a]) {obj2[a] = 1;} else {obj2[a]++;}
  });
   console.log(obj2);
  
  for(let key in obj1){
    let res = key*key;
    console.log(obj2[res], );
    if(!obj2[res] || obj2[res]!==obj1[key]){
      return false;
    } 
  }
  return true;
}

console.log(same([1,2,1], [4,4,1]));
console.log(same([1,2,1], [4,1,1]));

// 2. Anagram

/*
validAnagram('', '') //true
validAnagram('aaz', 'zza') //true
validAnagram('anagram', 'nagaram') //true
validAnagram('rat', 'car') //true
validAnagram('awesome', 'awesom') //true
validAnagram('qwerty', 'qeywrt') //true
validAnagram('cinema', 'iceman') //true
validAnagram('textwissttime', 'timetwisttext') //true
*/
function createObj(w){
  let obj = {};
  for(let i of w){
    if(!obj[i]){
      obj[i] = 1;
    } else {
       obj[i]++;
    }
  }
  return obj;
}

function validAnagram(w1, w2) {
  const obj1 = createObj(w1);
  const obj2 = createObj(w2);
  // 1. their lengths must be same
  if(Object.keys(obj1).length !==Object.keys(obj2).length){
    return false;
  }
  // all keys in first should have all values in second 
  for(let i in obj1){
    if(obj1[i] !== obj2[i]){
      return false;
    }
  }
  
  return true;
}

console.log(validAnagram('cinema', 'iceman')) // true
