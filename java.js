var randomvariable1 = Math.floor(Math.random()*6 +1);

if (randomvariable1 === 1) {
    document.querySelector(".img1").setAttribute("src", "./images/dice1.png");
} else if (randomvariable1 === 2) {
    document.querySelector(".img1").setAttribute("src", "./images/dice2.png");
} else if (randomvariable1 === 3) {
    document.querySelector(".img1").setAttribute("src", "./images/dice3.png");
} else if (randomvariable1 === 4) {
    document.querySelector(".img1").setAttribute("src", "./images/dice4.png");
} else if (randomvariable1 === 5) {
    document.querySelector(".img1").setAttribute("src", "./images/dice5.png");
} else {
    document.querySelector(".img1").setAttribute("src", "./images/dice6.png");
} 





var randomvariable2 = Math.floor(Math.random() * 6 + 1);

if (randomvariable2 === 1) {
    document.querySelector(".img2").setAttribute("src", "./images/dice1.png");
} else if (randomvariable2 === 2) {
    document.querySelector(".img2").setAttribute("src", "./images/dice2.png");
} else if (randomvariable2 === 3) {
    document.querySelector(".img2").setAttribute("src", "./images/dice3.png");
} else if (randomvariable2 === 4) {
    document.querySelector(".img2").setAttribute("src", "./images/dice4.png");
} else if (randomvariable2 === 5) {
    document.querySelector(".img2").setAttribute("src", "./images/dice5.png");
} else {
    document.querySelector(".img2").setAttribute("src", "./images/dice6.png");
} 


if (randomvariable1 > randomvariable2) {
    document.querySelector(".ans").textContent = "player 1 wins";
} else if(randomvariable1 < randomvariable2) {
    document.querySelector(".ans").textContent = "player 2 wins";
} else if(randomvariable1 === randomvariable2) {
    document.querySelector(".ans").textContent = "draw";
}
