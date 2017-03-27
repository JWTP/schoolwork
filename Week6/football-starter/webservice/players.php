<?php
require_once("includes/settings.php");
$mysqli = new mysqli(DB_HOST, DB_USER, DB_PASS, DB_NAME);

//Retrieve all players
$query = 'SELECT p.name, p.surname, c.red, c.yellow 
          FROM players as p 
          INNER JOIN cards as c ON c.player = p.id';

$club = isset($_GET['club']) ? $_GET['club'] : null;         //PHP 7: $club = $_GET['club'] ?? null;

if (!empty($club)) {
    $query .= " WHERE p.club='" . $mysqli->real_escape_string($club). "'";
 }

//Create players array for all te results from the query
$players = [];

//Execute query & loop the results from the query and add them to the players array
if ($result = $mysqli->query($query)) {
    while ($row = $result->fetch_assoc()) {
        $players[] = $row;
    }
}

//Free result set & close connection
$result->close();
$mysqli->close();

//Set the header to tell the client some json is coming its way
header("Content-Type: application/json");
echo json_encode($players);
exit;
