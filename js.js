window.onload = function(){
    createBoard()
}

function createBoard(){
    let board = document.querySelector('.bingo')

console.log(board)
    for( i = 1; i<=76; i++){
    let cell = document.createElement('div')
    cell.classList.add('cell')
    cell.innerText = `${Math.round(Math.random()*(72-0)+0)}`
    board.appendChild(cell)
    }
}