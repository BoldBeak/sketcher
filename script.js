//--- TOP: Etch-a-Sketch ---

//get size of window to determine length of side
let winHi = window.visualViewport.height;
console.log(winHi);
let winWi = window.visualViewport.width;
console.log(winWi);

// FIXME: Redo as ternary?
function findSize(h, w) {
  if (h == w) {
    return Math.floor(h);
  } else if (h > w) {
    return Math.floor(w);
  } else if (w > h) {
    return Math.floor(h);
  }
}

// set size of container
const cont = document.querySelector('.container');
const contSide = findSize(winHi, winWi);

let contHeight = cont.setAttribute('style', `height: calc(.75 * (${contSide}px - 30px)); width: calc(.75 * (${contSide}px - 30px))`);

// set number of squares per side
let defaultRowCount = 16;
createGrid(defaultRowCount);
makeMark();


function createGrid(rowCount) {
  let columnCount = rowCount;
  // create rows
  for (let i = 0; i < rowCount; i++) {
    const row = document.createElement("div");
    let rowNum = "rowNum" + i;

    // rowHeight subtracts 2 to offset width of border (top + bottom);
    const rowHeight = (contHeight / rowCount) - 2;

    row.classList.add(`flexRow`, rowNum);
    row.setAttribute("style", `height: ${rowHeight}px; flex: 1 1 0`);
    cont.appendChild(row);
  };

  // subdivide rows into columns/squares
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
};

// select squares and change their color

function makeMark() {
  const gridUnit = document.querySelectorAll("div.gridUnit");
  
  gridUnit.forEach(gridSquare => {
    gridSquare.addEventListener('mouseover', () => {
      gridSquare.classList.add("mark");
    });
  });
};

//Add a button prompting for size
// container for button
const promptCont = document.createElement('div');
promptCont.classList.add("promptContainer");
// TODO: Assign properties to class in css rather than inline
promptCont.setAttribute("style", `height: 12vh; width: calc(.75 * ${contSide}px); background-color: #011627; margin: auto`);

// create button
const promptButton = document.createElement('button');
promptButton.innerText = "How many squares per side?";
promptButton.classList.add("resetPromptBtn");
promptButton.addEventListener('click', updateGrid);
promptCont.appendChild(promptButton);

// insert button container
const docBody = document.querySelector("body");
docBody.insertBefore(promptCont, cont);

// function resetGridMark() {
//   gridUnit.forEach(gridSquare => gridSquare.classList.remove("mark"));
// }


function updateGrid() {
  const gridUnit = document.querySelectorAll("div.gridUnit");
  gridUnit.forEach(gridSquare => gridSquare.classList.remove("mark"));
  
  let rowCount = askSize();
  cont.replaceChildren();
  createGrid(rowCount);
  makeMark();

  function askSize() {
    const userInput = prompt("Choose your grid size");
    // TODO:  Change message
    const reprompt = "Redo";

    if (userInput >= 16 && userInput <= 100) {
      console.log(userInput);
      return +userInput;
    } else
      prompt(reprompt);
  };
};

