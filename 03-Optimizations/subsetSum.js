/*
    THE PROBLEM:
    Given a target sum and an array of positive integers, return true if any combinations
    of numbers in the array can add up to the target.
    Each number in the array can only be used once.
    Return false if the numbers cannot be used to add to the target sum.
*/

// Naive approach, O(2^n)
function sebsetSum (target, arr) {
    let sums = []
    for (let i = 0; i < arr.length; i++) {
        let sumsCopy = [...sums]
        for (let j = 0; j < sumsCopy.length; j++) {
            let newSum = sumsCopy[j] + arr[i]
            if (newSum === target) return true
            else if (newSum < target) sums.push(newSum)
        }
    }
    return false
}

// Recursive solution
function subsetSum (target, nums, idx = 0) {
    if (target === 0) return true
    if (target < 0 || idx === nums.length) return false
    const num = nums[idx]
    const whenExclueded = subsetSum(target, nums, idx + 1)
    const whenIncluded = subsetSum(target - num, nums, idx + 1)
    return whenExclueded || whenIncluded
}
