/*
    Using the bubble sort, sort each profile by ascending order
    for the following properties:  
        1. Age 
        2. Favorite Movie

    *** Bubble Sort ***

    1. 

    Time:
    Space:

*/

const sortedByAge = [  
    {  
        name: 'Tony Kim',   
        age: new Map([['age', 3]]),   
        favoriteMovie: [  
            {  
                title: 'Top Gun',   
                genre: 'action',   
                rating: 10  
            }  
        ]  
    },  
    {  
        name: 'John Smith',   
        age: new Map([['age', 35]]),   
        favoriteMovie: [  
            {  
                title: 'Saw',   
                genre: 'horror',   
                rating: 8  
            }  
        ]  
    }, 
    {  
        name: 'John Smith',   
        age: new Map([['age', 88]]),   
        favoriteMovie: [  
            {  
                title: 'Hulk',   
                genre: 'action',   
                rating: 6  
            }  
        ]  
    } 
];
 
const sortedByRating = [  
    {  
        name: 'John Smith',   
        age: new Map([['age', 88]]),   
        favoriteMovie: [  
            {  
                title: 'Hulk',   
                genre: 'action',   
                rating: 6  
            }  
        ]  
    },  
    {  
        name: 'John Smith',   
        age: new Map([['age', 35]]),   
        favoriteMovie: [  
            {  
                title: 'Saw',   
                genre: 'horror',   
                rating: 8  
            }  
        ]  
    }, 
    {  
        name: 'Tony Kim',   
        age: new Map([['age', 3]]),   
        favoriteMovie: [  
            {  
                title: 'Top Gun',   
                genre: 'action',   
                rating: 10  
            }  
        ]  
    } 
];

const sortedByRating1 = [  
    {  
        name: 'John Smith',   
        age: new Map([['age', 88]]),   
        favoriteMovie: [  
            {  
                title: 'Hulk',   
                genre: 'action',   
                rating: 6  
            }  
        ]  
    }
];

function bubbleSort(arr, prop){
    /*
        ACCESS MAP DATA:  
        data[0].age.get('age))  
    */
};

console.log(bubbleSort(sortedByRating1, "age"));
// console.log(bubbleSort(sortedByRating, "rating"));