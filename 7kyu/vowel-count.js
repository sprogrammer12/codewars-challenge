// Return the number (count) of vowels in the given string.

// We will consider a, e, i, o, u as vowels for this Kata (but not y).

// The input string will only consist of lower case letters and/or spaces.


function getCount(str) {
    const vowels = ['a','e','i','o','u']
    let count = 0
    
    
    
    // Initial method
  //   str.split('').forEach((letter) => {
  //     if (vowels.includes(letter)){
  //       count ++
  
  //     }
  // })
    
//   Alternate Method
    str.split('').filter((x) => {
      if (vowels.includes(x)){
        count++
      }
    })
    
    return count;
  }