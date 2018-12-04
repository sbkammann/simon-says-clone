const blue = document.getElementById('blue');
const green = document.getElementById('green');
const red = document.getElementById('red');
const yellow = document.getElementById('yellow');
const start = document.getElementById('startNewGame');
const roundNumber = document.getElementById('roundNumber');
const gameOver = document.getElementById('gameOver');
let ifGameOver = false;
let queue = []; //stores the sequence in which the tiles will light up
let roundNum = 0; // counts the number of rounds
let move = 0;
let cont= false;

//breaks if you press the new game button several times
//also need to show game over when a mistake was made
//sound
start.addEventListener('click', newGame);
blue.addEventListener('click', check);
green.addEventListener('click', check);
red.addEventListener('click', check);
yellow.addEventListener('click', check);

function newGame(){
  cont = false;
  queue = [];
  roundNum =0;
  cont = true;
  roundNumber.innerHTML = `Round #: 1`;
  gameOver.innerHTML = '';
  isGameOver = false;
  pipeline();
}

function pipeline() {
  addToQueue();
  fn(0);
}
// play sequence and store in array random number generator
//add random number to queue
function addToQueue(){
   move = 0;
   roundNum++;
   queue[roundNum-1] = Math.floor((Math.random() * 4) + 1);
}

//simulate square lighting up
function lightUp(num){
  if(!isGameOver){
    switch(num) {
      case 1:
          blue.style.backgroundColor = '#00FFFF'; // cyan
          //returns back to original color
          setTimeout(function(){
            blue.style.backgroundColor = 'blue';
          }, 750); // 3/4 of a second
          break;
      case 2:
          green.style.backgroundColor= '#66FF66'; // Screamin' Green
          //returns back to original color
          setTimeout(function(){
            green.style.backgroundColor = 'green';
          }, 750); // 3/4 of a second
          break;
      case 3:
          red.style.backgroundColor=   '#FFB6C1'; // Hot pink
          //returns back to original color
          setTimeout(function(){
            red.style.backgroundColor = '#B22222';
          }, 750); // 3/4 of a second
          break;
      case 4:
          yellow.style.backgroundColor=	'#FFFF99'; // Canary
          //returns back to original color
          setTimeout(function(){
            yellow.style.backgroundColor = '#FFD12A';
          }, 750); // 3/4 of a second
          break;
      }
    }
}
//ensures the lightUp function finishes before the next is invoked
function fn(i) {
    if (i < queue.length && cont) new Promise((resolve, reject) => {
        setTimeout( () => {
            lightUp(queue[i]);
            resolve();
        }, 1000);
    }).then(fn.bind(null, i+1));
}
// (function fn(i) {
//     if (i < queue.length) new Promise((resolve, reject) => {
//         setTimeout( () => {
//             lightUp(queue[i]);
//             resolve();
//         }, 1000);
//     }).then(fn.bind(null, i+1));
// })(0);

//compares user input to queue to see if they clicked the right tile
function check(){

  let color = "";
  switch(event.target.id) {
    case "blue":
      color = 1;
        break;
    case "green":
      color = 2;
        break;
    case "red":
        color = 3;
        break;
    case "yellow":
        color = 4;
        break;
    }
  lightUp(color);
  if( color !== queue[move]){
    isGameOver = true;
    gameOver.innerHTML = 'Game Over...';
  }
  else {
    move++;
    if (move === roundNum){
      roundNumber.innerHTML = `Round #: ${roundNum +1}`;
      pipeline();
    }
  }
}




// sound
