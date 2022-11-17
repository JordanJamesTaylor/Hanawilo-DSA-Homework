/*
    Problem One: In 3 - 4 sentences, please explain what Big O Notation is.

    Answer: Big O Notation is a way for software engineers to determine the efficiency of their code in terms of the total amount of space and time a given algorithm takes to execute. There are varying levels of Big O, and developers typically aim for either a Big O of constant, logarithmic, or linear complexity, while attempting to avoid complexities of quadratic and factorial (although they’re often forced to settle with quadratic). The Big O of an algorithm can be determined by the amount of operations executed, the amount of loops (and if we’re iterating over every element in a data set, or skipping some), as well as the total size of the data the algorithm is working with/storing.

    Big O always measures the WORST CASE scenario of the growth of the algorithm.
*/

/*
    Problem Two: For each of the time complexities:
        1. Name the complexity
        2. Rank from 1 - 5 (1 being best, 5 being worst)
        3. Describe in 1 - 2 sentences the complexity
        4. Provide a code example of how the complexity works

    O(1)
    Name: Constant
    Rank: 1
    Description: Represents the Big O of a single operation.
*/
// O(1) Example:
let numbers = [1, 2, 3, 4];
numbers[1]; 

/*
    O(log n)
    Name: Logarithmic
    Rank: 2
    Description: Represent Big O when running an algorithm proportional to the logarithm of the input, such as iterating over an array by every second index, rather than every individual index.
*/
// O(log n) Example:
function showSomeNumbers(arr){
    for(let i = 0; i < arr.length; i += 2){
        console.log(arr[i]);
    }
};

showSomeNumbers(numbers);

/*
    O(n)
    Name: Linear
    Rank: 3
    Description: Represent Big O when the time it takes to execute an algorithm is directly proportional to the size of the input it’s working with.
*/
// O(n) Example:
function showAllNumbers(arr){
    for(let i = 0; i < arr.length; i++){
        console.log(arr[i]);
    }
}

showAllNumbers(numbers);

/*
    O(n²)
    Name: Quadratic
    Rank: 4
    Description: Representing the Big O of an algorithm when its execution is proportional to the square of the size of the input, such as a nested loop.
*/
// O(n²) Example:
let stringNumbers = ["1", "4"];

function compareNumbers(arr1, arr2){
    for(let i = 0; i < arr1.length; i++){
        for(let j = 0; j < arr2.length; j++){
            if(arr1[i] == arr2[j]) {
                console.log("Found matching pair: " + arr1[i] + " and " + arr2[j])
            }
        }
    }
};

compareNumbers(numbers, stringNumbers);

/*
    O(n!)
    Name: Factorial
    Rank: 5
    Description: Represents the Big O of an algorithm with an execution proportional to a factorial of the input. This is considered a worst case scenario and must be avoided.
*/
// O(n!) Example:
function factorialise(num){ // Helper function
    if (num < 0) return -1;
      
    if (num == 0){
        return 1;
    }else{
        return (num * factorialise(num - 1));
    }
};

function badFn(num){ // O(n!) function
    for(let i = 0; i <= factorialise(num); i++){
        badFn(num-1);
    }
};

badFn(5); // Runs 120 times

/*
    Problem Three: Name 3 reasons why we care about Big O and code performance.

    Answer: Big O represents the total time and space it takes to execute any given algorithm. Software engineers need to be aware of the efficiency of their code so that it can account for things like scalability and speed. A company building a new social media app wants it to potentially be used by millions of user at any given time across the entire planet, so the code not only needs to run at a consistently smooth speed (customers won’t use a slow app), it also must be capable of handling an immense amount of operations (such as API calls - Twitter makes ~70,000 API calls a second). 
*/

/*
    Problem Four: What is the problem of using a time method such as performance.now() to measure how fast code runs on our machine.

    Answer: performance.now() replies on computer hardware to determine the speed of execution for any given algorithm. As hardware varies wildly between machines, it really only tells you how fast that algorithm took to execute on that specific piece of hardware. This is why we use Big O as a more accurate measure of performance. 
*/

/*  
    Problem Five: Given the following piece of code:
        1. Explain what the TOTAL time complexity is
        2. Explain what the CONSOLIDATED time complexity is
*/

// Total Time: 1 + n + n + n²
// Consolidated Time: O(n²) --> Quadratic  
function someFn1(arr){ 
    arr.push(1).pop(); // O(1) --> Constant

    for(let i = 0; i < arr.length; i++){ // O(n) --> Linear
        console.log('Do something 2');
    }
    
    for(let i = 0; i < arr.length; i++){ // O(n) --> Linear
        console.log('Do something 3');
    }

    for(let i = 0; i < arr.length; i++){ // O(n²) --> Quadratic    
        for(let j = 0; j < arr.length; j++){
            console.log('Do something 4');
        }
    }
};

