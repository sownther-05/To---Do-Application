// Get references to DOM elements
const taskInput = document.getElementById('task-input');
const addTaskBtn = document.getElementById('add-task');
const taskList = document.getElementById('task-list');

// Initialize task counter
let taskCounter = 1; // Counter to keep track of tasks

// Function to add a new task
function addTask() {
  const taskText = taskInput.value.trim();
  
  if (taskText === '') {
    alert("Please enter a task!");
    return;
  }

  // Create a new list item (li) with the task number
  const li = document.createElement('li');
  li.textContent = `Task ${taskCounter}: ${taskText}`; // Add task number

  // Add delete button
  const deleteBtn = document.createElement('button');
  deleteBtn.textContent = 'Delete';
  deleteBtn.classList.add('delete-btn');
  deleteBtn.onclick = function() {
    taskList.removeChild(li);
  };

  // Mark as completed when clicked
  li.addEventListener('click', function() {
    li.classList.toggle('completed');
  });

  // Append the delete button and the list item to the task list
  li.appendChild(deleteBtn);
  taskList.appendChild(li);

  // Increment the task counter for the next task
  taskCounter++;

  // Clear input field after adding
  taskInput.value = '';
}

// Add task when the button is clicked
addTaskBtn.addEventListener('click', addTask);

// Optional: Add task when "Enter" is pressed
taskInput.addEventListener('keypress', function(event) {
  if (event.key === 'Enter') {
    addTask();
  }
});
