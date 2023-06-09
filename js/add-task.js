let popup = document.getElementById("header-popup");
let content = document.getElementById("content");

function openPopup() {
  popup.classList.add("open-popup");
  content.classList.add("background");
}
function closePopup() {
  popup.classList.remove("open-popup");
}
