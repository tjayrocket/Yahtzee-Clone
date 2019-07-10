console.log('Hello!');

const firstContainer = [];
const secondContainer = [];
const thirdContainer = [];

let hand = 5;

function roll(x){

  for(let i = 0; i < x; i++){
    firstContainer.push(Math.round((Math.random()*5)+1));
  }
  // return('roll, em!');
  console.log(firstContainer)
}

