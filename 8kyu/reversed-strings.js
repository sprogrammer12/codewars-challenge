// Complete the solution so that it reverses the string passed into it.

// 'world'  =>  'dlrow'
// 'word'   =>  'drow'

// My Solutions
function solution(str){
  
    //   split string into array
    //   use array method reverse
    //   then join reversed array into string
      return str.split("").reverse().join("") 
      
}

// Arrow notation form
const solution = str => str.split("").reverse().join("")


// Clever Solution
function solution(str){
    let n = ''
    for(i in str){
        n = i + n
    }
    return n
}