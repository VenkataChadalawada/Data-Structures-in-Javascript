function twoStrings(str1, str2) {
    console.log('--------str1------', str1);
    console.log('-----------str2---', str2);
    var obj1 = {}, obj2 = {};
    for (var i in str1) {
        (!obj1[str1[i]]) ? obj1[str1[i]] = 1 : obj1[str1[i]] += 1;
    }
    for (var i in str2) {
        (!obj2[str2[i]]) ? obj2[str2[i]] = 1 : obj2[str2[i]] += 1;
    }
    console.log('--------obj1------', obj1);
    console.log('-----------obj2---', obj2);
    for (var i in obj1) {
        console.log('========',i, obj2[i]);
        if (obj2[i]) {
            console.log('=====i===', i)
            return "YES";
        }
    }
    return "NO";
}
