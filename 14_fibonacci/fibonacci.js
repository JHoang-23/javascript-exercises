// Create a function that returns a specific member of the Fibonacci sequence:

// > A series of numbers in which each number ( Fibonacci number ) is the sum of the two preceding numbers.
// > In this exercise, the Fibonacci sequence used is 1, 1, 2, 3, 5, 8, etc.
// > To learn more about Fibonacci sequences, go to: https://en.wikipedia.org/wiki/Fibonacci_sequence

const fibonacci = function(fibMember) {
    // if (position < 0){
    //     return "OOPS"
    // }
    // let fibonacciA = (1+Math.sqrt(5))**position
    // let fibonacciB = (1-Math.sqrt(5))**position
    // let bottom = (2**position)*(Math.sqrt(5))

    // return Math.round((fibonacciA - fibonacciB)/bottom)
    let position;
    if (typeof fibMember !== "number") {
        position = parseInt(fibMember)
    }
    else{ 
        position = fibMember
    }

    if (position < 0){
        return "OOPS"
    } 

    position = parseInt(position)
    const fib = [0, 1]
    for (let i = 2; i <= position; i++){
        fib[i] = fib[i-1] + fib[i-2] 
    }

    return fib[position]
};

// Do not edit below this line
module.exports = fibonacci;
