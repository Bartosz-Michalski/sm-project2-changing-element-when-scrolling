const square = document.createElement("div");
let size = 100;

document.body.appendChild(square);
square.style.width = size + "px";
square.style.height = size + "px";

let grow = true; //flaga

window.addEventListener("scroll", () => {
  if (size >= window.innerHeight / 2) {
    // grow = false;
    grow = !grow;
  } else if (size <= 0) {
    // grow = true;
    grow = !grow;
  }

  if (grow) {
    size += 5;
    square.style.width = size + "px";
    square.style.height = size + "px";
  } else {
    size -= 5;
    square.style.width = size + "px";
    square.style.height = size + "px";
  }
});
