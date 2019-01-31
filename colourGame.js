var numSquares = 6;
var colours = generateRandomColours(numSquares);
var squares = document.querySelectorAll(".square");
var pickedColour = pickColour();
var colourDisplay = document.getElementById("colourDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var easyButton = document.querySelector("#easyButton");
var hardButton = document.querySelector("#hardButton");

easyButton.addEventListener("click", function(){
    hardButton.classList.remove("selected");
    easyButton.classList.add("selected");
    numSquares = 3;
    colours = generateRandomColours(numSquares);
    pickedColour = pickColour();
    colourDisplay.textContent = pickedColour;
    for(var i = 0; i < squares.length; i++){
        if(colours[i]){
            squares[i].style.backgroundColor = colours[i];
        }
        else {
            squares[i].style.display = "none";
        }
    }
});

hardButton.addEventListener("click", function(){
    hardButton.classList.add("selected");
    easyButton.classList.remove("selected");
    numSquares = 6;
    colours = generateRandomColours(numSquares);
    pickedColour = pickColour();
    colourDisplay.textContent = pickedColour;
    for(var i = 0; i < squares.length; i++){
            squares[i].style.backgroundColor = colours[i];
            squares[i].style.display = "block";
        }
    });

resetButton.addEventListener("click", function(){
    // Generates new colours
    colours = generateRandomColours(numSquares);
    // Pick random colour from array
    pickedColour = pickColour();
    // Change display to match picked colour
    colourDisplay.textContent = pickedColour;
    messageDisplay.textContent = "";
    this.textContent = "New Colours";
    // Change colour of squares
    for(var i = 0; i < squares.length; i++){
        squares[i].style.backgroundColor = colours[i];
    }
    h1.style.backgroundColor = "steelblue";
})

colourDisplay.textContent = pickedColour;

for(var i = 0; i < squares.length; i++){
    //Adds initial colour to squares
    squares[i].style.backgroundColor = colours[i];
    //Add click listeners to squares
    squares[i].addEventListener("click", function(){
    //Take colour of clicked sqaure
    var clickedColour = this.style.backgroundColor;
    //Compare colour to pickedColour
    if(clickedColour === pickedColour){
        messageDisplay.textContent = "Correct";
        resetButton.textContent = "Play Again?";
        changeColours(clickedColour);
        h1.style.backgroundColor = clickedColour;
    } else {
        this.style.backgroundColor = "#232323";
        messageDisplay.textContent = "Try Again"
    }
    });
}

function changeColours(colour){
    // Look through all squares
    for(var i = 0; i < squares.length; i++){
    // Change each square colour
        squares[i].style.backgroundColor = colour;
    }
}

function pickColour(){
    var random = Math.floor(Math.random() * colours.length);
    return colours[random];
}

function generateRandomColours(num){
    var arr = []
    for(var i = 0; i < num; i++){
        arr.push(randomColour())
    }
    return arr;
}

function randomColour(){
    // Pick a red from 0 to 255
    var r = Math.floor(Math.random() * 256);
    // Pick a green from 0 to 255
    var g = Math.floor(Math.random() * 256);
    // Pick a blue from 0 to 255
    var b = Math.floor(Math.random() * 256);
    // "rgb(r, g, b)"
    return "rgb(" + r + ", " + g + ", " + b + ")";
}