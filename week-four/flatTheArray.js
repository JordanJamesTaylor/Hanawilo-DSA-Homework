/*
    Write a recursive function called flatTheArray which accepts an array of arrays 
    and returns a new array with all values flattened.
    
    1. Declare a new array (newArr)

    2. Loop through the passed in array
        2a. Check if current index is a single value or an array
        2b. If it's an array recursively call self in concat(). Pass the current array... 
            ...to concat to combine it with newArr. Recursively call self in concat to...
            ...check if the current array is a deep array and repeat the process up to...
            ...this point until it's flattened to create a copy that's one level deep. ...
            ...Finally update newArr to be the returned the flattened array...
        2c. If the curren element isn't an array, add its value to the end of newArr

    3. Return newArr

    Time: O(n²)
    Space: o(n)

*/
 
function flatTheArray(arr){ 
    let newArr = []; // Assignment --> O(1)
    for(let i = 0; i < arr.length; i++){  // Iteration --> O(n)
        if (Array.isArray(arr[i])){ // Comparison --> O(1)
            newArr = newArr.concat(flatTheArray(arr[i])); // Recursion --> O(n)
        } else { 
            newArr.push(arr[i]); // Append to array --> O(1) 
        } 
    }

    return newArr; // Return --> O(1)
};

console.log(flatTheArray([1, 2, 3, [4, 5] ])); // [1, 2, 3, 4, 5] 
console.log(flatTheArray([1, [2, [3, 4], [[5]]]])); // [1, 2, 3, 4, 5] 
console.log(flatTheArray([[1],[2],[3]])); // [1, 2, 3] 
console.log(flatTheArray([[[[1], [[[2]]], [[[[[[[3]]]]]]]]]])); // [1, 2, 3] 