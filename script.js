//--- TOP: Etch-a-Sketch ---

const cont = document.querySelector('.container');
const contHeight = cont.clientHeight;
const contWidth = cont.clientWidth;
console.log(contHeight);

// number of squares per side in grid
let num = 16;

for (let i = 0; i < num * num; i++) {
  let sqId = `sqNum${i + 1}`;
  let sqHeight = (contHeight / num) - 2;
  let sqWidth = (contWidth / num) - 2;
  const newSquare = document.createElement("div");

  newSquare.classList.add("gridSquare");
  newSquare.setAttribute("id", sqId);
  newSquare.setAttribute("style", `height: ${sqHeight}px; width: ${sqWidth}px`)
  cont.appendChild(newSquare);
}
