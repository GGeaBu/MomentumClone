const images = [
    "0.jpg",
    "1.jpg",
    "2.jpg",
    "3.jpg",
    "4.jpg",
    "5.jpg",
    "6.jpg",
    "7.jpg",
];

const chosenImage = images[Math.floor(Math.random()*images.length)];

// js에서 html을 만들고 이를 html에 추가하는 것
const bgImage = document.createElement("img");
bgImage.src = `img/${chosenImage}`;

// html의 body에 태그를 추가
document.body.appendChild(bgImage);