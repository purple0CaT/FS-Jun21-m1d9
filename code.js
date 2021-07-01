window.onload = function(){
    createBoard()
}



// Creating a board cell's
function createBoard(){
    let board = document.querySelector('.bingo')
    
    for( i = 1; i<=76; i++){
        let cell = document.createElement('div')
        cell.classList.add('cell')
        cell.innerText = randomNum()
        board.appendChild(cell)
    }
}

// function with random numbers
function randomNum(){
    return Math.round(Math.random()*(72-0)+0)

}
// Random button
const button = document.querySelector(".randomB")
button.onclick = console.log(1)
