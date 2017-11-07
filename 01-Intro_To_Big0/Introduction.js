// BIG O
// ----------------------------------------------------------------------------
// Big O notations allows you to analyze the efficiency of your code

// Can be used to specify runtime or space requirements, as they grow relative
// to the size of the input
    // Describe how quickly runtime can grow
    // Analyze the growth rate of a function 

// Since Big O is measured based on the shape of the growth curve, we can only
// look at the largest factor and drop all others

// The best approach to finding the Big O is to look at each line of code and
// decide if it would change if the size of the input changed: 

// O(1)
function hasItems(array) {
    return array[0] !== undefined 
}

// O(n), 'n' is the length of the array
function hasItem(num, arr) {
    for (let i = 0; i < arr.length; i++) {          // n
        if (arr[i] === num) {                       // 1
            return true                             // 1
        }
    }
    return false                                    // 1
}

// O(n^2)
function logSomething(arr) {
    for (let i = 0; i < arr.length; i++) {          // n
        for (let j = 0; j < arr.length; i++) {      // n
            console.log(arr[i])                     // 1
        }
    }
}

// O(n * m), 'n' is the length of arrA, 'm' is the length of arrB
function myCoolFunction(arrA, arrB) {
    for (let i = 0; i < arrA.length; i++) {         // n
        for (let j = 0; j < arrB.length; i++) {     // m
            console.log(arrA[i] + arrB[j])          // 1
        }
    }
}

// For recursive functions, the big O is typically the O(branches^depth)
    // Branches increase when there are multiple recursive calls within the
    // the function (Fibonacci)

