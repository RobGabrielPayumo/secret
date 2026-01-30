console.log("JS IS WORKING LEZGAW");

const yesBtn = document.getElementById("yes");
const noBtn = document.getElementById("no");
const container = document.querySelector(".container");

yesBtn.addEventListener("click", function(){
    alert("Yay! Love you puuu");
})

noBtn.addEventListener("click", function(){
    const containerRect = container.getBoundingClientRect();
    const maxX = containerRect.width - noBtn.offsetWidth + 50;
    const maxY = containerRect.height - noBtn.offsetHeight + 50;

    const randomX = Math.floor(Math.random() * maxX) - 25;
    const randomY = Math.floor(Math.random() * maxY) - 25;

    noBtn.style.position = "absolute";
    noBtn.style.left = `${randomX}px`;
    noBtn.style.top = `${randomY}px`;
})