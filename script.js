let score = 0;
const snitch = document.getElementById("snitch");
const scoreboard = document.getElementById("score");

function moveSnitch() {
  let x = Math.random() * (window.innerWidth - 50);
  let y = Math.random() * (window.innerHeight - 50);
  snitch.style.left = `${x}px`;
  snitch.style.top = `${y}px`;
}

snitch.addEventListener("click", function () {
  score++;
  scoreboard.textContent = score;
  moveSnitch();
});

setInterval(moveSnitch, 1000);
