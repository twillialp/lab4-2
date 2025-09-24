// --- Task 1: Array Manipulation Basics & Task 2: Filter and Search ---

let shoppingList = [];

/**
 * Adds an item to the shopping list, but only if it's not already present.
 * This function covers requirements from Task 1 and Task 2.
 * @param {string} item - The item to add to the list.
 */
function addItem(item) {
  const trimmedItem = item.trim();
  if (trimmedItem === "") {
    console.log("Cannot add an empty item.");
    return;
  }
  if (!shoppingList.includes(item)) {
    shoppingList.push(item);
    console.log(`${item} added to the shopping list.`);
  } else {
    console.log(`${item} is already in the shopping list.`);
  }
}

/**
 * Removes the last item from the shopping list.
 * This function covers a requirement from Task 1.
 */
function removeLastItem() {
  if (shoppingList.length > 0) {
    const removedItem = shoppingList.pop();
    console.log(`${removedItem} was removed from the list.`);
  } else {
    console.log("The shopping list is already empty.");
  }
}

/**
 * Logs all items in the shopping list to the console.
 * This function covers a requirement from Task 1.
 */
function displayList() {
  console.log("Shopping List:");
  shoppingList.forEach(item => console.log(`- ${item}`));
}

/**
 * Filters the shopping list for items containing a search term (case-insensitive).
 * This function covers a requirement from Task 2.
 * @param {string} searchTerm - The term to search for.
 * @returns {string[]} An array of matching items.
 */
function filterItems(searchTerm) {
  return shoppingList.filter(item => item.toLowerCase().includes(searchTerm.toLowerCase()));
}

// --- Task 3: Render the List in the Browser ---

// Select DOM elements
const input = document.getElementById("item-input");
const addButton = document.getElementById("add-btn");
const itemsUl = document.getElementById("shopping-list");
const removeBtn = document.getElementById("remove-btn");

/**
 * Adds an item from the input field to the array and the displayed list.
 * It prevents adding empty or duplicate items.
 */
function addAndDisplayItems() {
    const newItem = input.value.trim();
    if (newItem && !shoppingList.includes(newItem)) {
        addItem(newItem); // Use the existing logic to add to the array
        const li = document.createElement('li');
        li.textContent = newItem;
        itemsUl.appendChild(li);
        input.value = ""; // Clear the input
    } else if (shoppingList.includes(newItem)) {
        alert(`${newItem} is already on the list.`);
    }
    input.focus();
}

/**
 * Removes the last item from the array and the displayed list.
 */
function removeLastItemAndUpdate() {
    if (shoppingList.length > 0) {
        removeLastItem(); // Use the existing logic to remove from the array
        if (itemsUl.lastElementChild) {
            itemsUl.lastElementChild.remove();
        }
    } else {
        alert("The shopping list is empty.");
    }
}

// Add event listeners if the buttons exist on the page
if (addButton) {
    addButton.addEventListener('click', addAndDisplayItems);
}
if (removeBtn) {
    removeBtn.addEventListener('click', removeLastItemAndUpdate);
}
if (input) {
    input.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') {
            addAndDisplayItems();
        }
    });
}
