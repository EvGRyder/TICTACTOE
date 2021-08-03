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
    let mark

    const htmlSqr = document.querySelector(datakey)
    htmlSqr.addEventListener("click", () => {
        if(obj.mark) return
        addMark(htmlSqr)
        changeMark()
        winCheck(gameBoard.board)

    })

    function changeMark() {
        turn % 2 ? obj.mark = "O" : obj.mark = "X"
    }

    const obj = { pos, mark }
    return obj
}

function addMark(myHtml) {
    let image
    turn % 2 ? image = dunkee : image = shrek
    myHtml.style.backgroundImage = image
    myHtml.style.backgroundSize = "150px"
    myHtml.textContent = currentPlayer()
    turn++
}


const p1 = createPlayer("Bob", "X")
const p2 = createPlayer("Alice", "O")

const gameBoard = (() => {
    const board = [
        createSpace(0, "#top-left"), createSpace(1, "#top-middle"), createSpace(2, "#top-right"),
        createSpace(3, "#middle-left"), createSpace(4, "#middle"), createSpace(5, "#middle-right"),
        createSpace(6, "#bottom-left"), createSpace(7, "#bottom-middle"), createSpace(8, "#bottom-right")
    ]
    return { board }
})()

function currentPlayer() {
    return turn % 2 ? player = "X" : player = "O"
}
let playerName
function currentPlayerName() {
    return turn % 2 ? playerName = "Shrek" : playerName = "Dunkee"
}


function winCheck(board) {
    let currMark = (currentPlayer() == "X")? "O" : "X"
    let tit = document.querySelector("h1")
    function check(pos) {
        return board[pos].mark == currMark
    }
    if (check(0) && check(1) && check(2) ||
        check(3) && check(4) && check(5) || 
        check(6) && check(7) && check(8) || 

        check(0) && check(3) && check(6) || 
        check(1) && check(4) && check(7) || 
        check(2) && check(5) && check(8) || 

        check(0) && check(4) && check(8) || 
        check(2) && check(4) && check(6)
        ){
        tit.textContent = `Winner is ${currentPlayerName()}`
   } else if (turn == 9) {tit.textContent = "tie"}
}
