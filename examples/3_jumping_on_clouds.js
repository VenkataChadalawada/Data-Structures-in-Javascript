// She can jump on any cumulus cloud having a number that is equal to the number of the current cloud plus  or . She must avoid the thunderheads. Determine the minimum number of jumps it will take Emma to jump from her starting postion to the last cloud. It is always possible to win the game.
/*
Emma will get an array of clouds numbered  if they are safe or  if they must be avoided. For example,  indexed from . The number on each cloud is its index in the list so she must avoid the clouds at indexes  and . She could follow the following two paths:  or . The first path takes  jumps while the second takes .
Complete the jumpingOnClouds function in the editor below. It should return the minimum number of jumps required, as an integer.

jumpingOnClouds has the following parameter(s):

c: an array of binary integers
*/
// Complete the jumpingOnClouds function below.
function jumpingOnClouds(c) {
    
    var i = 0;
    var jump = -1;
    if (c.length <= 2) {
        return 1;
    }
    while (i < c.length) {
        //!(c[i + 1]) || !(c[i + 2]) || 
        if ((c[i + 1] === 0 && c[i + 2] === 0)) {
            i += 2;
        } else if (c[i + 1] === 1) {
            i += 2;
        } else {
            i += 1;
        } console.log('---p----', i);
        jump += 1;
    }
    console.log('------jump--', jump);
    return jump;
}