// Total Time: 1 + n + n^3
// Consolidated Time: O(n^3) --> Cubic (due to nested loop) 
function someFn2(arr){
    let sum = arr[1] + arr[2]; // O(1) --> Constant

    while(condition){ // O(n) --> Linear
        sum = arr[5] + arr[7]
    }

    for(let i = 0; i < arr.length; i++){ // O(n^3) --> Cubic
        for(let i = 0; i < arr.length; i++){
            for(let i = 0; i < arr.length; i++){
                console.log("do something 3");
            }    
        }
    }
};

/*
    Problem Seven: Please explain in 3-5 sentences why we can ignore constants and consolidate our time complexities.

    Answer: Big O is not intended to be a wholly accurate representation of a given code's performance, rather it accounts for the worst case scenarios as it applies to its long-term growth. Using constants only influences its growth rate by a constant amount, so linear functions still grow linearly, logarithmic functions still grow logarithmically, etc. Since these categories aren't affected by constants, it doesn't matter that we drop the constants as their represented growth is negligible, so we only measure the highest order term (the fastest growing one). The constant can also change as a result of the hardware the algorithm is running on, and we then run into the same problem we have with performance.now().
*/

/*
    Problem Eight: In 1 - 2 sentences, please explain what space complexity is and why we care.

    Answer: Space complex denotes the total amount of space required to run any given algorithm, which will be the ultimate restriction of what type of function a developer can implement. Some counting algorithms employ a methodology called memoization, where visited nodes are tracked in a visited object so that they do not need to be visited again; this will cut down on the time complexity, but with each addition to the visited object the total space required to run the algorithm increases. A developer must ensure that the code they write is within the bounds of the total memory available to them
*/

/*
    Problem Nine: Given the following data types, what is space complexity is for each one:

    O(1) --> Constant Types:
        Boolean
        Undefined
        Null
        Numbers

    O(n) --> Linear Types:
        String
        Array
        Object
*/

/*
    Problem Ten: Give two reasons when to use an array and when to use an object.

    Objects --> when you want to check if a value exists within without know where it is a.k.a. search by key
    Objects --> when adding/removing values without knowing where it is within the object
    
    Arrays --> when accessing an element by an index
    Arrays --> when removing an element by an index

    In this regard, we should use objects to store and retrieve data if we do not care about where it is stored. If we want to remove/access an element by an specific index, then we use an array.
*/

/*
    Problem Eleve: Give the following object methods, label what the time complexity is for each one.
*/
const obj = { // Assignment, O(1) --> Constant
    name: "Tony",
};

obj.age = 44; // Insertion, O(1) --> Constant

delete obj.age; // Deletion, O(1) --> Constant

obj.hasOwnProperty['name'] // Key look up, O(1) --> Constant

for(const prop in obj){ // Iteration, O(n) --> Linear
    console.log(obj[prop]);
};

obj.age; // Key look up, O(1) --> Constant

Object.keys(obj); // Iteration, O(n) --> Linear

Object.values(obj); // Iteration, O(n) --> Linear

/*
    Problem Twelve: Given the following array methods, label what time time complexity is for each one:
*/

const array = [1, 2, 3, 4, 5, 6, 7];

array.push(8) // Appending, O(1) --> Constant

array.unshift(0) // Adding to start, O(n)(need to update indices of all the other elements) --> Linear

array.pop() // Remove element from end of array, O(1) (don't need to update indices of the other any elements) --> Constant

array.shift() // Remove from start, O(n) (need to update indices of all remaining elements) --> Linear

const findNumber = array.find(num => num === 2); // Iteration & comparison, O(n) --> Linear

// Comparison & iteration, O(n) --> Linear
for(let i = o; i < array.length; i++){ // O(n)     
    if(array[i] === 2){ // O(1)
        return array[i];
    }
};

const getNumber = array[3]; // Look up by index, O(1) --> Constant

const double = array.map(num => num * 2); // Iteration & multiplication, O(n) --> Linear

// Insertion & deletion, O(n) (need to update indices of n elements base on where the new element was inserted) --> Linear
const removeAndAddNewNumber = array.splice(1, 1, 5); // O(n)

// Iteration & addition (reduce always goes through the entire array), O(n) --> Linear
const getSum = array.reduce((total, num) => total + num, 0); // O(n)

// Iteration & multiplication, O(n) --> Linear
for(const num of nums){ 
    console.log(num * 2);
};

const convertToString = array.join(' '); // Iteration, O(n) --> Linear

const reversed = array.reverse(); // Iteration, O(n) --> Linear

/*
    Problem Thirteen: For each one of these code clocks, please identify and explain the time and space complexity. 
*/

