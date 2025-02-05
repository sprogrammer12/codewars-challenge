// Given an array of integers, find the one that appears an odd number of times.

// There will always be only one integer that appears an odd number of times.

// Examples
// [7] should return 7, because it occurs 1 time (which is odd).
// [0] should return 0, because it occurs 1 time (which is odd).
// [1,1,2] should return 2, because it occurs 1 time (which is odd).
// [0,1,0,1,0] should return 0, because it occurs 3 times (which is odd).
// [1,2,2,3,3,3,4,3,3,3,2,2,1] should return 4, because it appears 1 time (which is odd).

function findOdd(A) {
    //happy coding!
  //   let occurence = {}
    let oddArr = [];
    
  //   A.forEach((num) => {
  //     if (occurence[num] === undefined){
  //       occurence[num] = 1
  //   }
  //     else{
  //       occurence[num] += 1
  //     }
  //   } )
    
      A.forEach((num) => {
        if (oddArr.includes(num)){
          oddArr.splice(oddArr.indexOf(num), 1)
        }
        else{
          oddArr.push(num)
        }
      })
  
    return oddArr[0];
  }
  
//   Examples
  
  findOdd([1,0,1,0,3,4,4]) 
  // return 3
  findOdd([1])
  // return 1
  findOdd([2])
  // return 2
  
  // Loop through array
  
  // Counting how often element appears (Dictionary)
  // Then finding if it is odd
  // return it 

// Changed my approach because I did not know how to loop through dictionary,
// without creating another for loop of the initial array

