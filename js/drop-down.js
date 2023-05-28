function toggleDropdown() {
    const subfolders = document.querySelectorAll(".subfolder");
    subfolders.forEach((subfolder) => {
      subfolder.classList.toggle("hidden");
    });
  }
  
  function changeCategory(category) {
    const categoryElement = document.getElementById('change');
    categoryElement.innerText = category;
    toggleDropdown();
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

