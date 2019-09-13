//document ready function
$(document).ready(function () {

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

    var randomNumber = Math.floor(Math.random() * 102) + 19;
    $("#randomNumber").text(randomNumber);

    //Reseter
    function reset() {
        randomNumber = Math.floor(Math.random() * 102) + 19;

        $("#randomNumber").text(randomNumber);
        total = 0;
        $("#finalTotal").text(total);
        rock1 = Math.floor(Math.random() * 12) + 1;
        console.log(rock1);
        rock2 = Math.floor(Math.random() * 12) + 1;
        console.log(rock2);
        rock3 = Math.floor(Math.random() * 12) + 1;
        console.log(rock3);
        rock4 = Math.floor(Math.random() * 12) + 1;
        console.log(rock4);

    }

    // Listeners
    $(".one").on("click", function () {
        total = total + rock1;
        $('#finalTotal').text(total);
        if (total == randomNumber) {
            wins++;
            $("#wins").text(wins);
            alert("!!!WINNER!!!");
            reset();
        } else if (total > randomNumber) {
            losses++;
            $("#losses").text(losses);
            alert("!!!LOSER!!!");
            reset();
        }

    });

    $(".two").on("click", function () {
        total = total + rock2;
        $('#finalTotal').text(total);
        if (total == randomNumber) {
            wins++;
            $("#wins").text(wins);
            alert("!!!WINNER!!!");
            reset();
        } else if (total > randomNumber) {
            losses++;
            $("#losses").text(losses);
            alert("!!!LOSER!!!");
            reset();
        }

    });

    $(".three").on("click", function () {
        total = total + rock3;
        $('#finalTotal').text(total);
        if (total == randomNumber) {
            wins++;
            $("#wins").text(wins);
            alert("!!!WINNER!!!");
            reset();
        } else if (total > randomNumber) {
            losses++;
            $("#losses").text(losses);
            alert("!!!LOSER!!!");
            reset();
        }

    });

    $(".four").on("click", function () {
        total = total + rock4;
        $('#finalTotal').text(total);
        if (total == randomNumber) {
            wins++;
            $("#wins").text(wins);
            alert("!!!WINNER!!!");
            reset();
        } else if (total > randomNumber) {
            losses++;
            $("#losses").text(losses);
            alert("!!!LOSER!!!");
            reset();
        }

    });

});
