// JSON-Array mit Kategorien
let categories = JSON.parse(localStorage.getItem("categories")) || [
  {
    id: 0,
    name: "New category",
    circleClass: "circle-00",
    onClick: "selectCategory(0)"
  },
  {
    id: 1,
    name: "Design",
    circleClass: "circle-0",
    onClick: "selectCategory(1)"
  },
  {
    id: 2,
    name: "Sales",
    circleClass: "circle-1",
    onClick: "selectCategory(2)"
  },
  {
    id: 3,
    name: "Backoffice",
    circleClass: "circle-2",
    onClick: "selectCategory(3)"
  },
  {
    id: 4,
    name: "Marketing",
    circleClass: "circle-3",
    onClick: "selectCategory(4)"
  },
  {
    id: 5,
    name: "Other",
    circleClass: "circle-4",
    onClick: "selectCategory(5)"
  }
];

// Funktion zum Umschalten der Dropdown-Liste
function toggleDropdown() {
  let dropdown = document.querySelector(".overflow");
  dropdown.classList.toggle("hidden");
}

// Funktion zum Auswählen einer Kategorie
function selectCategory(categoryIndex) {
  // Array mit Kategorienamen
  let categoryNames = categories.map((category) => category.name);

  // Array mit Klassen für die Kreise
  let circleClasses = categories.map((category) => category.circleClass);

  // Elemente auswählen
  let selectedCategoryText = document.getElementById("selected-category");
  let circles = document.querySelectorAll(
    ".drop-down-selector .subfolder .circle"
  );

  // Ausgewählte Kategorie festlegen
  let selectedCategoryHTML =
    categoryNames[categoryIndex] +
    '<div class="' +
    circleClasses[categoryIndex] +
    '"></div>';
  selectedCategoryText.innerHTML = selectedCategoryHTML;

  // Kreise entsprechend der ausgewählten Kategorie markieren
  for (let i = 0; i < circles.length; i++) {
    if (i === categoryIndex) {
      circles[i].classList.add(circleClasses[i]);
    } else {
      circles[i].classList.remove(circleClasses[i]);
    }
  }

  // Dropdown-Liste ausblenden
  let dropdown = document.querySelector(".overflow");
  dropdown.classList.add("hidden");
}

// Element zum Hinzufügen der Kategorien
const overflowHiddenElement = document.querySelector(".overflow.hidden");

categories.forEach((category) => {
  overflowHiddenElement.innerHTML += `
    <div id="subfolder-${category.id}" class="subfolder" onclick="eval('${category.onClick}')">
      <h4>${category.name}<div class="${category.circleClass}"></div></h4>
    </div>
  `;
});

// Funktion zum Hinzufügen einer neuen Kategorie
function renderNewCategory() {
  let newCategoryInput = document.getElementById("add-new-category");
  let newCategoryName = newCategoryInput.value;

  let selectedColor = document.querySelector(".colorCategory .selected");
  let selectedColorId = selectedColor.id;

  let newCategory = {
    id: categories.length,
    name: newCategoryName,
    circleClass: selectedColorId,
    onClick: `selectCategory(${categories.length})`
  };

  categories.push(newCategory);
  saveCategories(); // Speichere die aktualisierten Kategorien im Local Storage
  renderCategories(); // Update the rendered categories
  newCategoryInput.value = ""; // Reset the input field
}

function saveCategories() {
  localStorage.setItem("categories", JSON.stringify(categories));
}

// Funktion zum Auswählen der Farbe
function selectColor(colorId) {
  let colorElements = document.querySelectorAll(".colorCategory div");

  colorElements.forEach((element) => {
    element.classList.remove("selected");
  });

  let selectedColor = document.getElementById(colorId);
  selectedColor.classList.add("selected");
}

// Event Listener für Farbauswahl
document.querySelectorAll(".colorCategory div").forEach((colorElement) => {
  colorElement.addEventListener("click", () => {
    selectColor(colorElement.id);
  });
});

// Funktion zum Rendern der Kategorien
function renderCategories() {
  const overflowHiddenElement = document.querySelector(".overflow.hidden");
  if (!overflowHiddenElement) return; // Exit if the element is not found

  overflowHiddenElement.innerHTML = "";

  categories.forEach((category) => {
    overflowHiddenElement.innerHTML += `
      <div id="subfolder-${category.id}" class="subfolder" onclick="${category.onClick}">
        <h4>${category.name}<div class="${category.circleClass}"></div></h4>
      </div>
    `;
  });
}

// Initial render of the categories
renderCategories();

//Assugned to

function toggleDropdown2() {
  const subfolders = document.querySelectorAll(".subfolder2");
  subfolders.forEach((subfolder) => {
    subfolder.classList.toggle("hidden");
  });
}
