<?php
require_once('C:\xampp\htdocs\CLE 3\Week8\assignment\includes\settings.php');
require_once('C:\xampp\htdocs\CLE 3\Week8\assignment\includes\classes\Flickr.php');

//Create instance of class to use for communicating with Flickr webservice
$flickr = new Flickr(FLICKR_KEY, FLICKR_SECRET);

//Check to see if the server connects properly
$connection = new mysqli(DB_HOST, DB_USER, DB_PASS, DB_NAME);

//Define the returnData for the client
$returnData = [];

//Get the required data from the database
$dishQuery = "SELECT d.id, d.name, d.recipe, k.name AS kitchen FROM dishes AS d
              LEFT JOIN kitchens AS k ON d.kitchen_id = k.id";
$dishResult = $connection->query($dishQuery);

//Loop to combine data from 2 tables & flickr
while ($dishRow = $dishResult->fetch_assoc()) {
    $dish = [];

    //Retrieve all the tags from the current dish
    $tagQuery = "SELECT t.name FROM dish_tag AS dt
                 LEFT JOIN tags AS t ON dt.tag_id = t.id
                 WHERE dt.dish_id = '" . $dishRow['id'] . "'";
    $tagResult = $connection->query($tagQuery);

    //Add tags to an PHP array
    while ($tagRow = $tagResult->fetch_assoc()) {
        $dish['tags'][] = $tagRow['name'];
    }
    //Free the result
    $tagResult->close();

    //Find images by name (can use anything as parameter though)
    $flickrImages = $flickr->getImageUrls($dishRow['name']);

    //Merge all the data together
    $dish = array_merge([
        "id" => $dishRow['id'],
        "name" => $dishRow['name'],
        "recipe" => $dishRow['recipe'],
        "kitchen" => $dishRow['kitchen'],
        "images" => $flickrImages
    ], $dish);

    //Add data to overall array
    $returnData[] = $dish;
}
//Free the result and close the connection
$dishResult->close();
$connection->close();

//Set the header & output JSON so the client will know what to expect.
header("Content-Type: application/json");
echo json_encode($returnData);
exit;
