function diagonalDifference(arr) {

  let z = arr[0][0];
  let x = 0; 
  let y = 0;
  // let result = 0;

  for (let i = 1; i < arr.length; i++) {
    z--;
    x = (x+arr[i][z]);
    y = (y+arr[i][i-1]);
  }
 
  // result = x - y;
  // if (result < 0) {
  //   result *-1
  // };

  console.log(Math.abs(x-y));
   
  return Math.abs(x-y);

};

diagonalDifference([
                   [3], 
                   [11, 2, 4], 
                   [4, 5, 6], 
                   [10, 8, -12]
                   ]);

