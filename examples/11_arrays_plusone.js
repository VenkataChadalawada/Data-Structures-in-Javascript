var plusOne = function(digits) {
    /* console.log('===digits===', digits);
    var a = digits.join('');
    console.log('---',a);
    a = Number.parseInt(a)+1; // big string converted into integer getting rounded off
     console.log(a);
    console.log(a.toString().split(''));
    return a.toString().split('');*/
    //bestcode
    for(var i=digits.length-1;i>=0;i--){
        if(digits[i]<9){
            digits[i]++;
            return digits;
        } else {
            digits[i]=0;
        }
    }
    digits.unshift(1);
    return digits;
    
};
