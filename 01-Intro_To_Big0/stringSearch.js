/*  
  THE PROBLEM:
  You are attempting to find the index of the first appearance 
  of one string (the needle) inside of another (the haystack).
  
  EXAMPLES:
  stringSearch('or', 'hello world');  should return 7
  stringSearch('hello world', 'or');  should return -1
  stringSearch('howdy', 'hello world');  should return -1
  stringSearch('oox', 'ooboxoooxo');  should return 6
*/

// O(n * m)
function stringSearch (needle, haystack) {
  for (let hIdx = 0; hIdx <= haystack.length - needle.length; hIdx++) {     // n
    for (let nIdx = 0; nIdx < needle.length; nIdx++) {                      // m
      if (haystack[hIdx + nIdx] !== needle[nIdx]) break;
      if (nIdx + 1 === needle.length) return hIdx;
    }
  }
  return -1;
}

// O (n * m)
// Although this implementation only uses a single for-loop, it has the same time
// complexity as the previous implementation, because the built-in 'substring'
// method has a time complexity of 0(end - start), with 'end' and 'start' referring
// to the start and end indexes of the substring. In the worst case scenario, 
// the start and end would be the beginning and end of the string, making this
// the case to be used when analyzing its time complexity.
function stringSearch(needle, haystack) {
    for (let i = 0; i < haystack.length; i++) {                             // n
        if (haystack.substring(i, needle.length + i) === needle) {          // m
            return i
        }
    }
    return -1
}