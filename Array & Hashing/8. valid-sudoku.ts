// https://leetcode.com/problems/valid-sudoku/description/
// https://neetcode.io/problems/valid-sudoku

// Valid Sudoku
// You are given a a 9 x 9 Sudoku board board. A Sudoku board is valid if the following rules are followed:

// Each row must contain the digits 1-9 without duplicates.
// Each column must contain the digits 1-9 without duplicates.
// Each of the nine 3 x 3 sub-boxes of the grid must contain the digits 1-9 without duplicates.
// Return true if the Sudoku board is valid, otherwise return false

// Note: A board does not need to be full or be solvable to be valid.

// Example 1:

// Input: board =
// [
//  ["1", "2", ".", ".", "3", ".", ".", ".", "."],
//  ["4", ".", ".", "5", ".", ".", ".", ".", "."],
//  [".", "9", "8", ".", ".", ".", ".", ".", "3"],
//  ["5", ".", ".", ".", "6", ".", ".", ".", "4"],
//  [".", ".", ".", "8", ".", "3", ".", ".", "5"],
//  ["7", ".", ".", ".", "2", ".", ".", ".", "6"],
//  [".", ".", ".", ".", ".", ".", "2", ".", "."],
//  [".", ".", ".", "4", "1", "9", ".", ".", "8"],
//  [".", ".", ".", ".", "8", ".", ".", "7", "9"]
// ]

// Output: true
// Example 2:

// Input: board =
// [
//  ["1", "2", ".", ".", "3", ".", ".", ".", "."],
//  ["4", ".", ".", "5", ".", ".", ".", ".", "."],
//  [".", "9", "1", ".", ".", ".", ".", ".", "3"],
//  ["5", ".", ".", ".", "6", ".", ".", ".", "4"],
//  [".", ".", ".", "8", ".", "3", ".", ".", "5"],
//  ["7", ".", ".", ".", "2", ".", ".", ".", "6"],
//  [".", ".", ".", ".", ".", ".", "2", ".", "."],
//  [".", ".", ".", "4", "1", "9", ".", ".", "8"],
//  [".", ".", ".", ".", "8", ".", ".", "7", "9"]
// ]

// Output: false
// Explanation: There are two 1's in the top-left 3x3 sub-box.

// Constraints:

// board.length == 9
// board[i].length == 9
// board[i][j] is a digit 1-9 or '.'.

function isValidSudoku(board: string[][]): boolean {
  const boxSetMap = new Map<number, Set<string>>();

  for (let i = 0; i < 9; i++) {
    const rowSet = new Set<string>();
    const colSet = new Set<string>();

    for (let j = 0; j < 9; j++) {
      const rowDigit = board[i][j];
      if (rowDigit !== ".") {
        if (rowSet.has(rowDigit)) return false;
        rowSet.add(rowDigit);
      }

      const colDigit = board[j][i];
      if (colDigit !== ".") {
        if (colSet.has(colDigit)) return false;
        colSet.add(colDigit);
      }

      const boxIndex = Math.floor(i / 3) * 3 + Math.floor(j / 3);
      const boxSet =
        boxSetMap.get(boxIndex) ??
        boxSetMap.set(boxIndex, new Set<string>()).get(boxIndex)!;
      if (rowDigit === ".") continue;
      if (boxSet.has(rowDigit)) return false;
      boxSet.add(rowDigit);
    }
  }

  return true;
}
