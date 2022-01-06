//--- TOP: Etch-a-Sketch ---

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



// function makeColumns(columnCount) {
  let colContainer = document.querySelectorAll('.flexRow');

  // for each row (colContainer) ----->>
  for (let j = 0; j < colContainer.length; j++) {

    // add the number of divs specified by columnCount
    for (let k = 0; k < columnCount; k++) {

      // get height and width of each row
      const colHeight = colContainer[j].clientHeight;
      const colWidth = colContainer[j].clientWidth;

      const columnUnit = document.createElement("div");
      let columnNum = "colNum" + j;

      // height and width offset by 2 for borders
      const columnUnitWidth = (colWidth / columnCount) - 2;
      const columnUnitHeight = colHeight - 2

      columnUnit.classList.add("gridUnit", columnNum);
      columnUnit.setAttribute("style", `height: ${columnUnitHeight}; width: ${columnUnitWidth}; flex: 1 1 0`);
      colContainer[j].appendChild(columnUnit);
    }
  }
//}

// number of squares per side in grid
// let num = 16;

// for (let i = 0; i < num * num; i++) {
//   let sqId = `sqNum${i + 1}`;
//   let sqHeight = (contHeight / num) - 2;
//   let sqWidth = (contWidth / num) - 2;
//   const newSquare = document.createElement("div");

//   newSquare.classList.add("gridSquare");
//   newSquare.setAttribute("id", sqId);
  
//   newSquare.setAttribute("style", `height: ${sqHeight}px; width: ${sqWidth}px`)
//   cont.appendChild(newSquare);
// }
