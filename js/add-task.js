let popup = document.getElementById('header-popup');
let content = document.getElementById('content');


function openPopup(){
    popup.classList.add('open-popup');
    content.classList.add('background');
}
function closePopup(){
    popup.classList.remove('open-popup');
}




let category = []; // Add this line to declare and initialize the category variable

function renderNewCategory() {
    let renderCategory = document.getElementById('add-new-category').value;
    let chooseColor = document.querySelector('.colorCategory .selected');
  
    if (renderCategory && chooseColor) {
      let newTask = renderCategory + " " + chooseColor.className;
      let selectCategoryDiv = document.querySelector('.overflow');
  
      let newSubfolder = document.createElement('div');
      newSubfolder.classList.add('subfolder');
      newSubfolder.onclick = function() {
        selectCategory(category.length);
      };
  
      let newTaskDiv = document.createElement('h4');
      newTaskDiv.textContent = newTask;
  
      let newCircleDiv = document.createElement('div');
      newCircleDiv.classList.add('circle', 'circle-' + category.length);
  
      newTaskDiv.appendChild(newCircleDiv);
      newSubfolder.appendChild(newTaskDiv);
      selectCategoryDiv.appendChild(newSubfolder);
  
      category.push(newTask);
  
      // Clear input field and selected color
      document.getElementById('add-new-category').value = '';
      chooseColor.classList.remove('selected');
    }
  }
  