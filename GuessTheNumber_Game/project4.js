let random = Math.round(Math.random() * 100 + 1);

const submit = document.querySelector("#subt");
const userinput = document.querySelector("#guessField");
const guessslot = document.querySelector(".guesses");
const remaining = document.querySelector(".lastResult");
const lowOrHi = document.querySelector(".lowOrHi");
const startOver = document.querySelector(".result");
const end = document.querySelector(".endresult");
const p = document.createElement("p");

let prevguess = [];
let numofguess = 0;

let playGame = true;

if (playGame) {
  submit.addEventListener("click", function (e) {
    e.preventDefault();
    const guess = parseInt(userinput.value);
    validate(guess);
  });
}

function validate(guess) {
  if (guess < 1 || guess > 100 || isNaN(guess)) {
    alert("please enter a valid number");
  } else {
    prevguess.push(guess);
    // last attempt t kone
    if (numofguess == 9) {
      end.innerHTML = `Game Over ! The Random number was ${random}`;

      displayguess(guess);
      console.log(numofguess);
      endGame();
    } else {
      displayguess(guess);
      checkguess(guess);
    }
  }
}

function checkguess(guess) {
  if (random == guess) {
    end.innerHTML = "You Guessed it right!";
    endGame();
  } else if (random > guess) {
    displayMessage(`number is  low`);
  } else if (random < guess) {
    displayMessage(`number is  high`);
  }
}

function displayguess(guess) {
  userinput.value = "";
  guessslot.innerHTML += `${guess} , `;
  numofguess++;
  remaining.innerHTML = `${10 - numofguess}`;
}

function displayMessage(msg) {
  lowOrHi.innerHTML = `<h2>${msg}</h2>`;
}

function endGame() {
  displayMessage("");
  userinput.value = "";
  userinput.setAttribute("disabled", "");
  p.classList.add("button");
  p.innerHTML = `<h2 id="newGame">Start new Game</h2>`;
  startOver.appendChild(p);
  playGame = false;

  newGame();
}
function newGame() {
  nb = document.querySelector("#newGame");
  nb.addEventListener("click", function (e) {
    random = Math.round(Math.random() * 100 + 1);
    prevguess = [];
    numofguess = 0;
    guessslot.innerHTML = "";
    end.innerHTML = "";
    remaining.innerHTML = `${10 - numofguess}`;
    userinput.removeAttribute("disabled");
    startOver.removeChild(p);

    playGame = true;
  });
}
