//event handler
var button = document.getElementById('button');
button.addEventListener('click', addItem);

// OPDRACHT

function addItem() {
// dit geeft alle list items
    var todoListItems = document.getElementsByTagName('li');

// dit geeft de UL list

    var ul =
        document.getElementById('todo');

// EEN NIEUW LI ITEM AANMAKEN
    var li = document.createElement('li');
    li.innerHTML = 'Buy dog food';

// HET ELEMENT TOEVOEGEN AAN DE LIJST
    li = ul.appendChild(li);

    todoListItems.innerHTML = li;
}
// 1 MAAK EEN FUNCTIE addItem
// deze wordt aangeroepen door de button in de html

// 2 De functie moet een li item toevoegen aan de bestaande UL
