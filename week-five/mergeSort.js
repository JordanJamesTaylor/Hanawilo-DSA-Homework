/*

    Congratulations! You were just hired to be a junior backend engineer at Hanawilo! As the first task
    at Hanawilo, your manager has asked you to implement a sorting algorithm using the Merge sort of the 
    payloads coming back from the MongoDB database. The website currently is running a very slow sorting 
    algorithm and it is driving away customers due to the slowness, therefore, as your first task, he has
    assigned you to rewrite the sorting algorithm for this payload returned from the MongoDB API fetch call. 
    
    He has asked to return the following data in two sorting options: 
    1. Merge sort (ascending order) by the rank 
    2. Merge sort (ascending order) by the ratings AND rank

    BC:
        - Array has length <= 1

    1. Find mid point of array
    2. Break array in to two
    3. Recursively call self to grab the left and right side of the array
    4. Send left and right sides of the array to helper function to sort based on rank value
        4a. Set two pointers j and i, one for each array
        4b. Create a new result array
        4c. Loop through both arrays simultaneously while i < left.length and j < right.length
        4d. Compare values of left and right array at their current indices
        4e. Push bigger value into result array and increase that arrays pointer by 1
    5. Repeat step 4 until either pointer is greater than their respective array
    6. For the array that was not fully traversed (it's pointer > it's length) push each element into results
    7. The recursive nature of our function calls will repeat this process until the arrays have been sorted 

    Time: O(n log n)
    Space: O(n)

*/

const data = {
    results: {
        payload: [
            {
                profile: {
                    name: 'Tony',
                    rank: 9,
                    facourites: [
                        {
                            title: 'Spiderm-Man',
                            rating: 5
                        },
                        {
                            title: 'Spongebob',
                            rating: 9
                        }
                    ]
                }
            },
            {
                profile: {
                    name: 'John',
                    rank: 2,
                    favourites: [
                        {
                            title: 'Hulk',
                            rating: 1
                        },
                        {
                            title: 'Top Gun',
                            rating: 8
                        }
                    ]
                }
            }
        ]
    }    
};

function merge(leftArr, rightArr){
    let results = [];
    let i = 0;
    let j = 0;
    
    while(i < leftArr.length && j < rightArr.length){
        if(leftArr[i].profile.rank > rightArr[j].profile.rank){
            results.push(rightArr[j]);
            j++;
        }else{
            results.push(leftArr[i]);
            i++
        }
    }

    while(i < leftArr.length){
        results.push(leftArr[i]);
        i++;
    }
    while(j < rightArr.length){
        results.push(rightArr[j]);
        j++;
    }

    return results;
};

function sortByRank(arr){
    if(arr.length <= 1) return arr; // BC

    let mid = Math.floor(arr.length / 2); // Get middle element
    let left = sortByRank(arr.slice(0, mid));
    let right = sortByRank(arr.slice(mid, arr.length));

    return merge(left, right);
};

console.log(sortByRank(data.results.payload));