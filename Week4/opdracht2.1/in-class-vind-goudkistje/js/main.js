window.addEventListener('load', init);

/**
 * Initialize after the DOM is ready
 */
function init()
{
    var img = document.getElementById("");
    img.addEventListener("click", playingFieldClickHandler);

    var form = document.getElementById("playing-field");
    form.addEventListener("submit", formSubmitHandler)
}

/**
 * Generate the playing field dynamically with all the available images
 */
function createPlayField()
{

}

/**
 * Show the card by its front so the player knows whats going on
 *
 * @param e
 */
function playingFieldClickHandler(e)
{

}

/**
 * Handler for when the form is submitted
 *
 * @param e
 */
function formSubmitHandler(e)
{
    e.preventDefault()
    var awnser = document.getElementById("guess-number").value;
    return awnser;

}

function clearSubmit() {
    document.getElementById('guess-number').value = "";
}

/**
 * Write text for the user as feedback of their answer
 *
 * @param text
 */
function writeAlertBox(text)
{
    e.preventDefault();
    var input = document.getElementById("guessNumber").value;
    if(formSubmitHandler(e) = '3'){
        window.alert("You guessed right!");
        clearSubmit();
    }
    else{
        window.alert("Try again!");
        clearSubmit();
    }

}

/**
 * Randomize array element order in-place.
 * Using Durstenfeld shuffle algorithm.
 * @link http://stackoverflow.com/a/12646864
 *
 * @param array
 * @returns {*}
 */
function shuffleArray(array)
{
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
    return array;
}
