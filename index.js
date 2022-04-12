const grid = document.querySelector('.grid-container');
const slider = document.querySelector('#slider');

function startGame () {
    getSquareNum();
    generateGrid();
    resetGrid();
    
}
function generateGrid () {
    //Creates the correct number of squares for the grid
    while (grid.hasChildNodes()) {
        grid.removeChild(grid.lastChild)
      }
    let gridNumber = slider.valueAsNumber;
    let totalSquares = Math.pow(gridNumber, 2)
    for (let i = 0; i< totalSquares; i++) {
        let gridItem = document.createElement('div')
        gridItem.classList.add('square')
        grid.style.gridTemplateColumns = `repeat(${gridNumber}, 1fr)`;
        grid.style.gridTemplateRows = `repeat(${gridNumber}, 1fr)`;
        grid.insertAdjacentElement('beforeend', gridItem);
    }
    onHover()
}

function resizeSquares(side) {
    grid.style.gridTemplate = `repeat(${side}, 1fr)/ repeat(${side}, 1fr)`
}

function onHover () {
    //Adds event listener to parent element grid
    grid.addEventListener('mouseover', function(event) {
        if(event.target.className == 'square') {
            //changes the square to black upon hover
            event.target.style.backgroundColor = 'black';
        }
        
    })
}

function resetGrid () {
    //Resets the squares in the grid to blank
    document.querySelector('.clear').addEventListener('click', () => {
        let squares = document.querySelectorAll('.square');
        let squaresNum = squares.length;
        for (let i = 0; i < squaresNum; i++) {
            squares[i].style.backgroundColor = "white";
        }
    }) 
}


function getSquareNum() {
    slider.addEventListener('change', (event) => {
        console.log(event.target.valueAsNumber)
        generateGrid();
    })
}

startGame()



