/**
 * Created by J.W. Taylor Parkins on 27-3-2017.
 */

window.addEventListener("load", init);

var foodInfo;
var kitchen;
var recipe;
var images;

function init() {
    foodInfo = document.getElementById('food');
    foodInfo.addEventListener('click', foodInfoClickHandler);

    getJsonData();
}

function getJsonData() {
    reqwest({
        url: 'php/index.php/',
        contentType: 'application/JSON',
        success: getJsonDataSuccessHandler
    });
}

function getJsonDataSuccessHandler(data){
    console.log(data);
    for (var i = 0; i < data.length; i++) {
        var foodList = data[i];

        //get the div from the html file
        var card = document.getElementById('food');

        // give card a class to style it with css
        card.classList.add('card');

        // create new element and give it a class name
        var name = document.createElement('h2');
        name.classList.add('name');
        name.innerHTML = foodList.name;
        card.appendChild(name);


        var kitchen = document.createElement('p');
        kitchen.classList.add('kitchen');
        kitchen.innerHTML = foodList.kitchen;
        card.appendChild(kitchen);

        var recipe = document.createElement('p');
        recipe.classList.add('recipe');
        recipe.innerHTML = foodList.recipe;
        card.appendChild(recipe);

        for(var y = 0; y < foodList.images.length; y++) {
            var images = document.createElement('img');
            images.setAttribute("src", foodList.images[y]);
            images.classList.add('images');
            images.innerHTML = foodList.images;
            card.appendChild(images);

        }
    }
}

function foodInfoClickHandler(e) {
    var target = e.target;

    if (target.classList.contains('name')) {
        console.log(target);


    }
}
