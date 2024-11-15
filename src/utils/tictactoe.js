const winSituation = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [6, 4, 2],
];

function getSameSymbol(board, situation) {
  let sym;
  for (let currIdx = 0; currIdx < 2; currIdx++) {
    if (board[situation[currIdx]] !== board[situation[currIdx + 1]]) {
      return null;
    } else {
      sym = board[situation[currIdx]];
    }
  }
  return sym;
}

export function getwinner(board) {
  for (const sit of winSituation) {
    const sym = getSameSymbol(board, sit);
    if (sym !== null) {
      return { symbol: sym, situation: sit };
    }
  }
  return null;
}
