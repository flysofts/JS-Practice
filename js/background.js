
const images = ["0.jpg","1.jpg","2.jpg","3.jpg"];

const rdImage = images[Math.floor(Math.random() * images.length)];

const bgImage = document.createElement("img");

bgImage.src = `img/${rdImage}`;

document.body.appendChild(bgImage);