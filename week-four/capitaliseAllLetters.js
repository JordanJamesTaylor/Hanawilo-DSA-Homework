/*
    Write a recursive function called capitaliseWords which aacepts an
    array of words then returns a new array with each word capitalised. 

    1. Recursively loop over array
        1a. Remove last element from the array until only one remains

    2. Set element to upper case with .toUpperCase()

    3. Go back through the stack
        3a. Add elements back to the end of the array one by one
        3b. Mutate element with toUpperCase() when adding element
        
    4. Return new array of capitalised words

    Time: O(n)
    Space: o(n)

*/

// *** BRUTE FORCE ***
function bruteForce(words){
    let newArr = [];

    for(let i = 0; i < words.length; i++){
        if(words[i] !== words[i].toUpperCase()){
            newArr.push(words[i].toUpperCase());
        }else{
            newArr.push(words[i]);
        }
    }

    return newArr;
}; 

function capitalisedAllLetters(words){
    if (words.length === 1) return [words[0].toUpperCase()]; // Base Case

    let newArr = capitalisedAllLetters(words.slice(0, -1)); // Remove last word for each recursive call
    newArr.push(words.slice(words.length-1)[0].toUpperCase());  // On way back through stack, .toUpperCase on last element
    
    return newArr;
};

capitalisedAllLetters(['tony', 'kim']);// ['TONY', 'KIM']