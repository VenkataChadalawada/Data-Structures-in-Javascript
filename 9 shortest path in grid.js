// find route - 1111->9 move only right or down from top left corner if you can hit 9 then 
function findMinRoute(map){
  if (map === null || map.length === 0) {
      return 0;
    }
  const R = map.length; // row length
  const C = map[0].length; //column length
  
  const m = map; // matrix
  
  const sr = 0; // source row
  const sc = 0; // source column
  
  let rq = []; // row queue
  let cq = []; // column queue
  
  let move_count = 0;
  let nodes_left_in_layer = 1;
  let nodes_in_next_layer = 0;
  let reachedEnd = false;
  
  let visited = [];
  for(let i=0;i<R;i++){
    visited.push([]);
    for(let j=0;j<C;j++){
      visited[i].push(false);
    }
  }
  // 
  
  const dr = [-1,+1,0,0] // direction row
  const dc = [0,0,+1,-1] // direction column
  
  rq.push(sr);
  cq.push(sc);
  
  function explore_neighbors(r, c){
    console.log('---r--c--', r, c);
    for(let i=0;i<4;i++){
      let rr = r+dr[i];
      let cc = c+dc[i];
      // skip out of boundary locations
      if(rr < 0 || cc<0 || rr>=R || cc>=C){
        continue;
      }
      //skip visited locations or blocked cells
      if(visited[rr][cc] || m[rr][cc] === 0){
        continue;
      }
      rq.push(rr);
      cq.push(cc);
      visited[rr][cc] = true;
      nodes_in_next_layer++;
    }
  }
  
  //BFS
  visited[sr][sc] = true;
  // console.log('---', visited);
  while(rq.length >0) {
    let r = rq.shift();
    let c = cq.shift();
    // console.log(r,c);
    if(m[r][c] === 9){
      reachedEnd = true;
      break;
    }
    explore_neighbors(r,c);
    nodes_left_in_layer--;
    if(nodes_left_in_layer === 0){
      nodes_left_in_layer = nodes_in_next_layer;
      nodes_in_next_layer = 0;
      move_count++;
    }
  }
  if(reachedEnd){
      return move_count;
    }
  return -1;
  
}

var map = [
  [1,1,0,1,0],
  [1,1,0,0,9],
  [0,1,1,1,1],
  [0,0,0,1,1]
 ]

console.log(findMinRoute(map));
