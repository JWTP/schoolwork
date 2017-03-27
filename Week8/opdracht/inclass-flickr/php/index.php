<?php
require_once('C:\xampp\htdocs\CLE 3\Week8\opdracht\inclass-flickr\includes\settings.php');
require_once('C:\xampp\htdocs\CLE 3\Week8\opdracht\inclass-flickr\includes\classes\Flickr.php');

$flickr = new Flickr(FLICKR_KEY, FLICKR_SECRET);
$data = $flickr->search('sun');


//Create instance of class to use for communicating with Flickr webservice
$flickr = new Flickr(FLICKR_KEY, FLICKR_SECRET);
$data = $flickr->search('sun');

//Check to see if the server connects properly
$connection = new mysqli(DB_HOST, DB_USER, DB_PASS, DB_NAME);

$sql = "SELECT * FROM dishes";

$result = mysqli_query($connection, $sql);

//TODO: from here on it's up to you!

while ($row = $result->fetch_assoc()) {
    $name = $row['name'];
    $description = $row['description'];
    $recipe = $row['recipe'];
    $score = $row['score'];
    $kitchens_id = $row['kitchens_id'];
    $data = $flickr->search($name);
    $id_photo0 = $data['photos']['photo'][0]['id'];
    $id_photo1 = $data['photos']['photo'][1]['id'];
    $id_photo2 = $data['photos']['photo'][2]['id'];
    $id_photo3 = $data['photos']['photo'][3]['id'];
    $id_photo4 = $data['photos']['photo'][4]['id'];
    $id_photo = array($id_photo0,$id_photo1,$id_photo2,$id_photo3,$id_photo4);


    echo  '<pre>';
    $array[$name] = array_merge(
        ['photo id' => $id_photo] ,
        ['description' => $description],
        ['recipe' => $recipe],
        ['score' => $score],
        ['kitchen id' => $kitchens_id]
    );
}

header("Content-type: application/json");
echo json_encode($array);

