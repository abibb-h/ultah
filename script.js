const btn = document.getElementById("btn");
const music = document.getElementById("music");

btn.addEventListener("click", () => {
  music.play();

  // Confetti effect
  for (let i = 0; i < 60; i++) {
    let confetti = document.createElement("div");
    confetti.className = "confetti";
    confetti.style.left = Math.random() * 100 + "vw";
    confetti.style.background = ["#ff4081","yellow","blue","green","purple","orange"][Math.floor(Math.random()*6)];
    confetti.style.animationDuration = (2 + Math.random() * 3) + "s";
    confetti.style.width = confetti.style.height = (6 + Math.random() * 8) + "px";
    document.body.appendChild(confetti);

    setTimeout(() => confetti.remove(), 5000);
  }
});
