const num1 = Math.ceil(Math.random() * 10);
const num2 = Math.ceil(Math.random() * 10);

let score = JSON.parse(localStorage.getItem("score"));

if (!score) {
  score = 0;
}

const scoreE1 = document.getElementById("score");
scoreE1.innerText = `score: ${score}`;
const questionE1 = document.getElementById("question");

const inpE1 = document.getElementById("input");

const formE1 = document.getElementById("form");

questionE1.innerText = `What is ${num1} multiplied by ${num2}?`;

const crtAns = num1 * num2;

formE1.addEventListener("submit", () => {
  const userAns = +inpE1.value;
  if (userAns == crtAns) {
    score++;
    updateScore();
  } else {
    score--;
    updateScore();
  }
  if (score == 10) {
    swal({
      title: "Great Job",
      type: "success",
    });
    localStorage.clear();
  }
});

function updateScore() {
  localStorage.setItem("score", JSON.stringify(score));
}
