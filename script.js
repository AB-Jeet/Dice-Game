'use strict';

// Selecting elements
const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');
const score0El = document.querySelector('#score--0');
const score1El = document.getElementById('score--1');
const current0El = document.getElementById('current--0');
const current1El = document.getElementById('current--1');
//const c1 = document.getElementById('c');

const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const congo=document.querySelector('.celebration');

let scores, currentScore, activePlayer, playing,total1,total2,flag,target=20;

// Starting conditions
const init = function () {
  scores = [0, 0];
  currentScore = 0;
  activePlayer = 0;
  playing = true;
  total1=0,total2=0;
  flag=0;
  score0El.textContent = 0;
  score1El.textContent = 0;
  current0El.textContent = 0;
  current1El.textContent = 0;
   congo.classList.add('hidden');
  diceEl.classList.add('hidden');
  player0El.classList.remove('player--winner');
  player1El.classList.remove('player--winner');
  player0El.classList.add('player--active');
  player1El.classList.remove('player--active');
};
init();

// Rolling dice functionality
btnRoll.addEventListener('click', function () {
  if (playing) {
    // 1. Generating a random dice roll
    const dice = Math.trunc(Math.random() * 6) + 1;
    // 2. Display dice
    diceEl.classList.remove('hidden');
    diceEl.src = `dice-${dice}.png`;
   if(flag==0){
    player1El.classList.remove('player--active');
    player0El.classList.add('player--active');
    document.getElementById(`current--1`).textContent = 0;
           // Add dice to current score
      currentScore = dice;
      total1+=dice;
      document.getElementById(`current--0`).textContent = currentScore;
      document.getElementById( `score--0`).textContent = total1;
      
      if(total1>=target)
     {
      player0El.classList.add('player--winner');
      playing=false;
      document.getElementById('congratulate').textContent="Congratulation Player 1";
      diceEl.classList.add('hidden');   
      congo.classList.remove('hidden');
     }
      flag=1;

    } else if(flag==1)
    {

      player0El.classList.remove('player--active');
      player1El.classList.add('player--active');
      document.getElementById( `current--0`).textContent = 0;
      currentScore = dice;
      total2+=dice;
      document.getElementById(`current--1`).textContent = currentScore;
      document.getElementById(`score--1`).textContent = total2;
      if(total2>=target)
      {
        player1El.classList.add('player--winner');
        playing=false;
        document.getElementById('congratulate').textContent="Congratulation Player 2";
        diceEl.classList.add('hidden');
        congo.classList.remove('hidden');
        
      }
      flag=0;
    }
  }

}
);


btnNew.addEventListener('click', init);
