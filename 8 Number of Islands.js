/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function (map){
  if (map === null || map.length === 0) {
      return 0;
    }

  let count = 0;
  for(let i=0;i<map.length;i++){
    for(let j=0; j<map[i].length;j++){
      // console.log('----each----', map[i][j]);
      if (Number(map[i][j]) === 1) {
        count+=1;
        dfs(map, i, j);
      }
    }
  }
  return count;
}
function dfs(map, i, j){
  const nr = map.length;
  const nc = map[0].length;

    if (i < 0 || j < 0 || i >= nr || j >= nc || Number(map[i][j]) === 0) {
      return;
    }
    map[i][j] = 0 // since we visited and counted just make it to avoid unnecessary visited object to remember
    dfs(map, i - 1, j);
    dfs(map, i + 1, j);
    dfs(map, i, j - 1);
    dfs(map, i, j + 1);

}
/*
var map = [
  [1,1,0,0,0],
  [1,1,0,0,0],
  [0,0,1,0,0],
  [0,0,0,1,1]
 ]

console.log(findIslands(map));
*/
