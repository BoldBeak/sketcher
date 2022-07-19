//--- TOP: Etch-a-Sketch ---


//--- Begin Initial Grid Creation ---
const cont = document.querySelector('.container');
const contHeight = cont.clientHeight;
const contWidth = cont.clientWidth;

let rowCount = 16;
let columnCount = 16;

for (let i = 0; i < rowCount; i++) {
  const row = document.createElement("div");
  let rowNum = "rowNum" + i;

  // rowHeight subtracts 2 to offset width of border (top + bottom);
  const rowHeight = (contHeight / rowCount) - 2;

  row.classList.add(`flexRow`, rowNum);
  row.setAttribute("style", `height: ${rowHeight}px; flex: 1 1 0`);
  cont.appendChild(row);
}

let colContainer = document.querySelectorAll('.flexRow');

// for each row (colContainer) ----->>
for (let j = 0; j < colContainer.length; j++) {

  // add the number of divs specified by columnCount
  for (let k = 0; k < columnCount; k++) {
    // get height and width of each row
    const colHeight = colContainer[j].clientHeight;
    const colWidth = colContainer[j].clientWidth;

    const columnUnit = document.createElement("div");
    let columnNum = "colNum" + k;

    // width offset by 2 for borders
    const columnUnitWidth = (colWidth / columnCount) - 2;

    columnUnit.classList.add("gridUnit", columnNum);
    columnUnit.setAttribute("style", `height: ${colHeight}; width: ${columnUnitWidth}; flex: 1 1 0`);
    colContainer[j].appendChild(columnUnit);
  }
}

let gridUnit = document.querySelectorAll("div.gridUnit");

gridUnit.forEach(gridSquare => {
  gridSquare.addEventListener('mouseover', () => {
    gridSquare.classList.add("mark");
  });
});
// --- End Grid Creation ---

// --- Begin Button Creation ---

const btnCont = document.createElement('div');
btnCont.classList.add('btnContainer');

const buttonNames = ["reset", "resize", "multiColor", "fade"];
for (let i = 0; i < buttonNames.length; i++) {
  const newBtn = document.createElement('button');
  
  newBtn.classList.add(buttonNames[i]);
  btnCont.appendChild(newBtn);
};


const btnContainer = document.querySelector('.btnContainer');
const resetButton = document.querySelector('.clearButton');

const docBody = document.querySelector('body');

docBody.insertBefore(btnCont, cont);

document.querySelector('.reset').textContent = "Clear Grid";
document.querySelector('.resize').textContent = "Resize Grid";
document.querySelector('.multiColor').textContent = "Multi-Color Fun!";
document.querySelector('.fade').textContent = "Fade Out";





