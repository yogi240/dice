var randomNumber1 = Math.floor(Math.random() * 6) + 1;

var randomDiceImage  = "dice"+ randomNumber1 + ".png";

 var randomImageSource = "images/" + randomDiceImage;//images/dices.png-images/dices.png

 var image1 = document.querySelectorAll("img")[0];

 image1.setAttribute("src", randomImageSource);


// sec img1


var randomNumber2 = Math.floor(Math.random() * 6) + 1;

var randomImageSource2 = "images/dice" + randomNumber2 + ".png";//images/dices.png-images/dices.png

document.querySelectorAll("img")[1].setAttribute("src", randomImageSource2);

// WIN
if(randomNumber1 > randomNumber2) {
  document.querySelector("h1").innerHTML = " ** player 1 Wins !";
}else if(randomNumber2 > randomNumber1) {
  document.querySelector("h1").innerHTML = " player 2 Wins ! **";
}else
{
    document.querySelector("h1").innerHTML = " Draw !";
}
