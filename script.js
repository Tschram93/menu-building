// Selectors
const addItems = document.querySelector('.add-items');
const itemsList = document.querySelector('.plates');
// Empty Array where items will be stored
const items = [];

// Event Listener
addItems.addEventListener('submit', addItem);

// Functions
// Adds Item to the list
function addItem(e) {
    e.preventDefault();
    const text = (this.querySelector('[name=item]')).value;
    const item = {
        text: text,
        done: false
    }
    items.push(item)
    populateList(items, itemsList);
    this.reset();
}

function populateList(plates = [], platesList) {
    platesList.innerHTML = plates.map((plate, i) => {
        return `
        <li>
            <input type="checkbox" data-index${i} id="item"item${i} ${plate.done ? 'checked':''}"/>
            <label for="item${i}">${plate.text}</labedl>
        </li>
        `;
    }).join('');
}