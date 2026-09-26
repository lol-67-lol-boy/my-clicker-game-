let score = 0;
document.getElementById('click-btn').addEventListener('click', function() {
  score = score + 1;
  document.getElementById('score').innerText = "Score: " + score;
});
