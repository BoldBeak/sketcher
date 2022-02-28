//--- TOP: Etch-a-Sketch ---

/* container should be squared to the lesser of the height or width of the viewport */

let winHi = window.visualViewport.height;
console.log(winHi);
let winWi = window.visualViewport.width;
console.log(winWi);

function findSize(h, w) {
  if (h == w) {
    return Math.floor(h);
  } else if (h > w) {
    return Math.floor(w);
  } else if (w > h) {
    return Math.floor(h);
  }
}




const cont = document.querySelector('.container');
const contSide = findSize(winHi, winWi);

let contHeight = cont.setAttribute('style', `height: calc(.9 * (${contSide}px - 30px)); width: calc(.9 * (${contSide}px - 30px))`);


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

