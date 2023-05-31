// BOARD drag and drop
let todos = [
    {
        id: 0,
        title: 'Website redesign',
        category: 'Design',
        situation: 'todo',
        discription: 'Modify the contens of the main website...',
        team: 'contactA',
    },
    {
        id: 1,
        title: 'Website redesign',
        category: 'Sales',
        situation: 'progress',
        discription: 'Modify the contens of the main website...',
        team: 'contactA',
    },
    {
        id: 2,
        title: 'Join Tasks',
        category: 'Backoffice',
        situation: 'awaiting',
        discription: 'Modify the contens of the main website...',
        team: 'contactA',
    },
    {
        id: 3,
        title: 'Meow',
        category: 'Marketing',
        situation: 'done',
        discription: 'Modify the contens of the main website...',
        team: 'contactA',
    },
];

function init() {
    dragDrop();
    document.getElementById('filterInput').addEventListener('keyup', filterTasks);
}

function dragDrop() {
    const situations = ['todo', 'progress', 'awaiting', 'done'];
    for (const situation of situations) {
        const filteredTodos = todos.filter((t) => t['situation'] === situation);
        const containerElement = document.getElementById(situation);
        containerElement.innerHTML = '';
        for (const element of filteredTodos) {
            containerElement.innerHTML += generateTodoHTML(element);
        }
    }
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
    todos[currentlyDraggedElement]['situation'] = situation;
    dragDrop();
}

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
