function hourglassSum(arr) {
  // let grid = arr
  // let row = 6;
  // let column = 6;
  // let result = 0

  // for (let i = 0; i < row - 2; i++) {
  //   for (let j = 0; j < column - 2; j++) {
  //     // Considering mat[i][j] as top
  //     // left cell of hour glass.
  //     let sum =
  //       grid[i][j]
  //     console.log(sum)

  //     if (result < sum) {
  //       result = sum
  //     }
  //   }
  // }
  // console.log(result)

  let hourglasses = [];

  if (
    typeof arr === "object" &&
    arr.length === 6 &&
    arr.map((i) => i.length).reduce((p, n) => p + n) === 36
  ) {
    for (let row = 0; row <= 3; row++) {
      for (let col = 0; col <= 3; col++) {
        let sum = 0;

        sum += arr[row][col];
        sum += arr[row][col + 1];
        sum += arr[row][col + 2];
        sum += arr[row + 1][col + 1];
        sum += arr[row + 2][col];
        sum += arr[row + 2][col + 1];
        sum += arr[row + 2][col + 2];

        hourglasses.push(sum);
      }
    }
  }

  console.log(hourglasses.length > 0 ? Math.max(...hourglasses) : 0);
}

hourglassSum(
  [1, 1, 1, 0, 0, 0],
  [0, 1, 0, 0, 0, 0],
  [1, 1, 1, 0, 0, 0],
  [0, 0, 2, 4, 4, 0],
  [0, 0, 0, 2, 0, 0],
  [0, 0, 1, 2, 4, 0]
);
