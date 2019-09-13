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


// Listener
$(".one").on("click", function () {
    total = total + rock1;
    $('#finalTotal').text(total);
    if (total == randomNumber) {
        wins++;
        $("#wins").text(wins);
        alert("You're a winner!!!!!!!!");
        reset();
    } else if (total > randomNumber) {
        losses++;
        $("#losses").text(losses);
        alert("You're a loser........");
        reset();
    }

