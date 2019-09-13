const expect = require('chai').expect;
const {
  grouped_anagrams,
  top_k_frequent_elements,
  valid_sudoku
} = require('../lib/exercises');

describe("exercises", function() {
  describe("grouped_anagrams", function() {
    it("will return [] for an empty array", function() {
      // Arrange
      const list = [];

      // Act-Assert
      expect(grouped_anagrams(list)).to.eql([]);
    });

    it("will work for the README example", function() {
      // Arrange
      const list = ["eat", "tea", "tan", "ate", "nat", "bat"];

      // Act
      const answer = grouped_anagrams(list);
      const expected_answer = [
        ["ate","eat","tea"],
        ["nat","tan"],
        ["bat"]
      ];

      // Assert
      expect(answer.length).to.be.greaterThan(0);
      answer.forEach((array, index) => {
        expect(array.sort()).to.eql(expected_answer[index]);
      });
    });

    it("will work for strings with no anagrams", function() {
      // Arrange
      const list = ["eat", "ear", "tar", "pop", "pan", "pap"];

      // Act
      const answer = grouped_anagrams(list);

      const expected_answer = [
        ["eat"],
        ["ear"],
        ["tar"],
        ["pop"],
        ["pan"],
        ["pap"]
      ];

      // Assert
      expect(answer.length).to.be.greaterThan(0);
      answer.forEach((array) => {
        expect(expected_answer).to.deep.include(array.sort());
      });
    });

    it("will work for strings that are all anagrams", function() {
      // Arrange
      const list = ["eat", "tae", "tea", "eta", "aet", "ate"]

      // Act
      const answer = grouped_anagrams(list);
      const expected_answer = [
        [ "aet", "ate", "eat", "eta", "tae", "tea"]
      ];

      // Assert
      expect(answer.length).to.be.greaterThan(0);
      answer.forEach((array) => {
        expect(expected_answer).to.deep.include(array.sort());
      });
    });
  });

  describe.skip("top_k_frequent_elements", function() {
    it("works with example 1", function() {
      // Arrange
      const list = [1,1,1,2,2,3];
      const k = 2;

      // Act
      const answer = top_k_frequent_elements(list, k);

      // Assert
      expect(answer.sort()).to.eql([1,2]);
    });

    it("works with example 2", function() {
      // Arrange
      const list = [1];
      const k = 1;

      // Act
      const answer = top_k_frequent_elements(list, k);

      // Assert
      expect(answer.sort()).to.eql([1]);
    });

    it("will return [] for an empty array", function() {
      // Arrange
      const list = [];
      const k = 1;

      // Act
      const answer = top_k_frequent_elements(list, k);

      // Assert
      expect(answer.sort()).to.eql([]);
    });

    it("will work for an array with k elements all unique", function() {
      // Arrange
      const list = [1, 2, 3];
      const k = 3;

      // Act
      const answer = top_k_frequent_elements(list, k);

      // Assert
      expect(answer.sort()).to.eql([1, 2, 3]);
    });

    it("will work for an array when k is 1 and several elements appear 1 time (HINT Pick the 1st one)", function() {
      // Arrange
      const list = [1, 2, 3];
      const k = 1;

      // Act
      const answer = top_k_frequent_elements(list, k);

      // Assert
      expect(answer.sort()).to.eql([1]);
    });
  });

  describe.skip("valid sudoku", function() {
    it("is not valid if a row has duplicate values", function() {
      // Arrange
      const table = [
        ["5","3",".",".",".",".",".",".","."],
        [".",".",".",".",".",".",".",".","."],
        [".",".",".",".",".",".",".",".","."],
        [".",".",".",".","5","5",".",".","."],
        [".",".",".",".",".",".",".",".","."],
        [".",".",".",".",".",".",".",".","."],
        [".",".",".",".",".",".",".",".","."],
        [".",".",".",".",".",".",".",".","."],
        [".",".",".",".",".",".",".",".","."]
      ];

      // Act
      const valid = valid_sudoku(table);

      // Assert
      expect(valid).to.be.false;
    });

    it("is not valid if a column has duplicate values", function() {
      // Arrange
      const table = [
        ["5",".",".",".",".",".",".",".","."],
        ["2",".",".",".",".",".",".",".","."],
        [".",".",".",".",".",".",".",".","."],
        [".",".",".",".",".",".",".",".","."],
        [".",".",".",".","4",".",".",".","."],
        [".",".",".",".","4",".",".",".","."],
        [".",".",".",".",".",".",".",".","."],
        [".",".",".",".",".",".",".",".","."],
        [".",".",".",".",".",".",".",".","."]
      ];

      // Act
      const valid = valid_sudoku(table);

      // Assert
      expect(valid).to.be.false;
    });

    it("works for the table given in the README", function() {
      // Arrange
      const table = [
        ["5","3",".",".","7",".",".",".","."],
        ["6",".",".","1","9","5",".",".","."],
        [".","9","8",".",".",".",".","6","."],
        ["8",".",".",".","6",".",".",".","3"],
        ["4",".",".","8",".","3",".",".","1"],
        ["7",".",".",".","2",".",".",".","6"],
        [".","6",".",".",".",".","2","8","."],
        [".",".",".","4","1","9",".",".","5"],
        [".",".",".",".","8",".",".","7","9"]
      ];

      // Act
      const valid = valid_sudoku(table);

      // Assert
      expect(valid).to.be.true;
    });

    it("fails for the table given in the README", function() {
      // Arrange
      const table = [
        ["8","3",".",".","7",".",".",".","."],
        ["6",".",".","1","9","5",".",".","."],
        [".","9","8",".",".",".",".","6","."],
        ["8",".",".",".","6",".",".",".","3"],
        ["4",".",".","8",".","3",".",".","1"],
        ["7",".",".",".","2",".",".",".","6"],
        [".","6",".",".",".",".","2","8","."],
        [".",".",".","4","1","9",".",".","5"],
        [".",".",".",".","8",".",".","7","9"]
      ];

      // Act
      const valid = valid_sudoku(table);

      // Assert
      expect(valid).to.be.false;
    });

    it("fails for a duplicate number in a sub-box", function() {
      // Arrange
      const table = [
        ["5","3",".",".","7",".",".",".","."],
        ["6",".","3","1","9","5",".",".","."],
        [".","9","8",".",".",".",".","6","."],
        ["8",".",".",".","6",".",".",".","3"],
        ["4",".",".","8",".","3",".",".","1"],
        ["7",".",".",".","2",".",".",".","6"],
        [".","6",".",".",".",".","2","8","."],
        [".",".",".","4","1","9",".",".","5"],
        [".",".",".",".","8",".",".","7","9"]
      ];

      // Act
      const valid = valid_sudoku(table);

      // Assert
      expect(valid).to.be.false;
    });

    it("fails for a duplicate number in a bottom right sub-box", function() {
      // Arrange
      const table = [
        ["5","3",".",".","7",".",".",".","."],
        ["6",".","2","1","9","5",".",".","."],
        [".","9","8",".",".",".",".","6","."],
        ["8",".",".",".","6",".",".",".","3"],
        ["4",".",".","8",".","3",".",".","1"],
        ["7",".",".",".","2",".",".",".","6"],
        [".","6",".",".",".",".","2","8","."],
        [".",".",".","4","1","9","8",".","5"],
        [".",".",".",".","8",".",".","7","9"]
      ];

      // Act
      const valid = valid_sudoku(table);

      // Assert
      expect(valid).to.be.false;
    });
  });
});
