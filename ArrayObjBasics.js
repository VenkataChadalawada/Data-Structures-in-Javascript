// Objects
let instructor = {
  fname: "Kelly",
  isInstructor: true,
  favoriteNumbers: [1,2,3,4]
}

// they work well when you:
// dont need order
// when you need faster access
/*
Insertion - O(1)
Removal - O(1)
Searching - O(N)
Access - O(1)
*/

// Object.keys(instrcutor) - O(N)
// Object.values(instructor) - O(N)
// Object.entries - O(N) // [[k,v], [k2,v2]]
// instructor.hasOwnProperty("fname") - O(1)

// Arrays
let names = ['Michael', 'Melissa', 'Andrea']
let values = [true, {}, [], 2, "awes"]


/*
Insertion - depends
Removal - depends
Searching - O(N)
Access - O(1)
*/
/*
push O(1) - arr.push('4')
pop O(1)  - arr.pop()
shift O(N) - arr.shift()
unshift O(N) - arr.unshift('1')
concat O(N) - arr1.concat(arr2)
slice O(N) - arr.slice() ,arr.slice(2), arr.slice(2,5)
splice O(N) - arr.splice(1,0,'Feb')
sort O(N*logN)
forEach/map/filter/reduce - O(N)
*/
