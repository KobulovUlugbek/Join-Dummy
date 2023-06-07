window.addEventListener('load', () => {
  loadTodos();
  updateTaskNumbers();
});

// BOARD drag and drop
let todos = [
  {
    id: 0,
    title: 'Website redesign',
    category: 'Design',
    situation: 'todo',
    discription: 'Modify the contens of the main website...',
    team: 'contactA',
    deadline: '2023-06-23T20:00:00',
  },
  {
    id: 1,
    title: 'Website redesign',
    category: 'Sales',
    situation: 'progress',
    discription: 'Modify the contens of the main website...',
    team: 'contactA',
    deadline: '',
  },
  {
    id: 2,
    title: 'Join Tasks',
    category: 'Backoffice',
    situation: 'awaiting',
    discription: 'Modify the contens of the main website...',
    team: 'contactA',
    deadline: '',
  },
  {
    id: 3,
    title: 'Meow',
    category: 'Marketing',
    situation: 'done',
    discription: 'Modify the contens of the main website...',
    team: 'contactA',
    deadline: '',
  },
];

function init() {
  defineGenerationZone();
  document.getElementById('filterInput').addEventListener('keyup', filterTasks);
  updateTaskNumbers();
}

function defineGenerationZone() {
  loadTodos();
  const situations = ['todo', 'progress', 'awaiting', 'done'];
  for (const situation of situations) {
    const filteredTodos = todos.filter((t) => t['situation'] === situation);
    const containerElement = document.getElementById(situation);
    containerElement.innerHTML = '';
    for (const element of filteredTodos) {
      containerElement.innerHTML += generateTodoHTML(element);
    }
  }
  saveTodos();
  updateTaskNumbers();
}

function generateTodoHTML(element) {
  return `
    <div id="task${element['id']}" draggable="true" ondragstart="startdragging(${element['id']})" class="child-container">
        <div class="${element['category']}">${element['category']}</div>
        <p>${element['title']}</p>
        <h4>${element['discription']}</h4>
        <div class="progressbar-container">
            <div class="progressbar"></div>
            <p>1/2 Done</p>
        </div>
        <div class="icon-container">
            <div class="teammates">
                <img class="profilbild2" src="img/profil-photo.png" alt="" />
                <img class="profilbild2" src="img/profil-photo.png" alt="" />
                <img class="profilbild2" src="img/profil-photo.png" alt="" />
            </div>
            <div>
                <img src="img/urgent-icon4.png" alt="" />
            </div>
        </div>
    </div>`;
}

let currentlyDraggedElement;

function startdragging(id) {
  currentlyDraggedElement = id;
}

function allowDrop(ev, task) {
    ev.preventDefault();
    document.getElementById('dragdrop_' + task).classList.add('border');
}

function endDrap(task) {
    document.getElementById('dragdrop_' + task).classList.remove('border');
}

function endDrop() {
    const situations = ['todo', 'progress', 'awaiting', 'done'];
    for (const situation of situations) {
      const elements = document.querySelectorAll('#dragdrop_' + situation);
      elements.forEach((element) => {
        element.classList.remove('border');
      });
    }
  }

function changePos(situation) {
  loadTodos();
  todos[currentlyDraggedElement]['situation'] = situation;
  saveTodos();
  defineGenerationZone();
  updateTaskNumbers();
}

// Neue Funktionen um Todos zu speichern und zu laden
function saveTodos() {
  localStorage.setItem('todos', JSON.stringify(todos));
}

function loadTodos() {
  const storedTodos = localStorage.getItem('todos');
  if (storedTodos) {
    todos = JSON.parse(storedTodos);
  }
}

function updateTaskNumbers() {
  const situations = ['todo', 'progress', 'awaiting', 'done'];
  for (const situation of situations) {
    const count = todos.filter((t) => t['situation'] === situation).length;
    const element = document.getElementById(`${situation}-count`);
    if (element) {
      element.innerHTML = count;
    }
  }
}


/* FILTER */

function filterTasks() {
  let filterValue = document.getElementById('filterInput').value.toUpperCase();

  for (let i = 0; i < todos.length; i++) {
    let taskElement = document.getElementById('task' + todos[i].id);

    if (todos[i].title.toUpperCase().includes(filterValue)) {
      taskElement.style.display = '';
    } else {
      taskElement.style.display = 'none';
    }
  }
}

function createTask() {
  const title = document.getElementById('title-input').value;
  const description = document.getElementById('description-input').value;
  //const category = document.getElementById('category-input').value;
  const dueDate = document.getElementById('date-input').value;
  //const priority = document.getElementById('priority-input').value;

  const newTask = {
    id: todos.length,
    title: title,
    //category: category,
    situation: 'todo',
    discription: description,
    //team: 'contactA', (assigned to)
    deadline: dueDate,
    //priority: 'priority',
  };

  todos.push(newTask);

  saveTodos();
  checkPageAndRedirect();
  defineGenerationZone();
}

function closePopup() {
  popup.classList.remove('open-popup');
}

function redirectToBoard() {
  window.location.href = 'board.html';
}

function checkPageAndRedirect() {
  var currentPage = window.location.pathname;

  if (currentPage.includes('add-task.html')) {
    redirectToBoard();
  } else if (currentPage.includes('board.html')) {
    closePopup();
  }
}

function toggleLogoutBtn(event) {
  event.stopPropagation();
  let button = document.getElementById('logout-btn');
  button.classList.toggle('d-none');
}

function hideLogoutBtn() {
  document.getElementById('logout-btn').classList.add('d-none');
}
