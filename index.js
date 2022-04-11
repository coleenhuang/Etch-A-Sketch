const grid = document.querySelector('.grid-container');

function insertSquares () {
    for (let i = 0; i<256; i++) {
        let div = document.createElement('div')
        div.classList.add('square')
        grid.appendChild(div)
    }
    onHover()
}

function onHover () {
    grid.addEventListener('mouseover', function(event) {
        if(event.target.className == 'square') {
            event.target.style.backgroundColor = 'black';
        }
        
    })
}

insertSquares();
