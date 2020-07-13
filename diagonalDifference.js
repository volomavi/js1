function diagonalDifferences (arr) {
  let length = arr.length;
  let sumLeft = 0;
  let sumRight = 0;

  for(let i = 0, j = length - 1; i < length; i++, j--){
    sumLeft += arr[i][i];
    // console.log(sumLeft);
    sumRight += arr[i][j];
    // console.log(sumRight);
  }

  console.log(Math.abs(sumLeft - sumRight));
};

diagonalDifferences([[11, 2, 4], [4, 5, 6], [10, 8, -12]])

