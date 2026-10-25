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

  const deleteButton = document.createElement('BUTTON');

  const buttonText = document.createTextNode('Delete');

  deleteButton.appendChild(buttonText);

  deleteButton.setAttribute('id', 'delete');

  newLi.appendChild(newInput);
  newLi.appendChild(newLabel);
  newLi.appendChild(deleteButton);

  ul.appendChild(newLi);
}

function clearUl(ul) {
  ul.innerHTML = '';
}

function checkboxListener() {
  let checkboxes = document.querySelectorAll('input');

  checkboxes.forEach(function (checkbox) {
    checkbox.addEventListener('click', function (evt) {
      if (checkbox.checked) {
        let elementId = evt.target.id.split('todo-').pop();
        for (let element of todoList) {
          if (element.id == elementId) {
            element.completed = true;
          }
        }
      } else {
        let elementId = evt.target.id.split('todo-').pop();
        for (let element of todoList) {
          if (element.id == elementId) {
            element.completed = false;
          }
        }
      }
      console.log('Updated list:');
      todoList.forEach(console.log);
    });
  });
}

function deleteListener() {
  let buttons = document.querySelectorAll('#delete');

  buttons.forEach(function (button) {
    button.addEventListener('click', function (evt) {
      let parent = button.parentElement.parentElement;
      let child = button.parentElement;

      let elementId = button.parentElement
        .querySelector('input')
        .id.split('todo-')
        .pop();

      let index = 0;

      index = todoList.findIndex(e => {
        if (e.id == elementId) {
          return true;
        }
      });

      todoList.splice(index, 1);

      parent.removeChild(child);

      console.log('After removal: ');
      todoList.forEach(console.log);
    });
  });
}

todoList.forEach(addElement);

checkboxListener();

deleteListener();

const addButton = document.querySelector('.add-btn');

addButton.addEventListener('click', function (evt) {
  let dialog = document.querySelector('dialog');

  dialog.showModal();
});

let save = document.getElementById('save');

save.addEventListener('click', function (evt) {
  evt.preventDefault();

  let dialog = document.querySelector('dialog');

  let text = document.getElementById('text').value;

  let highestId = 0;
  todoList.forEach(element => {
    if (element.id > highestId) {
      highestId = element.id;
    }
  });

  const element = {
    id: highestId + 1,
    task: text,
    completed: false,
  };

  todoList.push(element);

  dialog.close();

  let ul = document.querySelector('ul');

  clearUl(ul);

  todoList.forEach(addElement);

  checkboxListener();

  deleteListener();

  console.log('after adding: ');
  todoList.forEach(console.log);
});
