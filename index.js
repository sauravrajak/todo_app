const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");
const button = document.getElementById("btn");

// Adding event listener
button.addEventListener("click", function () {
  // if input box is empty and the add button is clicked
  if (inputBox.value === "") {
    alert("You Must Write Something!!!");
  }
  // if there is some value
  else {
    // creating li and pushing it in list container
    let li = document.createElement("li");
    li.innerHTML = inputBox.value;
    listContainer.appendChild(li);
    // adding cross buttn using span
    let span = document.createElement("span");
    // code for adding cross icon
    span.innerHTML = "\u00d7";
    li.appendChild(span);
  }
  // reseting the input box after adding a todo
  inputBox.value = " ";
});

listContainer.addEventListener(
  "click",
  function (e) {
    if (e.target.tagName === "LI") {
      e.target.classList.toggle("checked");
    } else if (e.target.tagName === "SPAN") {
      e.target.parentElement.remove();
    }
  },
  false
);
