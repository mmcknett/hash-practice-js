// This method will return an array of arrays.
// Each subarray will have strings which are anagrams of each other
// Time Complexity: ?
// Space Complexity: ?
function grouped_anagrams(strings) {
  const result = [];
  for(let string of strings) {
    const counts = getLetterCounts(string);
    const foundObj = result.find(r => countsEqual(counts, r.counts));
    if (foundObj) {
      foundObj.array.push(string);
    } else {
      result.push({ counts, array: [string] });
    }
  }

  return result.map(bundle => bundle.array);
}

function getLetterCounts(input) {
  const counts = {};
  for(let letter of input) {
    counts[letter] ? counts[letter] += 1 : counts[letter] = 1;
  }
  return counts;
}

function countsEqual(letterCountLhs, letterCountRhs) {
  return (
    allKeysOfFirstEqualSecond(letterCountLhs, letterCountRhs) &&
    allKeysOfFirstEqualSecond(letterCountRhs, letterCountLhs)
  );
}

function allKeysOfFirstEqualSecond(first, second) {
  for(let key of Object.keys(first)) {
    if (!second[key] || first[key] !== second[key]) {
      return false;
    }
  }
  return true;
}

// function makeKey(letterCounts) {
//   return Object.entries(letterCounts).sort().reduce((strIn, [key, value]) => strIn + key + value, "");
// }

// This method will return the k most common elements
// in the case of a tie it will select the first occuring element.
// Time Complexity: ?
// Space Complexity: ?
function top_k_frequent_elements(list, k) {
  throw new Error("Method hasn't been implemented yet!");
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
  getLetterCounts,
  countsEqual
};
