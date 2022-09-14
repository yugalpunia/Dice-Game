// For 1st Dice

var imageNumber = Math.floor(Math.random()*6)+1;

var randomImage = "images/dice"+ imageNumber + ".png";

var image1 = document.querySelectorAll("img")[0];

image1.setAttribute("src", randomImage);




// For 2nd Dice

var imageNumber2 = Math.floor(Math.random()*6)+1;

var randomImage2 = "images/dice" + imageNumber2 + ".png";

var image2 = document.querySelectorAll("img")[1];

image2.setAttribute("src", randomImage2);


// Title

var title = document.querySelectorAll("h1")[0];

if (imageNumber > imageNumber2) {
    document.querySelector("h1").innerHTML = "Player 1 is Winner";
}
else if (imageNumber == imageNumber2){
    document.querySelector("h1").innerHTML = "This is a Draw";
}
else {
    document.querySelector("h1").innerHTML = "Player 2 is Winner";
}
