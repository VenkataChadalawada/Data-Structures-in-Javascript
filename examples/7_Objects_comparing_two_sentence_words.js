// Complete the checkMagazine function below.
function checkMagazine(magazine, note) {
    var obj1 = {};
    if (magazine.length < note.length) {
        return "NO";
    }
    for (var i in note) {
        obj1[note[i]] = 1;
    }
    for (var j in magazine) {
        if (obj1.hasOwnProperty(magazine[j])) {
            delete obj1[magazine[j]];
        }
    }
    return (Object.keys(obj1).length === 0) ? 'Yes' : 'No';
}
