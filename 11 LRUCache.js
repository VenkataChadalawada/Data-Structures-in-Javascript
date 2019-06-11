class LRUcache{
  constructor(capacity){
    this.cache = new Map();
    this.capacity = capacity;
  }
  get(key){
    const val = this.cache.get(key);
    if(val){
      this.cache.delete(key);
      this.cache.set(key, val);
      return val;
    }
    return -1;
  }
  set(key, value){
    if(this.cache.get(key)){
      this.cache.delete(key);
    } else {
      if(this.cache.size === this.capacity){
        this.cache.delete(this.cache.keys().next().value);
      }
    }
    this.cache.set(key, value);
  }
  
}

var l = new LRUcache(3);
l.set('sai', 'software engineer');
l.set('balu', 'medical doctor');
l.set('kittu', 'mechanical engineer');
l.set('durga', 'software engineer');
console.log(l);
l.get('balu');
console.log(l);
