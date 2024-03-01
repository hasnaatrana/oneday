var counter = 0;
var yesCounter = 0;
$("#yesBtn").click(function() {
    yesCounter++;
    $("#dextahImg").attr("src", "./images/dexter_yes!.jpg");
    $("#dextahImg").css("height", "650px");
    makeItRain();
    if(yesCounter == 1){
        var audio = new Audio("./sounds/happy-song.mp3");
        audio.play();
    }
    $(".txt").text("WOOOOO!!! You made the right choice!!! :)))");
    $("#noBtn").remove();
    $("#yesBtn").removeClass("slightlyLarger mediumSize superLarge");
    $("html").css("background-color", "#a8479d");
    $("#yesBtn").css("background-color", "#0c0a2b");
    
});

$("#noBtn").click(function(){
    counter +=1;
    if (counter == 1){
        $("#dextahImg").attr("src", "./images/dexter-sad1.jpg");
        $("#dextahImg").css("height", "500px");
        $("#yesBtn").addClass("slightlyLarger");
        $("#noBtn").addClass("slightlySmaller");
    }
    if(counter == 2){
        $("#dextahImg").attr("src", "./images/dexter-sad2.jpg");
        $("#dextahImg").css("height", "600px");
        $("#yesBtn").removeClass("slightlyLarger").addClass("mediumSize");
        $("#noBtn").removeClass("slightlySmaller").addClass("smaller");
    }
    if(counter == 3){
        $("#dextahImg").attr("src", "./images/dexter-sad3.jpg");
        $("#dextahImg").css("height", "650px");
        $("#yesBtn").removeClass("slightlyLarger mediumSize").addClass("superLarge");
        $("#noBtn").removeClass("slightlySmaller smaller").addClass("superSmall");
    }
    if(counter == 4){
        $("#dextahImg").attr("src", "./images/dexter_crying.jpg");
        $("#yesBtn").removeClass("slightlyLarger mediumSize superLarge");
        $("#noBtn").removeClass("slightlySmaller smaller superSmall");
        var audioSad = new Audio("./sounds/sad-song.mp3");
        audioSad.play();
        $("#noBtn").remove();
        $(".txt").text("See, look at what you've done. Nice job you heartless fool. :(");
        $("html").css("background-color", "#3d3b63");
        $("#yesBtn").css("background-color", "#0c0a2b");

    }
});


function makeItRain() {
    const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
    const confettiCount = 500; // Number of confetti pieces
    const confettiContainer = document.createElement('div');
    document.body.appendChild(confettiContainer);

    for (let i = 0; i < confettiCount; i++) {
        const confetti = document.createElement('div');
        confetti.className = 'confetti ' + colors[Math.floor(Math.random() * colors.length)];
        confetti.style.left = `${Math.random() * window.innerWidth}px`;
        confetti.style.animationDuration = `${Math.random() * 7 + 2}s`; // Randomize duration
        confetti.style.opacity = 1;
        confetti.style.transform = `scale(${Math.random()})`; // Randomize size
        confetti.style.animationName = 'confetti-fall';
        confettiContainer.appendChild(confetti);
    }
}

$('.confetti').on('animationend', function(){
    $(this).remove();
});








