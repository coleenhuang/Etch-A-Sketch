const grid = document.querySelector('.grid-container');

function insertSquares () {
    for (let i = 0; i<16; i++) {
        let div = document.createElement('div')
        div.classList.add('square')
        grid.appendChild(div)
    }
}

insertSquares();