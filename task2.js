let items = [
  [1, 2, 3, 4, 5],
  [6, 7, 8, 9, 10],
  [11, 12, 13, 14, 15],
  [16, 17, 18, 19, 20]
];

function getFlatOfArray(arr) {
  let rowSize = arr.length;
  let itemsCount = rowSize * arr[0].length;
  let newArr = [];

  for (let i = 0; i < itemsCount; i++) {
    let rowIndex = Math.floor(i / arr[0].length);
    let colIndex = i % arr[0].length;
    if (rowIndex % 2 === 0) {
      newArr.push(arr[rowIndex][colIndex]);
    } else {
      newArr.push(arr[rowIndex][arr[0].length - colIndex - 1]);
    }
  }
  return newArr;
}

console.table(getFlatOfArray(items));

//OutPut
//1, 2, 3, 4, 5, 10, 9, 8, 7, 6, 11, 12, 13, 14,15, 20, 19, 18, 17, 16
