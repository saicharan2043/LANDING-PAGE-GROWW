const iconEl = document.getElementById("icon")
const ulEl = document.getElementById("listItemsSm")
iconEl.onclick = function() {
    ulEl.classList.toggle("show")
}