
let score =JSON.parse(localStorage.getItem(`score`)) || 
{
  wines: 0,
    loses: 0,
    ties: 0
};

updateScoreElement();





/*
 if(!score){
  score = {
    wines: 0,
    loses: 0,
    ties: 0

  }
 }
 */


function playGame(playerMove){
//call the function that will randomly generate a number 
const computerMove= pickComputerMove();

/*Here we create a variable to store the resutle that we will get after the compaing between the user and the computer.
*/
let result = ``;

// here we check what parameter the user type in
if (playerMove ===`Scissors`) {

/*Here we compare between the computer choosment and the user' choosment. 
*/
    if (computerMove === `rock`)  {
      result = `You lose.`;
    }

      else if(computerMove === `paper`) {
        result = `You wine`;
      }

      else if(computerMove === `scissors`) {
        result = `Tie.`;
      }
}

else if (playerMove === `paper`) {
/*Here we compare between the computer choosment and the user' choosment. 
*/
if (computerMove === `rock`)  {
result = `You wine.`;
}

else if(computerMove === `paper`) {
result = `Tie.`;
}

else if(computerMove === `scissors`) {
result = `You lose.`;
}

}



else if (playerMove === `rock`){
/*Here we compare between the computer choosment and the user' choosment. 
*/
if (computerMove === `rock`)  {
result = `Tie.`;
}

else if(computerMove === `paper`) {
result = `You lose.`;
}

else if(computerMove === `scissors`) {
result= `You wine.`;
}
}

if(result === `You wine.`){
score.wins += 1;
}

else if(result === `You lose.`){
score.loses +=  1;
}

else if(result === `Tie.`){
score.ties +=  1;
}

localStorage.setItem(`score`, JSON.stringify(score));

updateScoreElement();

document.querySelector('.js-result').innerHTML = result;

document.querySelector('.js-moves').innerHTML =   `You
<img src="images/${playerMove}-emoji.png" class="move-icon">
<img src="images/${computerMove}-emoji.png" class="move-icon">
computer`

}

function updateScoreElement() {
document.querySelector('.js-score')
.innerHTML =  `wins: ${score.wins}, loses: ${score.loses}, ties: ${score.ties}
`;

}






// we creaate a function here to the same code that we use many times.
  function pickComputerMove()  {
    
/*we create Mthe.random so the computer will choose randomly a number betwwen 0-1
*/
const radndomNumber= Math.random();

/* we create a vaiable to store the number that the coputer choosed randomly, we created here so we can use it later on code outside the if scope.
*/
let computerMove= ``;

/* Here we combine every buton to a range so we can decide which button the computer choosed. we did 0 to 1/3= rock, 1/3 to 2/3= paper, 2/3 to 1 = scissors. and we make if statments so we can decise which button the computer choosed.
*/
if(radndomNumber >= 0 && radndomNumber < 1/3 ) {
computerMove= `rock`;
}
else if (radndomNumber >= 1/3 && radndomNumber < 2/3) {
computerMove=`paper`;
} 
else if (radndomNumber >= 2/3 && radndomNumber < 1) {
computerMove=`scissors`;
}

return computerMove;

  }


