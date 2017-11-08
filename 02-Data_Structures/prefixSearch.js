/*
    THE PROBLEM: 
    Given a book object:
        {id:   int,
         text: string}
    and a string to search for in the text, return an array with the character index
    for every word that begins with that string 
*/

// Naive approach
function prefixSearch(book, text) {
    const bookArray = book.text.split(' ')
    const results = []
    let currentIndex = 0
    for (let i = 0; i < bookArray.length; i++) {
        if (bookArray[i].substring(0, text.length) === text) {
            results.push(currentIndex)
        }
        currentIndex += bookArray[i].length + 1
    }
    return results
}

/*
    Best data structure to use for this is a tries.
    Each node is a character that points to the next.
    All descendents of a node have a common prefix of the string associated with that node.
*/
