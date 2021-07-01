window.onload = function (){
    startBoard(76)
}
let cellNumber = 76
// The array of random numbers
let y = []


// cell adder

function startBoard(a){
    let board = document.querySelector('.board')
    for(i=1; i<=a; i++){
        let cell = document.createElement('div')
        cell.classList.add('num')
        cell.textContent = [i]
        board.appendChild(cell)
    }
}

// Cell number input , clears the previous cells and ad new one ±

document.querySelector(".cells").addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {

        let numer = document.querySelectorAll('.num')
        for( let num of numer){
            num.remove()
        }
        cellNumber= this.value
        startBoard(this.value)
        this.value = ''
        document.querySelector('.result').innerText = ''
        // array clearing and count clearing
        y = []
        count = 1
        // enebling the button
        document.querySelector('.randomize').removeAttribute("disabled", "disabled")
    }
})

// Randomizer
// variable
let x = 0

// random function
function random (){
x = Math.round(Math.random()*(cellNumber-1)+1)
}

function randomIt(){
    random()
        // checking if in the array exist random number
    while (y.includes(x) !== false){
        random()
    }
        // The push to array
    if (y.length < cellNumber){
        y.push(x)
        // adding color for random number cell
        let nume = document.querySelectorAll('.num')
        nume[x - 1].classList.add("winNum");
        // display the random numbers
        document.querySelector('.result').innerText += " | " + x 
    }
    
}
let count = 1
// Button Randomizer
document.querySelector(".randomize").addEventListener('click', function(){
    randomIt()
    count++
    if ( count > cellNumber){
        document.querySelector('.randomize').setAttribute("disabled", "disabled")
    }
})

// clearing button
document.querySelector(".clearBoard").addEventListener('click', function(){

    let allNum = document.querySelectorAll('.num')
    for (let ran of allNum){
    ran.classList.remove('winNum')
    }
    document.querySelector('.result').innerText = ''
    document.querySelector('.randomize').removeAttribute("disabled", "disabled")
    y = []
    count = 1

})

