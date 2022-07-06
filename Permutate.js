// approach 1 easier 
let str = 'let';
let permutation = (str, result) => {
  if(str.length === 0){
    console.log(result);
  }
  for(let i=0;i<str.length;i++){
    let rest = str.slice(0,i)+str.slice(i+1);
    permutation(rest, result+str);
  }
}
permutation(str, '');


// approach 2 
function getPerms(str){
  function permutate(str){
    console.log('=====', str);
    if(str.length === 1){
      return [str];
    } else if(str.length === 2){
      var arr = [];
      arr.push(str);
      arr.push(str[1]+str[0]);
      return arr;
    } else {
      var permutations = [];
      var size = str.length;
      var lchar = str[size-1]; // p4
      var remain = str.slice(0, size-1); //p1p2p3
      // console.log('==',lchar, remain);
      var word = permutate(remain); //p1p2p3 
      // console.log('yo--', word);
      for(var i=0;i<word.length;i++){
        // console.log('**--',word[i]);
        var eachword = word[i];
        for(var j=0;j<eachword.length+1;j++){
          var output = [word[i].slice(0, j), lchar, word[i].slice(j)].join('');
          permutations.push(output);
        }
      }
      return permutations;
    }
  }
  
  return permutate(str);
}


console.log('======================', getPerms('abcde'));
