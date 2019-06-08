
class TrieNode{
  constructor(){
    this.R = 26;
    this.links = new Array(this.R);
    this.isEnd = false;
  }
  put(ch){
    this.links[ch.charCodeAt(0)-'a'.charCodeAt(0)] = new TrieNode();
  }
  get(ch){
    return this.links[ch.charCodeAt(0) - 'a'.charCodeAt(0)];
  }
  containsKey(ch){
    return !!this.links[ch.charCodeAt(0) - 'a'.charCodeAt(0)];
  }
  setEnd(){
    this.isEnd = true;
  }
  isWordEnd(){
    return this.isEnd;
  }
  isLast(){
    return !!this.isEnd && this.links.length===0;
  }
}
/*
var t = new TrieNode();
t.put('s', new TrieNode());
console.log('--hi--',t); 
t.isLast();
*/
class Trie{
  constructor(){
    this.root = new TrieNode();
  }
  
  insert(word){
    let node = this.root;
    // console.log('====', node);
    for(let i=0;i<word.length;i++){
      if(!node.containsKey(word[i])) {
         node.put(word[i]);
      }
      node = node.get(word[i]);
    }
    node.setEnd();
  }
  
  searchPrefix(word){
    // it returns if its prefix or full word
    let node = this.root;
    for(let i=0;i<word.length;i++){
      if(node.get(word[i])){
         node = node.get(word[i]);
      }
      else {
        return null;
      }
    }
    return node;
  }
  
  search(word){
    var lnode = this.searchPrefix(word);
    // we have a node returned and it is the end
    return !!lnode && lnode.isWordEnd();
  }
  
  startsWith(word){
    var lnode = this.searchPrefix(word);
    // we have a node returned or not
    return !!lnode;
  }
  
  listAllNodes(){
    var data = [];
        function traverse(node){
            // get the charaecter from links position save it to a string
            // see if it has links do step 1 until it is isLast() then push it to data if it endWord then this chain is done else again do step 1 until another isLast(0 or endWord comes up.
            data.push(node.value);
            if(node.left) traverse(node.left);
            if(node.right) traverse(node.right);
        }
        traverse(this.root);
  }
  
}

var trie = new Trie();
/*
trie.insert('mallika'); 
console.log('---',trie.search('malli'));
console.log('---',trie.search('mallika'));
console.log('---',trie.startsWith('malli'));
console.log('---',trie.startsWith('mallo'));
*/
trie.insert('thor'); 
trie.insert('theanos'); 
trie.insert('the');
console.log('---',trie.search('the'));
