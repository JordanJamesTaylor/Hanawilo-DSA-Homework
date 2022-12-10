/*
    Write a function which accepts an object and returns an array 
    of all the values in the object that have a typeof string 

    1. Create an empty array to be returned and an empty temp array
    
    2. Iterate over object
        2a. If value is type string, append to array to be returned
        2b. If value is of type object, call self again
        
    3. Check for nested array
        3a. If array is nested call flatten array helper function

    4. Return flat array of all string values from the object

    Time: O(n)
    Space: O(n)
*/

const obj = {
    firstName: "John",
    lastName: "Doe",
    age: 30,
    numOfChildren: 2,
    numOfPets: 1,
    favouriteMovie: "Citizen Kain",
    favouriteSong: "Bohemian rhapsody",
    address: {
        street: "Main Street",
        apartment: 201,
        city: "New York",
        state: "NY",
    },
    married: false,
};

function bruteForce(obj){
    
    let strArr = [];

    for(const prop in obj){
        if(typeof obj[prop] === "string") strArr.push(obj[prop])
    };

    return strArr;
};

// Helper function
function flatTheArray(arr){ // O(n)
    let newArr = []; 

    for(let i = 0; i < arr.length; i++){
        if (Array.isArray(arr[i])){
            newArr = newArr.concat(flatTheArray(arr[i]));
        } else {
            newArr.push(arr[i]); 
        } 
    };

    return newArr;
};

function collectStrings(obj){ // O(n)
    let newArr = [];

    for(prop in obj){
        if(typeof obj[prop] === 'object') newArr.push(collectStrings(obj[prop]));
        if(typeof obj[prop] === 'string') newArr.push(obj[prop]);
    };

    newArr = flatTheArray(newArr);
    return newArr;
};

console.log(collectStrings(obj)); // ['John', 'Doe', 'Citizen Kain', 'Bohemian rhapsody', 'Main Street', 'New York', 'NY']