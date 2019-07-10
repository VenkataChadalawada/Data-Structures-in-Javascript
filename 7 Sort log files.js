function renderLogFiles(arr){
  console.log(arr);
  const logArrs = arr.map(l => l.split(' ')); // [[g1, act, car],[zo4, 4, 7] ... ]
  // console.log(logArrs);
  const numbers = '1234567890'.split('');  //[1,2,3,4,5,6,7,8,9,0]
  
  let letters = logArrs.filter(l => !numbers.includes(l[1][0])); // [g1, act, car] -> 'a' (true), [zo4, 4, 7] -> 4 (false), ... filters out those are not nums
  let digits = logArrs.filter(l => numbers.includes(l[1][0])); // [g1, act, car] -> 'a' (false), [zo4, 4, 7] -> 4 (true), ... filters out those are not nums

  letters = sortthem(letters);
  // digits = sortthem(digits); // they want digits to be in same order
 
  // console.log('========= \n',letters);
  // console.log('--------- \n ',digits);
  return [
    ...letters.map(l => l.join(' ')),
    ...digits.map(l => l.join(' '))
    ];
}

function sortthem(arr){
  return arr.map(l => {
    let [lead, ...others] = l; // great way of using rest operator it gets starting from second element into others
    return [lead, others.join(' ')]; // 
  }).sort((a, b) => { // a and b are current and next elements
    if(a[1] < b[1]) {return -1;}
    else if(a[1] >= b[1]) {return 1;}
    // they might say if keys are same then leave it as it is
    /* else if(a[0] === b[0]){
      return 1;
    } */
    return 0;
  });
}

var arr2 = ["a1 9 2 3 1","g1 act car","zo4 4 7","ab1 off key dog","a8 act zoo"]
console.log('------', renderLogFiles(arr2));

/*
var reorderLogFiles = function(logs) {
  const logArrs = logs.map(l => l.split(' '));
  const numbers = '1234567890'.split('');
  let letters = logArrs.filter(l => !numbers.includes(l[1][0]));
  const digits = logArrs.filter(l => numbers.includes(l[1][0]));
  
  letters = letters.map(l => { 
      let [lead, ...others] = l;
      return [lead, others.join(' ')];
    })
    .sort((a,b) => {
      if(a[1] < b[1]) { return -1; }
      if(a[1] >= b[1]) { return 1; } //keep head order
      return 0;
    });
  
  return [
    ...letters.map(l => l.join(' ')),
    ...digits.map(l => l.join(' '))
  ];
};

var arr = [
 "a1 9 2 3 1",
 "g1 act car",
 "zo4 4 7",
 "ab1 off key dog",
 "a8 act zoo"
];
var arr2 = ["a1 9 2 3 1","g1 act car","zo4 4 7","ab1 off key dog","a8 act zoo"]
console.log('------', reorderLogFiles(arr2));
*/
