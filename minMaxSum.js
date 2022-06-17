function miniMaxSum(arr) {
  const sorted = arr.sort();
  let high = 0;
  let low = 0;
  for (let i = 1; i < sorted.length; i++) {
    high += sorted[i];
    
  }
  for (let i = 0; i < (sorted.length -1); i++) {
    low += sorted[i];
    
  }
  console.log(low, high)
}

miniMaxSum([5,4,1,2,3])