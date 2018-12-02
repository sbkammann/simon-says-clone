const blue = document.getElementById('blue');
const green = document.getElementById('green');
const red = document.getElementById('red');
const yellow = document.getElementById('yellow');


// play sequence and store in array random number generator
//random number between 1 and 4 may need to improve so there are fewer same numbers in sequence
let randNum;
for (let i=0; i<20; i++){
  randNum = Math.floor((Math.random() * 4) + 1);
  console.log(randNum);
}

//random number generator each color is assigned a number js change color to simulate lighting up
//use css hue?
//event listerners check to see if the same as stored generator, counter so computer knows when to start again
//timer, countdown, score, round, sound, reset/start button
