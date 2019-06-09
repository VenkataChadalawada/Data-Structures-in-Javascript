function renderLogFiles(arr){
  console.log(arr);
  const logArrs = arr.map(l => l.split(' '));
  // console.log(logArrs);
  const numbers = '1234567890'.split('');
  
  let letters = logArrs.filter(l => !numbers.includes(l[1][0]));
  let digits = logArrs.filter(l => numbers.includes(l[1][0]));

  letters = sortthem(letters);
  digits = sortthem(digits);
  
  letters = letters.map(letter => letter[0]+' '+letter[1]);
  digits = digits.map(digit => digit[0]+' '+digit[1]);
  
  // console.log('========= \n',letters);
  // console.log('--------- \n ',digits);
  return [
    ...letters, ...digits
    ];
}

function sortthem(arr){
  return arr.map(l => {
    let [lead, ...others] = l;
    return [lead, others.join(' ')];
  }).sort((a, b) => {
    if(a[1] < b[1]) {return -1}
    if(a[1] >= b[1]) {return 1;}
    return 0;
  });
}

var arr = [
 "a1 9 2 3 1",
 "g1 act car",
 "zo4 4 7",
 "ab1 off key dog",
 "a8 act zoo"
];

console.log('------', renderLogFiles(arr));
