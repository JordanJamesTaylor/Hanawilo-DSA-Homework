/*
    Write a function factorial which accepts a number 
    and returns the factorial of that number. 
    
    A factorial is the product of an integer and all the integers below it.
    
    1. Recursively call self
        1a. Multiple current num with result of the previous num factorial
        1b. If num is 0 or 1, return 1
        1c. Move back through the stack, multiplying as we go

    2. Return factorial

    Time: O(n)
    Space: O(n)

*/

function getFactorial(num){ 
    if(num === 0 || num === 1) return 1;

    let factorial = num * getFactorial(num-1);

    return factorial;
};

console.log(getFactorial(1)); // 1
console.log(getFactorial(2)); // 2
console.log(getFactorial(7)); // 5040