var numofsquare = 6;
var colors = generateRandomColor(numofsquare);
var squares = document.querySelectorAll(".square");
var tpickedColor = fpickedColor();
var colorDisplay = document.getElementById("picked");
var messageDisplay = document.querySelector("#message");
var h1d = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var easybtn = document.querySelector("#easybtn");
var hardbtn = document.querySelector("#hardbtn");

//adding events for each button

easybtn.addEventListener("click", function() {
    hardbtn.classList.remove("selected");
    easybtn.classList.add("selected");
    numofsquare = 3;
    colors = generateRandomColor(numofsquare);
    tpickedColor = fpickedColor();
    colorDisplay.textContent = tpickedColor;
    for (var i = 0; i < squares.length; i++) {
        if (colors[i]) {
            squares[i].style.backgroundColor = colors[i];
        } else {
            squares[i].style.display = "none";
        }
    }
});

hardbtn.addEventListener("click", function() {
    hardbtn.classList.add("selected");
    easybtn.classList.remove("selected");
    numofsquare = 6;
    colors = generateRandomColor(numofsquare);
    tpickedColor = fpickedColor();
    colorDisplay.textContent = tpickedColor;
    for (var i = 0; i < squares.length; i++) {

        squares[i].style.backgroundColor = colors[i];
        squares[i].style.display = "block";

    }
});

resetButton.addEventListener("click", function() {
    colors = generateRandomColor(numofsquare);
    tpickedColor = fpickedColor();
  messageDisplay.textContent = "";
    colorDisplay.textContent = tpickedColor;
    for (var i = 0; i < squares.length; i++) {
        squares[i].style.backgroundColor = colors[i];
    }
    h1d.style.backgroundColor = "steelblue";

});



colorDisplay.textContent = tpickedColor;

for (var i = 0; i < squares.length; i++) {
    //asquares[i].style.backgroundColor = colors[i];dding initial colors
    squares[i].style.backgroundColor = colors[i];
    //adding clicklistner
    squares[i].addEventListener("click", function() {
        //grab a color from clikced, and compare with picked color
        var ClickedColor = this.style.backgroundColor;
        if (ClickedColor === tpickedColor) {
            messageDisplay.textContent = "Correct!";
            resetButton.textContent = "Play again?";
            changeColor(ClickedColor);
            h1d.style.backgroundColor = ClickedColor;
        } else {
            this.style.backgroundColor = "#232323";
            messageDisplay.textContent = "Please try again!";
        }
    });
}

function changeColor(color) {
    //loop to change colors to given color
    for (var i = 0; i < squares.length; i++) {
        squares[i].style.backgroundColor = color;
    }
};


function fpickedColor() {

    var random = Math.floor(Math.random() * colors.length);
    return colors[random];

};

function generateRandomColor(num) {
    var arr = [];

    for (var i = 0; i < num; i++) {
        arr.push(randomColor());
    }

    return arr;
};


function randomColor() {
    var r = Math.floor(Math.random() * 256);
    var g = Math.floor(Math.random() * 256);
    var b = Math.floor(Math.random() * 256);

    return "rgb(" + r + ", " + g + ", " + b + ")";

};
