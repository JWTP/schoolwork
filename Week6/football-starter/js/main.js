
//DOM ready
window.addEventListener('load', init);

var playerTBody;
var getUserInput;
/**
 * Initialize application
 */

function init() {
    playerTBody = document.getElementById('players');
    getUserInput = document.getElementById("club-name");

    var form = document.getElementById("club-name");
    form.addEventListener('submit', getUserFormInput);

    getPlayers();
}

/**
 *  retrive all data from the webserice
 */

function getPlayers() {
    // reqwest setup
    reqwest({
        url: 'webservice/players.php',
        contentType: 'application/json',
        success: getPlayersSuccessHandler,
        error: getPlayersErrorHandler
    });
}

function getPlayersByClub(){
    var clubName = getUserInput.value;

    reqwest({
        url: 'webservice/players.php',
        method: 'GET',
        data: {club: clubName},
        contentType: 'application/json',
        success: getPlayersSuccessHandler,
        error: getPlayersErrorHandler
    });
}

function getUserFormInput(e) {
    e.preventDefault();
    getPlayersByClub();
}

/**
 *  Put all the data from the json in html tabel rows
 */

function getPlayersSuccessHandler(data) {
    console.log(data);
    for( var i = 0; i < data.length; i++) {
        var player = data[i];

        // create tabelrow

        var row = document.createElement('tr');

        // create surname

        var cellSurname = document.createElement('td');
        cellSurname.innerHTML = player.surname;
        row.appendChild(cellSurname);

        // create name

        var cellName = document.createElement('td');
        cellName.innerHTML = player.name;
        row.appendChild(cellName);

        // create yellow cards

        var cellYellow = document.createElement('td');
        cellYellow.innerHTML = player.yellow;
        row.appendChild(cellYellow);

        // create red cards

        var cellRed= document.createElement('td');
        cellRed.innerHTML = player.red;
        row.appendChild(cellRed);

        // add the row to the actual tbody
        playerTBody.appendChild(row);
    }

}

function getPlayersErrorHandler(data) {
    console.log("Please fix", data);
}




