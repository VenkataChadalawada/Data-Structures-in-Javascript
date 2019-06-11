class Twitter{
  
  constructor() {
    this.tweets = {};
    this.follows = {};
    this.time = 0;
  }
  
  postTweet(userId, tweetId){
    if(!this.tweets[userId]) { this.tweets[userId] = []; }
    // both cases it should do push
    this.tweets[userId].push([tweetId, this.time++]);
  }
  /* tweets = {
      sai: [[123, 1],[125, 3],[126, 8], [132, 15]],
      ramu: [[124, 2], [131, 13]] 
     } */
  
  following(followerId, followeeId){
    if(!this.follows[followerId]) {
      this.follows[followerId] = {};
    }
    this.follows[followerId][followeeId] = true;
  }
  /* follows = {
      sai: {
        ramu: true,
        ravi: true,
        },
      ramu: {
        somu: true,
      } 
     } */
  
  unfollows(followerId, followeeId){
    if(this.follows[followerId]){
      delete this.follows[followerId].followeeId;
    }
  }
    
  getNewsFeed(userId){
    let feed = new Set();
    // step1 - get own tweets
    let timelyTweets = [... this.tweets[userId]]; // [[123, 1],[125, 3],[126, 8], [132, 15]]
    let follows = this.follows[userId] || {};
    // step2 - get all follwer tweets
    for(let follow in follows){
      timelyTweets.push( ...(this.tweets[follow] || []));
    }
    // step3 - sort them based on time they created for latest
    timelyTweets.sort((a,b) => a[1]-b[1]);// sort based on 1 column which is time
    //step4 - return top 10 for feed
    for(let [id, time] of timelyTweets){
      feed.add(id);
      if(feed.size === 10) {break;}
    }
    
    return [...feed];
  }
}

var t = new Twitter();
t.postTweet('sai', 123);
t.postTweet('ramu', 124);
t.postTweet('sai', 125);
t.postTweet('sai', 127);
t.postTweet('ramu', 132);
t.postTweet('ravi', 139);
t.postTweet('somu', 149);

t.following('sai', 'ramu');
t.following('sai', 'somu');
t.following('sai', 'ravi');
t.getNewsFeed('sai');
console.log(t);
