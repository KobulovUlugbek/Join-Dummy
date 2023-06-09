// Funktion zum Umschalten der Dropdown-Liste
function toggleDropdown() {
  var dropdown = document.querySelector(".overflow");
  dropdown.classList.toggle("hidden");
}

// Funktion zum Auswählen einer Kategorie
function selectCategory(categoryIndex) {
  // Array mit Kategorienamen
  var categoryNames = [
    "New category",
    "Design",
    "Sales",
    "Backoffice",
    "Marketing",
    "Other"
  ];

  // Array mit Klassen für die Kreise
  var circleClasses = [
    "circle-00",
    "circle-0",
    "circle-1",
    "circle-2",
    "circle-3",
    "circle-4"
  ];

  // Elemente auswählen
  var selectedCategoryText = document.getElementById("selected-category");
  var circles = document.querySelectorAll(".drop-down-selector .subfolder .circle");

  // Ausgewählte Kategorie festlegen
  var selectedCategoryHTML =
    categoryNames[categoryIndex] +
    '<div class="' +
    circleClasses[categoryIndex] +
    '"></div>';
  selectedCategoryText.innerHTML = selectedCategoryHTML;

  // Kreise entsprechend der ausgewählten Kategorie markieren
  for (var i = 0; i < circles.length; i++) {
    if (i === categoryIndex) {
      circles[i].classList.add(circleClasses[i]);
    } else {
      circles[i].classList.remove(circleClasses[i]);
    }
  }

  // Dropdown-Liste ausblenden
  var dropdown = document.querySelector(".overflow");
  dropdown.classList.add("hidden");
}

function toggleDropdown2() {
  const subfolders = document.querySelectorAll(".subfolder2");
  subfolders.forEach((subfolder) => {
    subfolder.classList.toggle("hidden");
  });
}

function toggleCheckbox(checkboxId) {
  const checkbox = document.getElementById(checkboxId);
  checkbox.checked = !checkbox.checked;
}

let category = [];

function renderNewCategory() {
  let renderCategory = document.getElementById("add-new-category").value;
  let chooseColorElement = document.querySelector(".colorCategory .selected");

  if (!chooseColorElement) {
    // Farbelement nicht gefunden oder nicht ausgewählt
    return;
  }

  let chooseColor = chooseColorElement.style.backgroundColor;
  let chooseColorClass = chooseColorElement.classList[0];

  let newCategoryContainer = document.getElementById("new-category-container");
  let newCategoryElement = document.createElement("div");
  newCategoryElement.classList.add("subfolder");

  // Ermittle den nächsten verfügbaren Index für die neue Kategorie
  let categoryIndex = 0;
  while (document.getElementById("subfolder-" + categoryIndex) !== null) {
    categoryIndex++;
  }

  newCategoryElement.id = "subfolder-" + categoryIndex;
  newCategoryElement.setAttribute("onclick", "selectCategory(" + categoryIndex + ")");

  let newCategoryContent = document.createElement("h4");
  newCategoryContent.textContent = renderCategory;

  let newCategoryColor = document.createElement("div");
  newCategoryColor.classList.add("selected-color");
  newCategoryColor.classList.add(chooseColorClass);
  newCategoryColor.style.backgroundColor = chooseColor;

  newCategoryContent.appendChild(newCategoryColor);
  newCategoryElement.appendChild(newCategoryContent);
  newCategoryContainer.appendChild(newCategoryElement);

  // Füge die neue Kategorie zum 'category'-Array hinzu
  category.push({
    name: renderCategory,
    colorClass: chooseColorClass
  });

  // Auswahl der neuen Kategorie aktualisieren
  selectCategory(categoryIndex);

  // Aktualisiere die neu erstellte Kategorie im Zielbereich
  let changeElement = document.getElementById("change");
  changeElement.innerHTML = '<h4 id="selected-category">' + renderCategory + '<div class="' + chooseColorClass + '"></div></h4>';

  // Speichere die Kategorien im Local Storage
  saveCategoriesToLocalStorage();

  // Leere das 'add-new-category' Eingabefeld
  document.getElementById("add-new-category").value = "";
}

// Füge jedem Farbelement einen Klick-Event-Listener hinzu
let colorElements = document.querySelectorAll(".colorCategory div");
colorElements.forEach(function (colorElement) {
  colorElement.addEventListener("click", function () {
    // Entferne die Klasse 'selected' von allen Farbelementen
    colorElements.forEach(function (element) {
      element.classList.remove("selected");
    });
    // Füge die Klasse 'selected' zum angeklickten Farbelement hinzu
    this.classList.add("selected");
  });
});

// Warte, bis das Dokument vollständig geladen ist, bevor du die Funktion renderNewCategory() aufrufst
document.addEventListener("DOMContentLoaded", function () {
  renderNewCategory();
});

function saveCategoriesToLocalStorage() {
  localStorage.setItem("categories", JSON.stringify(category));
}


function loadCategoriesFromLocalStorage() {
  var savedCategories = localStorage.getItem("categories");
  if (savedCategories) {
    category = JSON.parse(savedCategories);
    // Kategorien aus dem Local Storage rendern
    renderSavedCategories();
  }
}

function renderSavedCategories() {
  var newCategoryContainer = document.getElementById("new-category-container");
  // Leere den Container, um vorhandene Kategorien zu entfernen
  newCategoryContainer.innerHTML = "";

  for (var i = 0; i < category.length; i++) {
    var categoryName = category[i].name;
    var categoryColorClass = category[i].colorClass;

    var newCategoryElement = document.createElement("div");
    newCategoryElement.classList.add("subfolder");
    newCategoryElement.id = "subfolder-" + i;
    newCategoryElement.setAttribute("onclick", "selectCategory(" + i + ")");

    var newCategoryContent = document.createElement("h4");
    newCategoryContent.textContent = categoryName;

    var newCategoryColor = document.createElement("div");
    newCategoryColor.classList.add("selected-color");
    newCategoryColor.classList.add(categoryColorClass);

    newCategoryContent.appendChild(newCategoryColor);
    newCategoryElement.appendChild(newCategoryContent);
    newCategoryContainer.appendChild(newCategoryElement);
  }
}

// Rufe die Funktion zum Laden der Kategorien aus dem Local Storage auf
loadCategoriesFromLocalStorage();
