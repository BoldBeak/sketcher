//--- TOP: Etch-a-Sketch ---

const cont = document.querySelector('.container');

let num = 16;

for (let i = 0; i < num; i++) {
  let sqId = i + 1;
  let sqHeight = (90 / num) + "vh";
  let sqWidth = (90 / num) + "vw";
  const newSquare = document.createElement("div");
  newSquare.classList.add("gridSquare");
  newSquare.setAttribute("id", sqId);
  // newSquare.setAttribute("height", sqHeight);
  // newSquare.setAttribute("width", sqWidth);
  cont.appendChild(newSquare);
}
