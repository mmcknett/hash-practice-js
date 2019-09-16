// This method will return an array of arrays.
// Each subarray will have strings which are anagrams of each other
// Time Complexity: ?
// Space Complexity: ?
function grouped_anagrams(strings) {
  if (strings.length === 0) {
    return []
  }
 const words_hash = {};

 strings.forEach((word) => {
   // alphabetize word
   const sorted_word = word.split('').sort().join();
   if (words_hash[sorted_word]) {
     words_hash[sorted_word].push(word);
   } else {
     words_hash[sorted_word] = [word];
   }
 })

 return Object.values(words_hash);

}


// This method will return the k most common elements
// in the case of a tie it will select the first occuring element.
// Time Complexity: ?
// Space Complexity: ?
function top_k_frequent_elements(list, k) {
  throw new Error("Method hasn't been implemented yet!");
}


// This method will return the true if the table is still
//   a valid sudoku table.
//   Each element can either be a ".", or a digit 1-9
//   The same digit cannot appear twice or more in the same 
//   row, column or 3x3 subgrid
// Time Complexity: ?
// Space Complexity: ?
function valid_sudoku(table) {
  throw new Error("Method hasn't been implemented yet!");
}

module.exports = {
  grouped_anagrams,
  top_k_frequent_elements,
  valid_sudoku
};
