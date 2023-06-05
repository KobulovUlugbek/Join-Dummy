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

function allowDrop(ev) {
    ev.preventDefault();
}

function changePos(situation) {
    loadTodos();
    todos[currentlyDraggedElement]['situation'] = situation;
    saveTodos();
    defineGenerationZone();
    showDropZone();
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

//arbeiten mit dragleave und dragend
//wenn ich zone verlasse, soll Dropzone-Rand eingeblendet werden
//wenn ich draggen beendet habe, sollen alle zonen ausgeblendet werden
// mit For-Schleife durch situationen und elements be id getten `dragdrop_${element[situation]}`
// if (situation === 'done)

function showDropZone() {
    if (todos[currentlyDraggedElement]['situation'] === 'todo') {
        document.getElementById(`dragdrop_progress}`).classList.add('dragdrop');
        document.getElementById(`dragdrop_awaiting}`).classList.add('dragdrop');
        document.getElementById(`dragdrop_done}`).classList.add('dragdrop');
        document.getElementById(`dragdrop_todo}`).classList.remove('dragdrop');
    }
    const draggables = document.querySelectorAll('.child-container');
    const containers = document.querySelectorAll('.dragdrop');
    //funktioniert so nicht, wenn in unterschiedlichen Divs
    containers.forEach((containers) => {
        containers.addEventListener('dragstart', () => {
            containers.classList.remove('dragdrop');
        });
    });
}
// document.getElementById(`dragrop_${element['situation']}`).classList.add('dragdrop');

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

    const newTask = {
        id: todos.length,
        title: title,
        //category: category,
        situation: 'todo',
        description: description,
        //team: 'contactA',
        deadline: dueDate,
    };

    todos.push(newTask);

    saveTodos();
}
