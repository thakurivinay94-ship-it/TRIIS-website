let message = "I Love You So Much ❤️ You Are My Forever 💕";
let i = 0;

function typeEffect() {
  if (i < message.length) {
    document.getElementById("text").innerHTML += message.charAt(i);
    i++;
    setTimeout(typeEffect, 50);
  }
}

function openLetter() {
  document.getElementById("letter").style.display = "block";

  typeEffect();

  let music = document.getElementById("music");
  music.play();

  startSlideshow();
}

/* Slideshow */
let images = ["image1.jpeg", "image2.jpeg", "image3.jpeg"];
let index = 0;

function startSlideshow() {
  setInterval(() => {
    index = (index + 1) % images.length;
    document.getElementById("slide").src = images[index];
  }, 2000);
}
