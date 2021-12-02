/**
 * Direction:
 * Remove duplicated data from array
 * 
 * Expected Result:
 * [1, 2, 3, 4, 5]
 */
const data = [1, 4, 2, 3, 5, 3, 2, 4];

// function result(data) {
  // Your Code Here
  function removeDuplicate(arr) {
    let history = {}
    let output = []
    for(let i = 0; i < arr.length; i++) {
      if(!history.hasOwnProperty(arr[i])) {
        history[arr[i]] = 1
        output.push(arr[i])
      }
    }
    return output
  }
  
  console.log(removeDuplicate([1,2,3,4,4,2,2,3,5]))

// }



// console.log(result(data));
