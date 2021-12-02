/**
 * Direction:
 * Find prefix of the word from array of string
 *
 * Expected Result:
 * fl
 */
const words = ['flower', 'flow', 'flight'];
var helper = function(input1,input2){
  let result = ""
  let pointer = 0
  while(input1[pointer] && input2[pointer]){
      if(input1[pointer] == input2[pointer]){
          result += input1[pointer]

      }else{
          return result
      }   
       pointer ++
  }
  return result
}

var longestCommonPrefix = function(strs) {
  if(strs.length === 1)return strs[0]
  let pointer = 0
  let result = helper(strs[pointer],strs[pointer+1])
  pointer ++
  while(pointer < strs.length-1){
      const output = helper(strs[pointer],strs[pointer+1])
      if(output <= result) result = output
      pointer ++
  }
  return result
};

// function result(words) {
//   // Your Code Here
    

// }

// console.log(result(words));

