'use strict';


const score1El = document.querySelector('#score--0');
const score2El = document.querySelector('#score--1');
const currScore1El = document.querySelector('#current--0');
const currScore2El = document.querySelector('#current--1');
const player1 = document.querySelector('.player--0');
const player2 = document.querySelector('.player--1');
const diceEl = document.querySelector('.dice');
const rollBtn = document.querySelector('.btn--roll');
const holdBtn = document.querySelector('.btn--hold');
const newBtn = document.querySelector('.btn--new');

//Setting the game
score1El.textContent = 0;
score2El.textContent = 0;
diceEl.classList.add('hidden');
let currScore1 = 0;
let currScore2 = 0;
let score1 = 0;
let score2 = 0;

//Rolling the dice
rollBtn.addEventListener('click',() => {
  diceEl.classList.remove('hidden');
  let randomNum = Math.trunc(Math.random()*6) + 1;
  console.log(randomNum);
  switch(randomNum){
    case 1: diceEl.src = "dice-1.png";
    break;
    case 2: diceEl.src = "dice-2.png";
    break;
    case 3: diceEl.src = "dice-3.png";
    break;
    case 4: diceEl.src = "dice-4.png";
    break;
    case 5: diceEl.src = "dice-5.png";
    break;
    case 6: diceEl.src = "dice-6.png";
    break;
  }

  //Logic of the game
  if(randomNum === 1){
    reset();
  }else{
    if(player1.classList.contains("player--active") === true){
      currScore1 += randomNum;
      currScore1El.textContent = currScore1;
    }else{
      currScore2 += randomNum;
      currScore2El.textContent = currScore2;
    }
  }
});

holdBtn.addEventListener('click',() => {
  if(player1.classList.contains("player--active") === true){
    score1 += currScore1;
    score1El.textContent = score1;
    checkWin();
  }else{
    score2 += currScore2;
    score2El.textContent = score2;
    checkWin();
  }
  reset();
});

newBtn.addEventListener('click',() => {
  score1El.textContent = 0;
  score2El.textContent = 0;
  currScore1El.textContent = 0;
  currScore2El.textContent = 0;
  diceEl.classList.add('hidden');
  rollBtn.disabled = false;
  holdBtn.disabled = false;
  currScore1 = 0;
  currScore2 = 0;
  score1 = 0;
  score2 = 0;
  if(player1.classList.contains('player--winner') === true){
    player1.classList.remove('player--winner');
    player1.classList.add("player--active");
    player2.classList.remove("player--active");
    console.log(player1.classList,player2.classList);
  }else if(player2.classList.contains('player--winner') === true){
    player2.classList.remove('player--winner');
    player1.classList.add("player--active");
    player2.classList.remove("player--active");
  }
});


function reset(){
  currScore1 = 0;
  currScore2 = 0;
  currScore1El.textContent = 0;
  currScore2El.textContent = 0;
  player1.classList.toggle("player--active");
  player2.classList.toggle("player--active");
}

function checkWin(){
  if(score2 >= 100){
    player2.classList.add('player--winner');
    diceEl.classList.add('hidden');
    rollBtn.disabled = true;
    holdBtn.disabled = true;
  }else if(score1 >= 100){
    player1.classList.add('player--winner');
    diceEl.classList.add('hidden');
    rollBtn.disabled = true;
    holdBtn.disabled = true;
  }
}
