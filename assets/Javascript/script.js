// Get the to-do form element
const todoForm = document.getElementById('todoForm');
// Get the input field for adding to-do items
const addItem = document.getElementById('todoInput');
// Get the list element to display to-do items
const ItemList = document.getElementById('todoList');
todoForm.addEventListener('submit', function (event) {
  // Prevent form submission
  event.preventDefault();
  // Get the trimmed value of the input field
  const description = addItem.value.trim();
  if (description !== '') {
    // Create a new to-do item
    const ListItem = createList(description);
    // Add the new to-do item to the list
    ItemList.appendChild(ListItem);
    // Clear the input field
    addItem.value = '';
  }
});

function createList(description) {
  // Create a new list item element for the to-do item
  const ListItem = document.createElement('li');
  ListItem.classList.add('todo-item');
  // Create an input element for the checkbox
  const checkedItem = document.createElement('input');
  // Set the type to 'checkbox'
  checkedItem.type = 'checkbox';
  checkedItem.addEventListener('change', function () {
    // Call the checkBoxChanged function when the checkbox is changed
    checkBoxChanged(ListItem);
  });
  // Create a span element for the to-do text
  const descriptionArea = document.createElement('span');
  // Set the text content of the span element
  descriptionArea.textContent = description;
  // Create a button element for editing the to-do item
  const editButton = document.createElement('button');
  // Set the text content of the button
  editButton.textContent = 'Edit';
  editButton.classList.add('edit-button');
  // Call the editTodoItem function when the button is clicked
  editButton.addEventListener('click', function () {
    editTodoItem(ListItem);
  });
  // Create a button element for removing the to-do item
  const removeButton = document.createElement('button');
  // Set the text content of the button
  removeButton.textContent = 'Remove';
  removeButton.classList.add('remove-button');
  // Call the removeTodoItem function when the button is clicked
  removeButton.addEventListener('click', function () {
    removeTodoItem(ListItem);
  });

  // Append the elements to the to-do item list item
  ListItem.appendChild(checkedItem);
  ListItem.appendChild(descriptionArea);
  ListItem.appendChild(editButton);
  ListItem.appendChild(removeButton);
  // Return the created to-do item
  return ListItem;
}

function checkBoxChanged(ListItem) {
  // Select the checkbox input element within the todoItem
  const checkbox = ListItem.querySelector('input');
  // Select the span element containing the todo text
  const descriptionArea = ListItem.querySelector('span');

  if (checkbox.checked) {
    descriptionArea.style.textDecoration = 'line-through';
    descriptionArea.classList.add('completed');
  } else {
    descriptionArea.style.textDecoration = 'none';
    descriptionArea.classList.remove('completed');
  }
}

function editTodoItem(ListItem) {
  // Get the checkbox input element within the todoItem
  const checkbox = ListItem.querySelector('input');
  // Get the span element containing the to-do text
  const descriptionArea = ListItem.querySelector('span');
  // Get the current text content
  const description = descriptionArea.textContent;

  // Create an input element for editing the text
  const editInput = document.createElement('input');
  // Set the type to 'text'
  editInput.type = 'text';
  // Set the value of the input field to the current text
  editInput.value = description;

  // Create a button element for saving the edited text
  const saveButton = document.createElement('button');
  // Set the text content of the button
  if (checkbox.checked) {
    descriptionArea.style.textDecoration = 'line-through';
    descriptionArea.classList.add('completed');
  } else {
    descriptionArea.style.textDecoration = 'none';
    descriptionArea.classList.remove('completed');
  }
  saveButton.textContent = 'Save';
  saveButton.classList.add('save-button');
  // Call the saveEditedTodoItem function when the button is clicked
  saveButton.addEventListener('click', function () {
    saveEditedTodoItem(ListItem, editInput, checkbox.checked);
  });

  // Replace the to-do item contents with the edit input field and save button
  ListItem.innerHTML = '';
  ListItem.appendChild(checkbox);
  ListItem.appendChild(editInput);
  ListItem.appendChild(saveButton);

  // Check the checkbox if it was previously checked
  if (checkbox.checked) {
    checkbox.setAttribute('checked', 'checked');
  }
}

function saveEditedTodoItem(ListItem, editInput, isChecked) {
  // Get the trimmed value of the edit input field
  const newTodoText = editInput.value.trim();
  if (newTodoText !== '') {
    // Create a new span element for the updated text
    const descriptionArea = document.createElement('span');
    // Set the text content of the span element
    descriptionArea.textContent = newTodoText;

    // Create an input element for the checkbox
    const checkedItem = document.createElement('input');
    // Set the type to 'checkbox'
    checkedItem.type = 'checkbox';
    checkedItem.addEventListener('change', function () {
      // Call the checkBoxChanged function when the checkbox is changed
      checkBoxChanged(ListItem);
    });
    // Set the checkbox state to the previous state
    checkedItem.checked = isChecked;

    // Check if the checkbox is checked to apply line-through class
    if (isChecked) {
      descriptionArea.style.textDecoration = 'line-through';
      descriptionArea.classList.add('completed');
    }

    // Create a button element for editing the updated to-do item
    const editButton = document.createElement('button');
    // Set the text content of the button
    editButton.textContent = 'Edit';
    editButton.classList.add('edit-button');
    editButton.addEventListener('click', function () {
      // Call the editTodoItem function when the button is clicked
      editTodoItem(ListItem);
    });

    // Create a button element for removing the updated to-do item
    const removeButton = document.createElement('button');
    // Set the text content of the button
    removeButton.textContent = 'Remove';
    removeButton.classList.add('remove-button');
    removeButton.addEventListener('click', function () {
      // Call the removeTodoItem function when the button is clicked
      removeTodoItem(ListItem);
    });

    // Replace the to-do item contents with the updated elements
    ListItem.innerHTML = '';
    ListItem.appendChild(checkedItem);
    ListItem.appendChild(descriptionArea);
    ListItem.appendChild(editButton);
    ListItem.appendChild(removeButton);
  }
}
function removeTodoItem(ListItem) {
  // Remove the to-do item from the list
  ListItem.remove();
}
