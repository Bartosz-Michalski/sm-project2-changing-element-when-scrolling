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
  } else if (size >= window.innerHeight / 2) {
    grow = false;
  }

  if (grow) {
    size += 5;
    div.style.height = size + "px";
    div.style.backgroundColor = "green";
  } else {
    size -= 5;
    div.style.height = size + "px";
    div.style.backgroundColor = "red";
  }
};

window.addEventListener("scroll", changeHeight);

// 5.	zadanie, które ma realizować funkcja: prostokąt (div) rośnie do 50% wysokości okna przeglądarki (window.innerHeight/2). Tylko wysokość zmieniamy, szerokość bez zmian.
// 6.	Po osiągnięciu 50% wysokości okna przeglądarki, nasz element div zaczyna maleć oraz zmienia kolor tła na czerwony. Wykorzystaj instrukcje warunkową i zmienną jako flagę (typ boolean).
// 7.	Kiedy wysokość div-a będzie mniejsza od 0 to odwracamy działanie: teraz ma znowu rośnie i zmienia kolor na zielony.
