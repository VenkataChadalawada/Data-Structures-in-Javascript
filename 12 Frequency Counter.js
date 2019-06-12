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
