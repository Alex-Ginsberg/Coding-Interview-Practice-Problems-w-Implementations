/*
    THE PROBLEM:
    Given two sorted arrays of numbers, return an array containing all values that appear in both arrays.
    The returned array does NOT need to be sorted.
    Each array will only have unique values.
*/

// Brute-force approach
function intersection(arrA, arrB) {
    const results = []
    for (let i = 0; i < arrA.length; i++) {
        for (let j = 0; j < arrB.length; j++) {
            if (arrA[i] === arrB[j]) {
                results.push(arrA[i])
            }
        }
    }
    return results
}

/*
    The above approach runs in O(n * m) time.
    We can optimize the functions by taking advantage of the fact that the arrays are sorted.
    This will run in O(n + m)
*/

function intersection(arrA, arrB) {
    let aPointer = 0
    let bPointer = 0
    const results = []
    while (aPointer < arrA.length && bPointer < arrB.length) {
        if (arrA[aPointer] < arrB[bPointer]) {
            aPointer++
        }

        else if (arrA[aPointer] > arrB[bPointer]) {
            bPointer++
        }

        else {
            results.push(arrA[aPointer])
            aPointer++
            bPointer++
        }
    }
}