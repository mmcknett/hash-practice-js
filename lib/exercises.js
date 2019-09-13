// This method will return an array of arrays.
// Each subarray will have strings which are anagrams of each other
// Time Complexity: ?
// Space Complexity: ?
function grouped_anagrams(strings) {
  const anagrams = {};
  for(let string of strings) {
    const key = sortLetters(string);
    if (!anagrams[key]) {
      anagrams[key] = [];
    }
    anagrams[key].push(string);
  }
  return Object.values(anagrams);
}

function sortLetters(string) {
  const sortedLetters = string.split('').sort();
  return sortedLetters.join('');
}

// This method will return the k most common elements
// in the case of a tie it will select the first occuring element.
// Time Complexity: ?
// Space Complexity: ?
function top_k_frequent_elements(list, k) {
  if (list.length <= 0) {
    return [];
  }

  const counts = {};
  for (thing of list) {
    counts[thing] += 1;
  }
  const result = Object.entries(counts)
    .sort(([x, countLhs], [y, countRhs]) => countLhs < countRhs)
    .map(([thing, c]) => parseInt(thing));

  return result.slice(0, k);
}


// This method will return true if the table is still
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
  valid_sudoku,
  sortLetters
};
