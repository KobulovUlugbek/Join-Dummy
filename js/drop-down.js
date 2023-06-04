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
  var circles = document.querySelectorAll(
    ".drop-down-selector .subfolder .circle"
  );

  // Ausgewählte Kategorie festlegen
  var selectedCategoryHTML = categoryNames[categoryIndex] + '<div class="' + circleClasses[categoryIndex] + '"></div>';
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
