
var Randomnumber1 = Math.floor(Math.random() * 6) + 1;
var randomdiceImage1 = "dice" + Randomnumber1 + ".png";
var randomImagesource1 = "images/" + randomdiceImage1;
document.querySelectorAll("img")[0].setAttribute("src", randomImagesource1);


var Randomnumber2 = Math.floor(Math.random() * 6) + 1;
var randomImagesource2 = "images/dice" + Randomnumber2 + ".png";
document.querySelectorAll("img")[1].setAttribute("src", randomImagesource2);


if (Randomnumber1 > Randomnumber2) {
  document.querySelector("h1").innerHTML = "Player 1 Wins!";
} else if (Randomnumber1 < Randomnumber2) {
  document.querySelector("h1").innerHTML = "Player 2 Wins!";
} else {
  document.querySelector("h1").innerHTML = "Draw!";
}


document.getElementById("playButton").addEventListener("click", function () {
  location.reload(); 
});
