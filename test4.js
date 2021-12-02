/**
 * Direction:
 * Find missing number from the list
 *
 * Expected Result:
 * 8
 */
const numbers = [9, 6, 4, 2, 3, 5, 7, 0, 1];

// function result(numbers) {
//   // Your Code Here
  function findMissingNum(arr) {
    let map = {
      0: 0,
      1: 0,
      2: 0,
      3: 0,
      4: 0,
      5: 0,
      6: 0,
      7: 0,
      8: 0,
      9: 0,
    }
    for(let i = 0; i < arr.length; i++) {
      map[arr[i]]++
    }
  
    for(key in map) {
      if(map[key] == 0) {
        return key
      }
    }
  }
  
  console.log(findMissingNum([1,2,3,4,5,6,7,0,9]))
// }

// console.log(result(numbers));
