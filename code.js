// window.onload = function(){
    
createBoard()




// Creating a board cell's
function createBoard(){
    let board = document.querySelector('.bingo')
    
    for( i = 1; i<=76; i++){
        let cell = document.createElement('div')
        cell.classList.add('cell')
        cell.innerText = [i]
        board.appendChild(cell)
    }
}


// Random button
const randomButt = document.querySelector("#randomB")
randomButt.onclick = getRandom()

// getting random number
function getRandom(){
    let x = randomNum()
    let resCont = document.getElementsByClassName('result')

    resCont.innerHTML = x;

    let numbers = document.querySelectorAll(".cell")
    for(let card of numbers){
        if(card.value == x){
            card.classList.add("rand-num")
        }
    }

}


// function with random numbers
function randomNum(){
    return Math.round(Math.random()*(72-0)+0)
}