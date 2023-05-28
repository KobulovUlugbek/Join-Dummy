// BOARD drag and drop
let todos = [{
    'id': 0,
    'category' : 'Design',
    'situation': 'todo',
    'discription': 'Modify the contens of the main website...',
    'team': 'contactA'
},{
    'id': 1,
    'category' : 'Sales',
    'situation': 'progress',
    'discription': 'Modify the contens of the main website...',
    'team': 'contactA'
},{
    'id': 2,
    'category' : 'Backoffice',
    'situation': 'awaiting',
    'discription': 'Modify the contens of the main website...',
    'team': 'contactA'
},{
    'id': 3,
    'category' : 'Marketing',
    'situation': 'done',
    'discription': 'Modify the contens of the main website...',
    'team': 'contactA'
}
]

function dragDrop() {
    let todo = todos.filter(t => t['situation'] == 'todo');
    document.getElementById('todo').innerHTML= '';
    for (let index = 0; index < todo.length; index++) {
        const element = todo[index];
        document.getElementById('todo').innerHTML += generateTodoHTML(element);
    }
    let progress = todos.filter(t => t['situation'] == 'progress');
    document.getElementById('progress').innerHTML= '';
    for (let index = 0; index < progress.length; index++) {
        const element = progress[index];
        document.getElementById('progress').innerHTML += generateTodoHTML(element);
    }
    let awaiting = todos.filter(t => t['situation'] == 'awaiting');
    document.getElementById('awaiting').innerHTML= '';
    for (let index = 0; index < awaiting.length; index++) {
        const element = awaiting[index];
        document.getElementById('awaiting').innerHTML += generateTodoHTML(element);
    }
    let done = todos.filter(t => t['situation'] == 'done');
    document.getElementById('done').innerHTML= '';
    for (let index = 0; index < done.length; index++) {
        const element = done[index];
        document.getElementById('done').innerHTML += generateTodoHTML(element);
    }
}

function generateTodoHTML(element) {
    return `
    <div draggable="true" ondragstart="startdragging(${element['id']})" class="child-container">
        <div class="${element['category']}">${element['category']}</div>
        <p>Website redesign</p>
        <h4>${element['discription']}</h4>
        <div class="progressbar-container">
            <div class="progressbar"></div>
            <p>1/2 Done</p>
        </div>
        <div class="icon-container">
            <div>
                <img class="profilbild2" src="img/profil-photo.png" alt="" />
                <img class="profilbild2" src="img/profil-photo.png" alt="" />
                <img class="profilbild2" src="img/profil-photo.png" alt="" />
            </div>
            <div>
                <img src="img/urgent-icon4.png" alt="" />
            </div>
        </div>
    </div>`
}

let currentlyDraggedElement;

function startdragging(id){
    currentlyDraggedElement = id;
}

function allowDrop(ev) {
    ev.preventDefault();
}

function changePos(situation) {
    todos[currentlyDraggedElement]['situation'] = situation;
    dragDrop();
}