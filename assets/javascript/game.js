// variables for win, losses and the total
var wins = 0;
var losses = 0;
var total = 0;


//randomizer
var rock1 = Math.floor(Math.random() *12) + 1;
var rock2 = Math.floor(Math.random() *12) + 1;
var rock3 = Math.floor(Math.random() *12) + 1;
var rock4 = Math.floor(Math.random() *12) + 1;
// console.log(rock3)

$(".one").on("click", function () {
    total = total + rock1;
    if (total == randomNumber) {
        wins++;
        alert("You're a winner!!!!!!!!");
        reset();
    } else if (total > randomNumber) {
        reset();
    }

