# ToDo List Application

This project is a simple ToDo List application that allows users to manage their tasks efficiently. Users can add, edit, and remove tasks, as well as mark them as completed. The tasks are categorized, and each category is displayed on a card with a unique color.

## Features

- **Add Task**: Users can add new tasks to the list.
- **Edit Task**: Users can edit existing tasks.
- **Delete Task**: Users can delete tasks.
- **Mark as Completed**: Users can mark tasks as completed.
- **Category Cards**: Tasks are categorized, and each category is displayed on a card with a unique color.
- **Modal Notification**: A modal is displayed if a task already exists.

## Technologies Used

- **HTML**
- **CSS**
- **JavaScript**

## Usage

Add a Task:

Enter the task in the input field.
Click the "Add" button to add the task to the list.
Edit a Task:

Click the pencil icon (✏️) next to the task you want to edit.
The task text will appear in the input field for editing.
Modify the task and click the "Add" button to save changes.
Delete a Task:

Click the close icon (×) next to the task you want to delete.
Mark a Task as Completed:

Click the checkmark icon (✔) next to the task you want to mark as completed.

## Code Overview

components.js
Contains the core functions for creating and managing the task list and category cards.

````export const toDo = () => [
// Array of category objects with items
];

export const cardColor = [
// Array of colors for cards
];

const getRandomColor = () => {
// Function to get a random color from cardColor array
};

export const cardList = () => {
// Function to create the card list container
};

export const card = (el) => {
// Function to create a card for a given category
// ...
};```

script.js
Contains the event listeners and DOM manipulation logic for adding, editing, and removing tasks.

```btn.addEventListener("click", () => {
const inputValue = input.value.trim().toLowerCase();
const listItems = list.getElementsByTagName("li");
let itemExists = false;

// Check if item already exists
for (let i = 0; i < listItems.length; i++) {
if (
listItems[i].children[1].textContent.trim().toLowerCase() === inputValue
) {
itemExists = true;
break;
}
}
if (itemExists) {
openModal();
} else if (inputValue !== "") {
addItem(inputValue, input, list);
input.value = ""; // Clear the input after adding the item
}
});```
````