// Time: iterating over the entire array --> O(n)
// Space: dependant on how many elements match the comparison --> O(n)
function findFirstIndexOfNumber(number, array){
    
    for(let i = o; i < array.length; i++){ // Iteration --> O(n)
        if(array[i] === number){ // Comparison --> O(1)
            return i; // Retrun --> O(1)
        }
    }

    return -1 // Return --> O(1)
};

// Time: iterating over the entire array --> O(n)
// Space: dependant on how many elements match the comparison --> O(n)
function findEachIndexOfNumber(number, array){
    let arrayOfIndexes = []; // Assignment --> O(1)

    array.forEach(function(element, index){ // Iteration --> O(n)
        if(element === number){ // Comparison --> O(1)
            arrayOfIndexes.push(index); // Appending --> O(1)
        }
    });

    return arrayOfIndexes; // Return --> O(1)
};

const array2 = [36, 14, 1, 7, 21]; // Assignment --> O(1)

// Time: looking up an element in an array via it's index --> O(1)
// Space: just the return value is added to memory --> O(1)
function highOrLower(array){
    
    if(array[array.length-1] > array[0]){ // Look up by index and comparison --> O(1)
        return "Higher!"; // Return --> O(1)
    }else if(array[array.length-1] < array[0]){ // Look up by index and comparison --> O(1)
        return "Lower!" // Retrun --> O(1)
    }else{
        return "Neither." // Return --> O(1)
    }

}

const array3 = [1, 2, 3, 4, 5, 6, 7, 8]; // Assignment --> O(1)

// Time: iterating over the entire array --> O(n)
// Space: dictated by the size of the array --> O(n)
function determineSumOfSequentialArray(array){
    let sum = 0; // Assignment --> O(1)

    for(let i = 0; i < array.length; i++){ // Iteration --> O(n)
        sum += array[i]; // Addition --> O(1)
    };

    return sum; //Return --> O(1)
};

// Time: the one operation performed in the return. Dropping the constants --> O(1)
// Space: only the return value is added to memory --> O(1)
function determineSumOfSequentialArray(array){
    return array.length * (array.length + 1) / 2; // Three singular operations, drop constants --> O(1)
};

// Time: comes from recursive calls --> O(n)
// Space: dictated by the number of recursive calls --> O(n)
function searchSortedArray(number, array, beginIndex = 0, endIndex = array.length-1){
    let middleIndex = Math.floor((beginIndex + endIndex) / 2); // Three singular operations, drop constants --> O(1)

    if(array[middleIndex] === number){ // Comparison --> O(1)
        return middleIndex; // Return --> O(1)
    }else if(beginIndex >= endIndex){ // Comparison --> O(1)
        return -1; // Return --> O(!)
    }else if(array[middleIndex] < number){ // Comparison --> O(1)
        beginIndex = middleIndex + 1; // Assignment & addition, drop constants --> O(1) 
        return recursiveBinarySearch(number, array, beginIndex, endIndex); // Recursion --> O(n)
    }else if(arr[middleIndex] > number){ // Comparison --> O(1)
        endIndex = middleIndex - 1; // Assignment & subtraction, drop constants --> O(1)
        return recursiveBinarySearch(number, array, beginIndex, endIndex); // Recursion --> O(n)
    }
};

const array4 = [3 ,7, 9, 12, 15, 18, 32]; // Assignment --> O(1)
const array5 = [3, 3, 7, 41, 76];  // Assignment --> O(1)

// Time: iteration over a nested loop --> O(n²)
// Space: dictate by size of the returned array --> O(n)
function compareArrays(arr1, arr2){
    let arrayOfPairs = []; // Assignment --> O(1)

    arr1.forEach(function(e, i){ // Nested iteration --> O(n²)
        arr2.forEach(function(e2, i2){
            if(e === e2){ // Comparison --> O(1)
                arrayOfPairs.push([i, i2]) // Append to array --> O(1)
            }
        });
    });

    return arrayOfPairs; // Return --> O(1)
};

// Time: nested loops --> O(n²)
// Space: dictated by the size of the array --> O(n)
function sortByVlue(array){
    
    function swap(array, index1, index2){
        let temporaryValue = array[index1] // Assignment --> O(1)
        array[index1] = array[index2]; // Assignment --> O(1)
        array[index2] = temporaryValue // Assignment --> O(1)
    }

    let count = 1; // Assignment --> O(1)
    
    while(count < array.length){ // Iteration --> O(n)
        let swapCount = 0; // Assignment --> O(1)

        for(let i = 0; i < array.length - count; i++){ // Iteration --> O(n)
            if(array[i] > array[i+1]){ // Comparison --> O(1)
                swap(array, i, i+1) // Time complexity of this function is O(1)
                swapCount++; // Addition --> O(1)
            }
        }

        count++ // Addition --> O(1)
    }

    return array; // Return --> O(1)
};