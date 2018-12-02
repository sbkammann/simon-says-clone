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
//simulate square lighting up
function lightUp(num){

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
        red.style.backgroundColor=   '#FF00CC'; // Hot Magenta
        //returns back to original color
        setTimeout(function(){
          red.style.backgroundColor = 'red';
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

  // need to create delay with timer set?
}


//event listerners check to see if the same as stored generator, counter so computer knows when to start again
//timer, countdown, score, round, sound, reset/start button
