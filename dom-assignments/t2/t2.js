// array for todo list
const todoList = [
  {
    id: 1,
    task: 'Learn HTML',
    completed: true,
  },
  {
    id: 2,
    task: 'Learn CSS',
    completed: true,
  },
  {
    id: 3,
    task: 'Learn JS',
    completed: false,
  },
  {
    id: 4,
    task: 'Learn TypeScript',
    completed: false,
  },
  {
    id: 5,
    task: 'Learn React',
    completed: false,
  },
];

// add your code here

function addElement(element) {
  const ul = document.querySelector('ul');

  const newLi = document.createElement('LI');

  const newInput = document.createElement('INPUT');

  newInput.setAttribute('type', 'checkbox');

  newInput.id = 'todo-' + element.id;

  if (element.completed) {
    newInput.checked = true;
  }

  const newLabel = document.createElement('LABEL');

  const labelText = document.createTextNode(element.task);

  newLabel.htmlFor = 'todo-' + element.id;

  newLabel.appendChild(labelText);

  newLi.appendChild(newInput);
  newLi.appendChild(newLabel);

  ul.appendChild(newLi);
}

todoList.forEach(addElement);
