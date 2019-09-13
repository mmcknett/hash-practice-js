// This method will return an array of arrays.
// Each subarray will have strings which are anagrams of each other
// Time Complexity: O(n + k log(k)) where n is the number of strings
//                  and k is the max length of a string. We have to
//                  sort each string to hash it.
// Space Complexity: O(n * k) we have to store all the data passed
//                   in inside of the "hash table"
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
// Time Complexity: O(n log(n)) where n is the number of elements
//                  in the list. We must visit each element, and
//                  also worst-case sort that many elements.
// Space Complexity: O(n) because of the array copies from map & slce.
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
// Time Complexity: 3n^2 + 3 * 10 * n  --> O(n^2) where n
//                  is the length of a grid row/column.
// Space Complexity: 10 --> O(1)
function valid_sudoku(table) {
  const seenArray = new Array(10);
  reset(seenArray);

  for(let row = 0; row < table.length; ++row) {
    for(let col = 0; col < table[row].length; ++col) {
      // Look for duplicate values in rows.
      if (!visitTable(table, row, col, seenArray)) {
        return false;
      }
    }
    reset(seenArray);
  }

  for(let col = 0; col < table[0].length; ++col) {
    for(let row = 0; row < table.length; ++row) {
      // Look for duplicate values in columns.
      if (!visitTable(table, row, col, seenArray)) {
        return false;
      }
    }
    reset(seenArray);
  }

  for(let subCol = 0; subCol < 3; ++subCol) {
    for(let subRow = 0; subRow < 3; ++subRow) {
      const colOffset = subCol * 3;
      const rowOffset = subRow * 3;

      // Look for duplicate values in sub-boxes.
      for(let col = colOffset; col < 3 + colOffset; ++col) {
        for(let row = rowOffset; row < 3 + rowOffset; ++row) {
          if (!visitTable(table, row, col, seenArray)) {
            return false;
          }
        }
      }
      reset(seenArray);
    }
  }

  return true;
}

function visitTable(table, row, col, seenArray) {
  const digit = table[row][col];
  if (digit === '.') {
    return true;
  }
  if (seenArray[digit]) {
    return false; // We've seen this value.
  }
  seenArray[digit] = true;
  return true;
}

function reset(seenArray) {
  seenArray.fill(false, 0, 10);
}

module.exports = {
  grouped_anagrams,
  top_k_frequent_elements,
  valid_sudoku,
  sortLetters
};
