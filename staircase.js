function staircase(n){
let stair = '#';
  for (let i = 0; i <= n; i++) {
    console.log(stair.repeat(i).padStart(n));
    
  }
}

staircase(3);