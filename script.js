let turn = 0
let shrek = 'url("img/shrek.png")'
let dunkee = 'url("img/dawnkee.jpg")'

const headTitle = document.querySelector("h1")

function createPlayer(name, pieces) {
    return {
        name,
        pieces

    }
}
const pComp = createPlayer("Computer", "X")
const userPlayer = createPlayer("Me" ,"O")
const playerList = [userPlayer, pComp]


function createSpace(pos, datakey) {
    let mark

    const htmlSqr = document.querySelector(datakey)
    htmlSqr.addEventListener("click", () => {
        if(obj.mark) return
        markSpace()
        makePlay(htmlSqr)
        winCheck(gameBoard.board)
    })

    function markSpace() {
        turn % 2 ? obj.mark = "O" : obj.mark = "X"
    }

    const obj = { pos, mark }
    return obj
}

function makePlay(myHtml) {
    let image
    turn % 2 ? image = dunkee : image = shrek
    myHtml.style.backgroundImage = image
    myHtml.style.backgroundSize = "150px"
    headTitle.textContent = `Current player is ${currPlayer().name}` 
    turn++
}


const gameBoard = (() => {
    const board = [
        createSpace(0, "#top-left"), createSpace(1, "#top-middle"), createSpace(2, "#top-right"),
        createSpace(3, "#middle-left"), createSpace(4, "#middle"), createSpace(5, "#middle-right"),
        createSpace(6, "#bottom-left"), createSpace(7, "#bottom-middle"), createSpace(8, "#bottom-right")
    ]
    return { board }
})()

function currPlayer() {
    return playerList[turn%2]
}


function winCheck(board) {
    let currMark = currPlayer().pieces
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
        headTitle.textContent = `Winner is ${currPlayer().name}`
   } else if (turn == 9) {headTitle.textContent = "tie"}
}
