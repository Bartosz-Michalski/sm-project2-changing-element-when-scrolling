const div = document.createElement("div");
let size = 0;

document.body.style.height = "10000px";

div.style.position = "fixed";
div.style.top = "0";
div.style.left = "0";
div.style.width = "100px";
div.style.heigh = size + "px";
div.style.backgroundColor = "green";

document.body.appendChild(div);
