document.addEventListener("DOMContentLoaded", () => {
  changeText()
});



function changeText() {
  let text = document.querySelector("#text")
  text.innerHTML = "This is really cool!"
}


