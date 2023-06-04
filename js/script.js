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

function defineGenerationZone() {
    const situations = ['todo', 'progress', 'awaiting', 'done'];
    for (const situation of situations) {
        const filteredTodos = todos.filter(t => t['situation'] === situation);
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
        <p>Website redesign</p>
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
    defineGenerationZone(); 
    showDropZone();
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

}
// document.getElementById(`dragrop_${element['situation']}`).classList.add('dragdrop');




const draggables = document.querySelectorAll('.child-container')
const containers = document.querySelectorAll('.dragdrop')

draggables.forEach(containers => {
    containers.addEventListener('dragstart', () => {
        containers.classList.remove('dragdrop')
    })
})
//funktioniert so nicht, wenn in unterschiedlichen Divs