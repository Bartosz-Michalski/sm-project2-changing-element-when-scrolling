const div = document.createElement("div");
let size = 100;
let grow = true;

document.body.style.height = "10000px";

div.style.position = "fixed";
div.style.top = "0";
div.style.left = "0";
div.style.width = "100%";
div.style.height = size + "px";
div.style.backgroundColor = "green";

document.body.appendChild(div);

const changeHeight = function () {
  if (size <= 0) {
    grow = true;
    div.style.backgroundColor = "green";
  } else if (size >= window.innerHeight / 2) {
    grow = false;
    div.style.backgroundColor = "red";
  }

  if (grow) {
    size += 5;
  } else {
    size -= 5;
  }

  div.style.height = size + "px";
};

window.addEventListener("scroll", changeHeight);
