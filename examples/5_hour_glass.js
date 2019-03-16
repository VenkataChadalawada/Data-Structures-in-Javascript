//given arr
/* sum of below positions for every possible element
abc
 e
ghi
*/

function hourglassSum(arr) {
    var res = [];
    var top = 0, middle = 0, bottom = 0;
    for (var i = 0; i < arr.length-2; i++){
        for (var j = 0; j < arr.length - 2; j++){
            top = arr[i][j] + arr[i][j+1] + arr[i][j+2];
            middle = arr[i + 1][j + 1];
            bottom = arr[i+2][j] + arr[i + 2][j + 1] + arr[i + 2][j + 2];
            //console.log(arr[i][j]);
            res.push(top + middle + bottom);
        }
    }
    console.log(res);
    return Math.max(...res);
}
