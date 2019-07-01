document.addEventListener("DOMContentLoaded", function() {
  // console.log("The DOM has loaded");
  let pTag = document.getElementById("text");
  // pTag = "This is really cool!";"
  pTag.textContent = "This is really cool!";
});

// console.log(
//   "This console.log() fires when index.js loads - before DOMContentLoaded is triggered"
// );
