let input = document.querySelector(".guess");
let button = document.querySelector(".check");
let score = document.querySelector(".score");
let msg = document.querySelector(".message");
let body = document.querySelector("body");
let again = document.querySelector(".again");
let hScore = document.querySelector(".highscore");
let reset = document.querySelector(".reset");
let random = getRandom(1, 20);
let totScore = 20;

window.onload = input.value = 0;
hScore.innerHTML = getScore();

button.addEventListener("click", function () {
  if (!input.value) {
    msg.innerHTML = "⛔️ No number!";
  } else {
    if (totScore == 0) {
      body.style.background = "red";
      msg.innerHTML = "💥 You lost the game!";
      input.disabled = true;
    } else {
      if (input.value > random) {
        totScore--;
        msg.innerHTML = "📈 Too high!";
        score.innerHTML = `${totScore}`;
      } else if (input.value < random) {
        totScore--;
        msg.innerHTML = "📉 Too low!";
        score.innerHTML = `${totScore}`;
      } else {
        msg.innerHTML = "WINNER!!";
        hScore.innerHTML = getScore(); // gain the hight score value
        score.innerHTML = `${totScore}`; // set the temporary win score value
        body.style.background = "green";
        input.disabled = true;
        // if there is new greater HS value
        if (getScore() < totScore) {
          setScore(totScore); // set new HS
          hScore.innerHTML = getScore(); // and get it
        }
      }
    }
  }
});

// reload page
again.addEventListener("click", function () {
  window.location.reload();
  input.value = 0;
});

// reset localstorage score to 0 and set the HS counter
reset.addEventListener("click", function () {
  setScore(0);
  hScore.innerHTML = getScore();
});

// function to set score at define value on localstorage
function setScore(totScore) {
  localStorage.setItem("score", totScore);
}
// gain value from localstorage
function getScore() {
  return localStorage.getItem("score");
}
// get random int number from min to max inclusive
function getRandom(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min);
}
