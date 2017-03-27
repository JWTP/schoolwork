//event handler
var form = document.getElementById('new-todo-form');
form.addEventListener('submit', addItem);

function addItem(e) {
    e.preventDefault();
// dit geeft alle list items
    var todoListItems = document.getElementsByTagName('li');

// dit geeft de UL list
    var ul = document.getElementById('todo');

// input uit form ophalen
    var input = document.getElementById("inputfield").value;

// EEN NIEUW LI ITEM AANMAKEN
    var li = document.createElement('li');
    li.innerHTML = input;

// HET ELEMENT TOEVOEGEN AAN DE LIJST
    input = ul.appendChild(li);
    
    todoListItems.innerHTML = input;

// clear the input field
    document.getElementById('inputfield').value = "";
}

// OPDRACHT

// de functie addItem moet nu kijken wat er in het formulier is ingevuld
// deze waarde moet toegevoegd worden aan de todo list
