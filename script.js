console.log("JS IS WORKING LEZGAW");

const overlay = document.getElementById("introOverlay");
const music = document.getElementById("bgM");

overlay.addEventListener("click", () => {
  music.play();

  overlay.style.opacity = "0";

  setTimeout(() => {
    overlay.style.display = "none";
  }, 1000);
});

const yesBtn = document.getElementById("yes");
const noBtn = document.getElementById("no");
const container = document.querySelector(".container");
const catMeme = document.getElementById("catMeme");
const meowSound = document.getElementById("catSound");
const noSound = document.getElementById("noSound");


yesBtn.addEventListener("click", function(){
    alert("Yay! Love you puuu");

    catMeme.style.display = "block";
    setTimeout(() => {
  catMeme.style.transform = "scale(1)";
}, 10);

    meowSound.play();
})

noBtn.addEventListener("click", function(){
    noSound.play();

    const containerRect = container.getBoundingClientRect();
    const maxX = containerRect.width - noBtn.offsetWidth + 50;
    const maxY = containerRect.height - noBtn.offsetHeight + 50;

    const randomX = Math.floor(Math.random() * maxX) - 25;
    const randomY = Math.floor(Math.random() * maxY) - 25;

    noBtn.style.position = "absolute";
    noBtn.style.left = `${randomX}px`;
    noBtn.style.top = `${randomY}px`;
})
