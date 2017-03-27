//opdracht
//1. voeg een ‘click event handler’ toe aan een listitem. De inhoud van het list item wordt in de console gezet

window.addEventListener('load', init);

/**
 * Execute after document is fully loaded
 */
function init()
{
    var list = document.getElementById("todo");
    list.addEventListener("click", liClickHandler );

    var form = document.getElementById("new-todo-form");
    form.addEventListener("submit", formSubmitHandler);
}

function changeColor(e) {
    e.preventDefault();


}
/**
 * Handler for the form submit event
 *
 * @param e
 */
function formSubmitHandler(e)
{
    e.preventDefault(); //leave this one out to see te result
}

/**
 * Handler for clicking on a list item
 *
 * @param e
 */

function liClickHandler(e)
{
    var target = e.target;
    console.log(e.target); //i want to know which li is clicked
    target.style.color='blue';
    if (target.nodeName == "LI"){
        target.classList.add('yellow');
        console.log("alleen LI");
    }
}

var form = document.getElementById('new-todo-form');
form.addEventListener('submit', addItem);

function addItem(e) {
    e.preventDefault();
// dit geeft alle list items
    var todoListItems = document.getElementsByTagName('li');

// dit geeft de UL list
    var ul = document.getElementById('todo');

// input uit form ophalen
    var input = document.getElementById("todo-input").value;

// EEN NIEUW LI ITEM AANMAKEN
    var li = document.createElement('li');
    li.innerHTML = input;

// HET ELEMENT TOEVOEGEN AAN DE LIJST
    input = ul.appendChild(li);

    todoListItems.innerHTML = input;

// clear the input field
    document.getElementById('todo-input').value = "";
}