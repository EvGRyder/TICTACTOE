let turn = 0
let fionaPic = 'url("img/fiona.jpeg")'
let shrekPic = 'url("img/shrek.png")'
let dunkeePic = 'url("img/dawnkee.jpg")'

const headTitle = document.querySelector("h1")

function createPlayer(name, marker, isComp) {
    return {
        name,
        marker,
        isComp

    }
}

const Dunkee = createPlayer("Dunkee", dunkeePic, true)
const Shrek = createPlayer("Shrek" , shrekPic, false)
const Fiona = createPlayer("Fiona", fionaPic, false)
const characterList = [Dunkee, Fiona, Shrek]

let playerOne
let playerTwo

(function playerInitialize() {
    playerOne = Shrek
    playerTwo = Fiona
    playerOne.pieces = "X"
    playerTwo.pieces = "O"
})()

let playerList = [playerOne, playerTwo]

const startButton = document.querySelector("#begin")



function createSpace(pos) {
    let mark
    const posHtml = document.querySelector(boardDict[pos])
    posHtml.addEventListener("click", () => {
        if (turn > 8) return
        playOnPos()
        winCheck(gameBoard.board)
        turn++
        if (turn > 8) return
        setTimeout(compPlay, 1000)
    })

    function playOnPos() {
        if(obj.mark) return
        obj.mark = currPlayer().pieces
        makePlay(posHtml, currPlayer())
    }
    
    const obj = { pos, mark, playOnPos }
    return obj
}


function makePlay(myHtml, player) {
    let image = player.marker
    myHtml.style.backgroundImage = image
    myHtml.style.backgroundSize = "150px"
    headTitle.textContent = `Current player is ${nextPlayer().name}` 
}

function compPlay() {
    let freeSquares = gameBoard.board.filter(obj => !obj.mark) 
    let freeLength = freeSquares.length
    let randNum = Math.floor(Math.random()*freeLength)
    freeSquares[randNum].playOnPos()
    winCheck(gameBoard.board)
    turn++
}
const boardDict = {
    0: "#top-left",
    1: "#top-middle",
    2: "#top-right",
    3: "#middle-left",
    4: "#middle",
    5: "#middle-right",
    6: "#bottom-left",
    7: "#bottom-middle",
    8: "#bottom-right"
}

const gameBoard = (() => {
    let board = []
    for (let i = 0; i < 9; i++) {
        board.push(createSpace(i))
    }
    return { board }
})()

function currPlayer() {
    return playerList[(turn+1)%2]
}
function nextPlayer() {
    return playerList[turn%2]
}


function winCheck(board) {
    if (isWon(board)){
        headTitle.textContent = `Winner is ${currPlayer().name}`
        turn = 9
   } else if (turn == 9) {headTitle.textContent = "tie"}
}

function isWon(board) {
    let currMark = currPlayer().pieces
    function check(pos) {
        return board[pos].mark == currMark
    }
    return  check(0) && check(1) && check(2) ||
            check(3) && check(4) && check(5) || 
            check(6) && check(7) && check(8) || 

            check(0) && check(3) && check(6) || 
            check(1) && check(4) && check(7) || 
            check(2) && check(5) && check(8) || 

            check(0) && check(4) && check(8) || 
            check(2) && check(4) && check(6)
}
isWon(gameBoard.board)