function rotLeft(a, d) {
    for (var i = 0; i < d; i++){
        var c = a.shift();
        a.push(c);
    }
    return a;
}
