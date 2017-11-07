/*
    THE PROBLEM:
    Given an alphabetical array of dictionary entries and a word to search for,
    find and return that word's definition (if it exists).

    Dictionary is formatted as follows:  
*/

    const dictionary = [
        'definition - A statement of the exact meaning of a word, especially in a dictionary',
        'inane - Laching sense or meaning'
    ]
/*
    The important thing to notice hear is that the dictionary is sorted on the word.
    Ignoring this, we can use brute force to solve it:
*/
    function definitionOf (word, dict) {
        for (let i = 0; i < dict.length; i++) {
            if (dict[i].startsWith(word + ' - ')) {
                return dict[i].slice(word.length + 3)
            }
        }
    }

/*
    This implementation forces us to search through every entry of the array until we
    hit the word we are looking for.
    Since the dictionary is sorted data, the fastest way to search through it is through
    a BST search:
*/

    function definitionOf (word, dict) {
        let prevLeft = 0
        let prevRight = dict.length - 1
        let index

        while (index !== prevLeft && index !== prevRight) {
            index = Math.floor((prevLeft + prevRight) / 2)          // 'index' will be the center of the currently searched area
            if (dict[index].startsWith(word + ' - ')) {
                return dict[index].slice(word.length + 3)
            }

            // Must move the searching area to the left
            if (word < dict[index]) {
                prevRight = index - 1
            }
            // Must move the searching area to the right
            else {
                prevLeft = index + 1
            }
        }
    }

/*
    This implementation is much more efficient, because in the worst case, we have to seach through half
    the elements in the dictionary, O(n/2), as opposed to the first implementation, which searched through
    every element of the dictionary, O(n).

    When you are given sorted data, the best approach is typically to use a binary search.
*/
