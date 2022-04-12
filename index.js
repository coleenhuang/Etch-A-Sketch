const grid = document.querySelector('.grid-container');
const slider = document.querySelector('#squarenum');

function insertSquares () {
    //Inserts squares for 16x16 grid
    for (let i = 0; i<256; i++) {
        let div = document.createElement('div')
        div.classList.add('square')
        grid.append(div)
    }
    onHover()
    clearGrid()
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

function clearGrid () {
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
    })
}

insertSquares();
getSquareNum();

