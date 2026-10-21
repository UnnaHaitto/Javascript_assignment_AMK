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

for (let element of todoList) {
  let html = '';

  if (element.completed == true) {
    html += '<li><input type="checkbox" id="todo-' + element.id + '" checked>';
    html +=
      '<label for="todo-' + element.id + '">' + element.task + '</label></li>';
  } else {
    html += '<li><input type="checkbox" id="todo-' + element.id + '">';
    html +=
      '<label for="todo-' + element.id + '">' + element.task + '</label></li>';
  }

  document.querySelector('ul').insertAdjacentHTML('beforeend', html);
}
