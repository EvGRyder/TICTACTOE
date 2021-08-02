let turn = 0
let shrek = 'url("img/shrek.png")'
let dunkee = 'url("img/dawnkee.jpg")'


function createPlayer(Name, Marker) {
    return {
        Name: Name,
        Pieces: Marker,
        getPlayer() {
            console.log(Name + " is playing " + Marker);
        }
    }
}

function createSpace(pos, datakey) {
    const htmlSqr = document.querySelector(datakey)
    htmlSqr.addEventListener("click", myMark)
    function myMark() {
        
        if (this.mark) return
        if (turn % 2) {
            currMark = "X"
            htmlSqr.style.backgroundImage = dunkee
            htmlSqr.style.backgroundSize = "150px"
            htmlSqr.style.backgroundColor = "blue"
        } 
        else {
            currMark = "O"
            htmlSqr.style.backgroundImage = shrek
            htmlSqr.style.backgroundSize = "150px"
        }
        turn++
        htmlSqr.textContent = `${currMark}`
        
        this.mark = currMark
    }

    return {
        pos
    }
}

const p1 = createPlayer("Bob", "X")
const p2 = createPlayer("Alice", "O")
p1.getPlayer()
p2.getPlayer()

const gameBoard = (() => {
    const board = [
        createSpace(0, "#top-left"), createSpace(1, "#top-middle"), createSpace(2, "#top-right"),
        createSpace(3, "#middle-left"), createSpace(4, "#middle"), createSpace(5, "#middle-right"),
        createSpace(6, "#bottom-left"), createSpace(7, "#bottom-middle"), createSpace(8, "#bottom-right")
    ]
    return { board }
})()

console.log(gameBoard);
let curr = gameBoard.board
