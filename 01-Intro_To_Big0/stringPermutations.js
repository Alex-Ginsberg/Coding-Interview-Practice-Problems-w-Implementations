/*
    THE PROBLEM:
    Given a string, return an alphabetically sorted array with all of the permutations of that string.
    Each permutation should be:
        the same length as the original string
        unique from all other permutations
        does not need to be an actual word
    stringPermutations('one') should return ['eon', 'eno', 'neo', 'noe', 'one', 'oen']

    One approach is to start off with just the first character of the string and add all the possible permutations
    of that char to the return array (1 permutation). Then for each letter added, add it to each possible spot in each
    existing permutation in the return array.
*/

function stringPermutations (str) {
    let results = []
    let letters = str.split('')
    results.push([letters.shift()])
    while (letters.length) {                                            // Will keep looping until all letters have been added
        let curLetter = letters.shift()
        let tmpResults = []
        results.forEach(function(curResult) {
            for (let i = 0; i <= curResult.length; i++) {               // Inserts the current letter to each possible spot in each entry
                var tmp = curResult.slice()
                tmp.splice(i, 0, curLetter)
                tmpResults.push(tmp)
            }
        })
        results = tmpResults
    }
    results = results.map(function(letterArr) {
        return letterArr.join('')
    })
    return results.filter(function(el, index) {
        return results.indexOf(el) === index
    }).sort()
}