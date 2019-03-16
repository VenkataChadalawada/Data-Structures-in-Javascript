function vowelsAndConsonants(s) {
    var vowels = [];
    var consonents = [];
    for (var c of s) {
        if (c === 'a' || c === 'e' || c === 'i' || c === 'o' || c === 'u') {
            vowels.push(c);
        } else {
            consonents.push(c);
        }
    }
    for (var a in vowels) {
        console.log(vowels[a]);
    }
    for (var b in consonents) {
        console.log(consonents[b]);
    }
}

// another way
function vowelsAndConsonants(s) {
    const vowels = 'aeiou';
    var consonants = '';
    
    for(var i = 0; i < s.length; i++) {
       if (vowels.includes(s[i])) {
           console.log(s[i]);
       }
       else {
           consonants += s[i] + '\n';
       }
    }
    
    console.log(consonants.trim());
}
