window.addEventListener("load", init);

var movieGallery;
/**
 * Initialize the application (after DOM ready)
 */
function init()
{
    movieGallery = document.getElementById('movies');
    movieGallery.addEventListener('click', movieGalleryClickHandler);

    //Check the API URL; http://swapi.co/api/
    getStarWarsData();
}

function getStarWarsData(){

    reqwest({
        url: 'http://swapi.co/api/films/',
        contentType: 'application/json',
        headers: {
            'Accept': 'application/json'
        },
        success: getStarWarsSuccessHandler
        //error: getStarWarsErrorHandler
    });
}

function getStarWarsSuccessHandler(data) {
    console.log(data);
    for (var i = 0; i < data.results.length; i++) {
        var movies = data.results[i];

        var card = document.getElementById('movies');
        card.classList.add('card');

        var title = document.createElement('h2');
        title.classList.add('title');
        title.innerHTML = movies.title;
        card.appendChild(title);

        var director = document.createElement('h3');
        director.classList.add('director');
        director.innerHTML = movies.director ;
        card.appendChild(director);

        var release_date = document.createElement('h3');
        release_date.classList.add('release_date');
        release_date.innerHTML = movies.release_date;
        card.appendChild(release_date);

        var opening_crawl = document.createElement('p');
        opening_crawl.classList.add('opening_crawl');
        opening_crawl.innerHTML = movies.opening_crawl;
        card.appendChild(opening_crawl);

        var link = document.createElement('a');
        link.classList.add('show-actors');
        link.innerHTML = 'show details';
        card.appendChild(link);



    }
}

function movieGalleryClickHandler(e) {
    var target = e.target;
        console.log(target);

    // if(target.classList.contains('show-actors')){
    //     console.log(target);

    // }
}