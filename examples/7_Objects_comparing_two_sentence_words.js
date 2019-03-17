function checkMagazine(magazine, note) {
    console.log('---magazine---', magazine);
    console.log('---note---', note);
    var noteObj = {}, magObj = {};
    if (magazine.length < note.length) {
        return "No";
    }
    for (var i in note) {
        (noteObj[note[i]]) ? noteObj[note[i]]
            += 1 : noteObj[note[i]] = 1;
    }
    for (var j in magazine) {
        (magObj[magazine[j]]) ? magObj[magazine[j]]
            += 1 : magObj[magazine[j]] = 1;
    }
    console.log('---magObj---', magObj);
    console.log('---noteObj---', noteObj);
    for (var j in noteObj) {
        // key in notes there is key in magazine
        if (magObj[j]) {
            noteObj[j]-=1;
            magObj[j]-=1;
        }
    }
    console.log('---magObj---', magObj);
    console.log('---noteObj---', noteObj);
    for (var j in noteObj) {
        if (noteObj[j] > 0) {
            return "No"
        }
    }
    return 'Yes';
}

//checkMagazine([ 'give', 'me', 'one', 'grand', 'today', 'night' ], [ 'give', 'one', 'grand', 'today' ]);
/*
X = "o l x imjaw bee khmla v o v o imjaw l khmla imjaw x";
Y = "imjaw l khmla x imjaw o l l o khmla v bee o o imjaw imjaw o";
checkMagazine(X1.split(" "), Y1.split(" "));


X1 = "apgo clm w lxkvg mwz elo bg elo lxkvg elo apgo apgo w elo bg";
Y1 = "elo lxkvg bg mwz clm w";


X2 = "o l x imjaw bee khmla v o v o imjaw l khmla imjaw x";
Y2 = "imjaw l khmla x imjaw o l l o khmla v bee o o imjaw imjaw o";
*/
