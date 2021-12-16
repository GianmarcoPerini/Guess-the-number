let body = document.querySelector("body");
let input = document.querySelector(".guess");
let button = document.querySelector(".check");
let num = document.querySelector(".number");
let score = document.querySelector(".score");
let totScore = 20;
let hScore = document.querySelector(".highscore");
let msg = document.querySelector(".message");
let again = document.querySelector(".again");
let reset = document.querySelector(".reset");
let random = getRandom(1, 20);

window.onload = input.value = 0;
displyMessage(hScore, getScore());

button.addEventListener("click", function () {
  if (!input.value) {
    displyMessage(msg, "⛔️ No number!");
  } else {
    if (totScore < 1) {
      body.style.background = "#fa3737";
      displyMessage(msg, "💥 You lost the game!");
      input.disabled = true;
    } else {
      if (input.value != random) {
        input.value < random
          ? displyMessage(msg, "📉 Too low!")
          : displyMessage(msg, "📈 Too high!");
        totScore--;
        displyMessage(score, totScore);
      } else {
        num.style.width = "30rem";
        num.style.transition = "all 300ms";
        displyMessage(num, random);
        displyMessage(msg, "🎉 WINNER!!");
        displyMessage(hScore, getScore()); // gain the hight score value
        displyMessage(score, totScore); // set the temporary win score value
        body.style.background = "#60b347";
        input.disabled = true;
        // if there is new greater HS value
        if (getScore() < totScore) {
          setScore(totScore); // set new HS
          displyMessage(hScore, getScore()); // and get it
        }
      }
    }
  }
});
console.log(random);

// reload page
again.addEventListener("click", function () {
  window.location.reload();
  input.value = 0;
});

// reset localstorage score to 0 and set the HS counter
reset.addEventListener("click", function () {
  setScore(0);
  displyMessage(hScore, getScore());
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

function displyMessage(where, what) {
  return (where.innerHTML = what);
}
