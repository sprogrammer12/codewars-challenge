// Complete the square sum function so that it squares each number passed into it and then sums the results together.

// For example, for [1, 2, 2] it should return 9 because 


function squareSum(numbers){
    return numbers.reduce((acc,x) => acc + x**2, 0)
}

const squareSum = (numbers) => numbers.reduce((acc,x) => acc + x ** 2 , 0)
  