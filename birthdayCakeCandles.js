
// Complete the birthdayCakeCandles function below.
function birthdayCakeCandles(ar) {
// break ar into 2 
// let first int = number of candles
// let second int = array of candle heights
// sort through second int looking for new numbers
// if present ++

let maxHeight = Math.max(...ar);
let maxCandleHeight = 0;

ar.forEach(candle => {
    if (candle == maxHeight) {
        maxCandleHeight = maxCandleHeight+1;
    }
});

return maxCandleHeight;

};


