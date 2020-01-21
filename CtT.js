let annaScore = 0;
let bobScore = 0;

function compareTriplets(a,b) {
  let anna = a;
  let bob = b;


  let arrayLength = anna.length;
  for (let i = 0; i <= arrayLength; i++){
    if (anna[i] > bob[i]){
      annaScore ++;
    } 
    if (anna[i] < bob[i]){
      bobScore ++;
    }
  } console.log(annaScore,bobScore)
}


function compareTriplets(annaScores, bobScores) {
  let annaTotal = 0;
  let bobTotal = 0;
  
  annaScores.forEach((score, index) => {
    if (score > bobScores[index]) {
    annaTotal += 1;
    } else if (score < bobScores[index]) {
    bobTotal += 1;
    }
  });
  return [annaTotal, bobTotal];
}



compareTriplets([11,12,3], [3,2,1]);
