// Declare some variables for ease of use down the line.
const tasks = [];

const list = document.getElementById('tasks');
const input = document.getElementById('task');
const form = document.getElementById('control');
const completed = document.getElementById('completed');

// Adds a event listener to the submit button that makes that task be added to the list
form.addEventListener('submit', addTask);

// The function called when submit is clicked, and adds task to the list
function addTask(event) {
  // Do not submit the form to a server
  event.preventDefault();

  // If statement to stop user from adding empty tasks
  if (input.value != '') {
    // Add a tasks object, and set the text and make sure it's unckecked
    const task = { text: input.value, checked: false, timestamp: Date() };
    // Unshift to make the newest object appear first
    tasks.unshift(task);
    // For inspecting the timestamp of tasks
    console.log(tasks);
    redrawList();
    // Clean the input field
    input.placeholder = "";
  } else {
    // If the user tries to add a empty name, tell them it's should have name
    input.placeholder = "Give the task a name";
  }


  // Remove text from input field when submitting.
  input.value = '';
}

function todoWasChecked(event) {
  // First find the id of the checkbox that got clicked
  const index = event.target.id;
  // Change the checkbox to the inverse of it's current check-state
  tasks[index].checked = !tasks[index].checked;
  redrawList();
}

function redrawList() {
  // Remove all the <li>s inside the <ul>.
  list.innerHTML = '';

  // Iterate through every task and create an <li> for each task in the tasks.
  // Resets the counter for completed tasks before running the loop
  var antallCompleted = 0;

  for (let task of tasks) {
    // Construct the list element, checkbox and taskname-span
    const listElement = document.createElement('li');
    const checkbox = document.createElement('input');
    const span = document.createElement('span');

    // Set the text, the id and add event listener
    span.innerText = task.text;
    checkbox.setAttribute('type', 'checkbox');
    checkbox.setAttribute('id', tasks.indexOf(task));
    checkbox.addEventListener('click', todoWasChecked);

    // If a given task is clicked, set checkbox to checked and make a line through the text
    if (task.checked) {
      checkbox.setAttribute('checked', true);
      span.style.textDecoration = 'line-through';
      // Add one to the counter for the top of the list
      antallCompleted++;
    }

    // Append the <li> to the <ul>.
    listElement.appendChild(checkbox);
    listElement.appendChild(span);
    list.appendChild(listElement);
  }

  // Tell the user how many tasks they have completed.
  completed.innerText = antallCompleted + ' / ' + tasks.length + ' completed';
}

// Call the function for drawing the list to display tasks when the page loads.
redrawList();
