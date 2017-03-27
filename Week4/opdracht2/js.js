//wait for js to load
window.addEventListener('load', init);
//start js
function init(){
    var form = document.getElementById('New-Guess-Number');
    form.addEventListener('submit', guessPlace);
}

var pictureId = ["img/cars.png", "img/ballonnen.png", "img/goudkistje.png", "img/planes.png"];
console.log(pictureId[1]);

function changeImage1()
{
    document.getElementById("0").src=pictureId[0];
    document.getElementById("1").src="img/vraagteken-plaatje.png";
    document.getElementById("2").src="img/vraagteken-plaatje.png";
    document.getElementById("3").src="img/vraagteken-plaatje.png";
}

function changeImage2()
{
    document.getElementById("0").src="img/vraagteken-plaatje.png";
    document.getElementById("1").src=pictureId[1];
    document.getElementById("2").src="img/vraagteken-plaatje.png";
    document.getElementById("3").src="img/vraagteken-plaatje.png";
}

function changeImage3()
{
    document.getElementById("0").src="img/vraagteken-plaatje.png";
    document.getElementById("1").src="img/vraagteken-plaatje.png";
    document.getElementById("2").src=pictureId[2];
    document.getElementById("3").src="img/vraagteken-plaatje.png";
}

function changeImage4()
{
    document.getElementById("0").src="img/vraagteken-plaatje.png";
    document.getElementById("1").src="img/vraagteken-plaatje.png";
    document.getElementById("2").src="img/vraagteken-plaatje.png";
    document.getElementById("3").src=pictureId[3];
}

shuffleArray(pictureId);

var correctAwnser = pictureId.indexOf("img/goudkistje.png");
correctAwnser +=1;
console.log(correctAwnser);

function guessPlace(e) {

    e.preventDefault();

    var awnser = document.getElementById("guess-number").value;
    if(awnser == correctAwnser){
        window.alert("You guessed right!");
        location.reload();
    }
    else{
        window.alert("Try again!");
        location.reload();
    }
}

function shuffleArray(array) {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
    return array;
}