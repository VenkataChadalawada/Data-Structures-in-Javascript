 /* has a string, , of lowercase English letters that she repeated infinitely many times.

Given an integer, , find and print the number of letter a's in the first  letters of Lilah's infinite string.

For example, if the string  and , the substring we consider is , the first  characters of her infinite string. There are  occurrences of a in the substring.
*/
// Complete the repeatedString function below.
function repeatedString(s, n) {
    var remaining = 0;
    var c = 0;
    var ntimes = 0;
    var finalString = '';
    var rem = '';
    // console.log(s)
    for (var i of s) {
        if (i === 'a') c += 1;
    }
    // c tells how many a's in the given string
    ntimes = Math.floor(n / s.length);
    c = c * ntimes; // incremented c to find out for those many times
    remaining = n % s.length;
    rem = s.slice(0, remaining)
    
    for (var i of rem) {
        if (i === 'a') c += 1;
    }
    console.log('---------r', c);
    return c;
}
