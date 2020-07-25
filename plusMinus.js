function plusMinus(arr) {

  let positive = 0;
  let negative = 0;
  let zero = 0;

  let length = arr.length

  arr.forEach(number => {
    if (number === 0) {
      zero++;
    } else if (number >= 0){
      positive++;
    } else if (number <= 0){
      negative++;
    }
  });

  console.log((positive/length).toFixed(6));
  console.log((negative/length).toFixed(6));
  console.log((zero/length).toFixed(6));
}

plusMinus([1, 2, 3, -1, 0]);