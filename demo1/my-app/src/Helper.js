export function CheckWin(cells) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
  ];
  for (let index = 0; index < lines.length; index++) {
    const [a, b, c] = lines[index];
    if (cells[a] && cells[a] === cells[b] && cells[b] === cells[c]) {
      return cells[a];
    }
    return null;
  }
}
