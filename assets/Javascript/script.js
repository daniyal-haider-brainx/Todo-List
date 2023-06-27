    // Get the to-do form element
    const todoForm = document.getElementById('todoForm');
    // Get the input field for adding to-do items
    const todoInput = document.getElementById('todoInput');
    // Get the list element to display to-do items
    const todoList = document.getElementById('todoList');

    todoForm.addEventListener('submit', function (event) {
      // Prevent form submission
      event.preventDefault();
      // Get the trimmed value of the input field
      const todoText = todoInput.value.trim();
      if (todoText !== '') {
        // Create a new to-do item
        const todoItem = createTodoItem(todoText);
        // Add the new to-do item to the list
        todoList.appendChild(todoItem);
        // Clear the input field
        todoInput.value = '';
      }
    });

    function createTodoItem(todoText) {
      // Create a new list item element for the to-do item
      const todoItem = document.createElement('li');
      todoItem.classList.add('todo-item');
      // Create an input element for the checkbox
      const todoCheckbox = document.createElement('input');
      // Set the type to 'checkbox'
      todoCheckbox.type = 'checkbox';
      todoCheckbox.addEventListener('change', function () {
      // Call the checkBoxChanged function when the checkbox is changed
      checkBoxChanged(todoItem);
      });
      // Create a span element for the to-do text
      const todoTextSpan = document.createElement('span');
      // Set the text content of the span element
      todoTextSpan.textContent = todoText;
      // Create a button element for editing the to-do item
      const editButton = document.createElement('button');
      // Set the text content of the button
      editButton.textContent = 'Edit';
      editButton.classList.add('edit-button');
      // Call the editTodoItem function when the button is clicked
      editButton.addEventListener('click', function () {
      editTodoItem(todoItem);
      });
      // Create a button element for removing the to-do item
      const removeButton = document.createElement('button');
      // Set the text content of the button
      removeButton.textContent = 'Remove';
      removeButton.classList.add('remove-button');
      // Call the removeTodoItem function when the button is clicked
      removeButton.addEventListener('click', function () {
      removeTodoItem(todoItem);
      });
      
      // Append the elements to the to-do item list item
      todoItem.appendChild(todoCheckbox);
      todoItem.appendChild(todoTextSpan);
      todoItem.appendChild(editButton);
      todoItem.appendChild(removeButton);
      // Return the created to-do item
      return todoItem;
      }
      
      function checkBoxChanged(todoItem) {
      // Select the checkbox input element within the todoItem
      const checkbox = todoItem.querySelector('input');
      // Select the span element containing the todo text
      const todoTextSpan = todoItem.querySelector('span');
      
      if (checkbox.checked) {
      todoTextSpan.style.textDecoration = 'line-through';
      todoTextSpan.classList.add('completed');
      } else {
      todoTextSpan.style.textDecoration = 'none';
      todoTextSpan.classList.remove('completed');
      
      }
      }
      
      function editTodoItem(todoItem) {
      // Get the span element containing the to-do text
      const todoTextSpan = todoItem.querySelector('span');
      // Get the current text content
      const todoText = todoTextSpan.textContent;
      // Create an input element for editing the text
      const editInput = document.createElement('input');
      // Set the type to 'text'
      editInput.type = 'text';
      // Set the value of the input field to the current text
      editInput.value = todoText;
      // Create a button element for saving the edited text
      const saveButton = document.createElement('button');
      // Set the text content of the button
      saveButton.textContent = 'Save';
      saveButton.classList.add('save-button');
      // Call the saveEditedTodoItem function when the button is clicked
      saveButton.addEventListener('click', function () {
      saveEditedTodoItem(todoItem, editInput);
      });
      
      // Replace the to-do item contents with the edit input field and save button
      todoItem.innerHTML = '';
      todoItem.appendChild(editInput);
      todoItem.appendChild(saveButton);
      }
      
      function saveEditedTodoItem(todoItem, editInput) {
      // Get the trimmed value of the edit input field
      const newTodoText = editInput.value.trim();
      if (newTodoText !== '') {
      // Create a new span element for the updated text
      const todoTextSpan = document.createElement('span');
      // Set the text content of the span element
      todoTextSpan.textContent = newTodoText;
      // Create a button element for editing the updated to-do item
      const editButton = document.createElement('button');
      // Set the text content of the button
      editButton.textContent = 'Edit';
      editButton.classList.add('edit-button');
      editButton.addEventListener('click', function () {
      // Call the editTodoItem function when the button is clicked
      editTodoItem(todoItem);
      });
      // Create a button element for removing the updated to-do item
      const removeButton = document.createElement('button');
      // Set the text content of the button
      removeButton.textContent = 'Remove';
      removeButton.classList.add('remove-button');
      removeButton.addEventListener('click', function () {
      // Call the removeTodoItem function when the button is clicked
      removeTodoItem(todoItem);
      });
      
      // Replace the to-do item contents with the updated span element, edit button, and remove button
      todoItem.innerHTML = '';
      todoItem.appendChild(todoTextSpan);
      todoItem.appendChild(editButton);
      todoItem.appendChild(removeButton);
      }
      }
      
      function removeTodoItem(todoItem) {
      // Remove the to-do item from the list
      todoItem.remove();
      }
      