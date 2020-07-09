
var randomN = Math.floor(Math.random() * 6) + 1;
var randomDiceImg = "dice" + randomN + ".png";
var randomImgSrc = "images/" + randomDiceImg;
var img1 = document.querySelectorAll("img")[0];
img1.setAttribute("src", randomImgSrc);


var randomN2 = Math.floor(Math.random() * 6) +1;
var randomImgSrc2 = "images/dice" + randomN2 + ".png";
document.querySelectorAll("img")[1].setAttribute("src", randomImgSrc2);


if (randomN > randomN2) {
    document.querySelector("h1").innerHTML = "Player 1 WINS!!"
}
else if (randomN < randomN2) {
    document.querySelector("h1").innerHTML = "Player 2 WINS!!"
}
else {
    document.querySelector("h1").innerHTML = "It's a DRAW!!"
}