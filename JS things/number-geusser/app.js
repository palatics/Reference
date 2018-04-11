/*
GAME FUNCTION:
- Player must geuss a number between a min and max
- Player gets a certain amount of guesses
- Notify player of guesses remaining
- Notify the player of the correct answer if lose
- Let player chose to play again
*/

// Game values
let min = 1,
    max = 10,
    winningNum = getRandomNum(min, max),
    geussesLeft = 3;

// UI Elements
const game = document.querySelector('#game'),
      minNum = document.querySelector('.min-num'),
      maxNum = document.querySelector('.max-num'),
      guessBtn = document.querySelector('#guess-btn'),
      guessInput = document.querySelector('#guess-input'),
      message = document.querySelector('.message');

// Assign ui min and max
minNum.textContent = min;
maxNum.textContent = max;

// Play again event listener
game.addEventListener('mousedown', function(e){
    if(e.target.className === 'play-again'){
        window.location.reload();
    }
});

// Listen for guess
guessBtn.addEventListener('click', function(){
    let guess = parseInt(guessInput.value);

    // Validate
    if(isNaN(guess) || guess < min || guess > max){
        setMessage(`Please enter a number between ${min} and ${max}.`, 'red');
    }

    // check if won
    if(guess === winningNum){
        gameOver(true, `${winningNum} is correct, You win!`);
    }else{
        // Wrong number
        geussesLeft -= 1;

        if(geussesLeft === 0){
            gameOver(false, `Game over, you lost. The correct number was ${winningNum}`)
        }else{
            //Change border color
            guessInput.style.borderColor = 'red';
            
            // clearn input
            guessInput.value = '';

            //Game continues
            setMessage(`${guess} is not correct, ${geussesLeft} guesses left`, 'red');
        }
    }
});

// Game over
function gameOver(won, msg){
    let color;
    won === true ? color = 'green' : 'red';

    //Disable input
    guessInput.disabled = true;

    //Change border color
    guessInput.style.borderColor = color;

    //Set text color
    message.style.color = color;

    //Set message
    setMessage(msg, color);

    //Play again?
    guessBtn.value = 'Play Again';

    guessBtn.className += 'play-again';
}

//Get winning number
function getRandomNum(min, max){
    return Math.floor((Math.random() * (max-min + 1) + min));
}

function setMessage(msg, color){
    message.style.color = color;
    message.textContent = msg;
}