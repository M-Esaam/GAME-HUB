var playerOneRed
var playerTwoYellow
var resultGrid = []
var currentCol = []
var finish = false
var end
var hideRed = 0
var hideYellow = 0
var currentPlayer




function Start() {
    selectSound()
    var play = document.getElementById("play");
    var help = document.getElementById("help");
    var Exit = document.getElementById("Exit");
    var welcom = document.getElementById("welcome");
    welcom.style.display = 'none'

    play.style.display = "none";
    help.style.display = "none";
    Exit.style.display = "none";

    var player1 = document.getElementById("player1");
    var player2 = document.getElementById("player2");
    player1.style.display = "inline";
    player2.style.display = "inline";

    var textPLayer1 = document.getElementById("player1-in");
    var textPLayer2 = document.getElementById("player2-in");
    textPLayer1.style.display = "inline"
    textPLayer2.style.display = "inline"

    var back = document.getElementById("back")
    back.style.display = "block"

    var start = document.getElementById("Start");
    start.style.display = "block"





}

function back() {
    selectSound();
    document.getElementById("back").style.display = "none"
    document.getElementById("Back").style.display = "none"
    document.getElementById("description").style.display = "none"
    document.getElementById("welcome").style.display = "block"
    var player1 = document.getElementById("player1-in")
    var player2 = document.getElementById("player2-in")
    var player1Lable = document.getElementById("player1")
    var player2Lable = document.getElementById("player2")

    player1Lable.style.display = "none"
    player2Lable.style.display = "none"

    player1.style.display = "none"
    player2.style.display = "none"

    var back = document.getElementById("back")
    back.style.display = "none"

    var start = document.getElementById("Start");
    start.style.display = "none"

    var play = document.getElementById("play");
    var help = document.getElementById("help");
    var Exit = document.getElementById("Exit");

    play.style.display = "block";
    help.style.display = "block";
    Exit.style.display = "block";


}

function help() {
    selectSound();
    document.getElementById("Back").style.display = "block"
    var play = document.getElementById("play");
    var help = document.getElementById("help");
    var Exit = document.getElementById("Exit");
    var welcom = document.getElementById("welcome");
    welcom.style.display = 'none'
    play.style.display = "none";
    help.style.display = "none";
    Exit.style.display = "none";
    document.getElementById("description").style.display = "block"
}

function exit() {
    selectSound();
    setTimeout(function () {
        window.close();
    }, 500);
}




function Home() {
    selectSound();
    var player1 = document.getElementById("player1-in")
    var player2 = document.getElementById("player2-in")
    var player1Lable = document.getElementById("player1")
    var player2Lable = document.getElementById("player2")

    player1Lable.style.display = "none"
    player2Lable.style.display = "none"

    playerOneRed = player1.value
    playerTwoYellow = player2.value
    player1.style.display = "none"
    player2.style.display = "none"

    var back = document.getElementById("back")
    back.style.display = "none"

    var start = document.getElementById("Start");
    start.style.display = "none"

    currentPlayer = playerOneRed
    var game = document.getElementById("game");
    game.style.display = "block";
    var turn = document.getElementById("winner");
    turn.innerHTML = playerOneRed + "  turn";
    turn.style.color = "red";



}


function load() {


    var addRed = document.getElementById("red")
    for (var i = 0; i < 21; i++) {
        var red = document.createElement("div")
        red.classList.add("RED")
        red.style.width = 50 + 'px'
        red.style.height = 50 + 'px'
        red.style.borderRadius = 50 + '%'
        red.style.backgroundColor = "red"
        red.style.marginLeft = 5 + 'px'
        red.style.marginTop = 7 + 'px'
        addRed.appendChild(red)


    }
    var addYellow = document.getElementById("yellow")
    for (var i = 0; i < 21; i++) {
        var yellow = document.createElement("div")
        yellow.classList.add("YELLOW")
        yellow.style.width = 50 + 'px'
        yellow.style.height = 50 + 'px'
        yellow.style.borderRadius = 50 + '%'
        yellow.style.backgroundColor = "yellow"
        yellow.style.marginLeft = 5 + 'px'
        yellow.style.marginTop = 7 + 'px'
        addYellow.appendChild(yellow)


    }

    var slot = document.getElementsByClassName("place")
    for (var i = 0; i < slot.length; i++) {
        slot[i].addEventListener("click", play)
        end = 5
    }

    currentCol = [5, 5, 5, 5, 5, 5, 5]

    for (var i = 0; i < 6; i++) {
        resultGrid[i] = []
        for (var j = 0; j < 7; j++) {
            resultGrid[i][j] = ''
        }
    }
}

function play() {

    var endRed = end
    if (finish) {
        return
    }


    var row_col = this.id.split("-")
    var row = parseInt(row_col[0])
    var col = parseInt(row_col[1])
    row = currentCol[col]

    resultGrid[row][col] = currentPlayer
    var turn = document.getElementById("winner");
    turn.innerHTML = playerOneRed + "  turn";
    turn.style.color = "red";

    if (currentPlayer == playerOneRed) {
        slideSound();

        var turn = document.getElementById("winner");
        turn.innerHTML = playerTwoYellow + "  turn";
        turn.style.color = "yellow";
        var RED = document.getElementsByClassName("RED")
        RED[hideRed].style.backgroundColor = "black"
        currentPlayer = playerTwoYellow
        var myEnd = currentCol[col] + 1
        var i = 0
        var red = setInterval(() => {
            var color = document.getElementById(i.toString() + "-" + col.toString())
            // color.classList.add("playRed")
            if (i == myEnd) {
                color.style.backgroundColor = "red"
                currentPlayer = playerTwoYellow
                clearInterval(red)
            }
            else {
                color.style.backgroundColor = "red"
                currentPlayer = playerTwoYellow
                var black = setInterval(() => {

                    color.style.backgroundColor = "black"
                    currentPlayer = playerTwoYellow
                    clearInterval(black)
                }, 50)

            }

            i++

        }, 50)
        myEnd--
        currentCol[col]--
        hideRed++
    }

    else {
        slideSound();
        var turn = document.getElementById("winner");
        turn.innerHTML = playerOneRed + "  turn";
        turn.style.color = "red";
        var YELLOW = document.getElementsByClassName("YELLOW")
        YELLOW[hideYellow].style.backgroundColor = "black"
        var myEnd = currentCol[col] + 1
        var i = 0
        var yellow = setInterval(() => {
            var color = document.getElementById(i.toString() + "-" + col.toString())
            // color.classList.add("playRed")
            if (i == myEnd) {
                color.style.backgroundColor = "yellow"
                currentPlayer = playerOneRed
                clearInterval(yellow)
            }
            else {
                color.style.backgroundColor = "yellow"
                var black = setInterval(() => {

                    color.style.backgroundColor = "black"
                    clearInterval(black)
                }, 50)

            }


            i++
        }, 50)
        myEnd--
        currentCol[col]--
        hideYellow++

    }



    win()
}

function win() {




    for (var row = 0; row < 6; row++) {
        for (var col = 0; col < 4; col++) {
            if (resultGrid[row][col] != '') {
                if (resultGrid[row][col] == resultGrid[row][col + 1] && resultGrid[row][col + 1] == resultGrid[row][col + 2] && resultGrid[row][col + 2] == resultGrid[row][col + 3]) {
                    Winner(row, col);
                    return;
                }
            }
        }
    }




    for (var col = 0; col < 7; col++) {
        for (var row = 0; row < 3; row++) {
            if (resultGrid[row][col] != '') {
                if (resultGrid[row][col] == resultGrid[row + 1][col] && resultGrid[row + 1][col] == resultGrid[row + 2][col] && resultGrid[row + 2][col] == resultGrid[row + 3][col]) {
                    Winner(row, col)
                    return
                }
            }
        }
    }





    for (var row = 0; row < 3; row++) {
        for (var col = 0; col < 4; col++) {
            if (resultGrid[row][col] != '') {
                if (resultGrid[row][col] == resultGrid[row + 1][col + 1] && resultGrid[row + 1][col + 1] == resultGrid[row + 2][col + 2] && resultGrid[row + 2][col + 2] == resultGrid[row + 3][col + 3]) {
                    Winner(row, col)
                    return

                }
            }
        }
    }

    for (var row = 3; row < 6; row++) {
        for (var col = 0; col < 4; col++) {
            if (resultGrid[row][col] != '') {
                if (resultGrid[row][col] == resultGrid[row - 1][col + 1] && resultGrid[row - 1][col + 1] == resultGrid[row - 2][col + 2] && resultGrid[row - 2][col + 2] == resultGrid[row - 3][col + 3]) {

                    Winner(row, col)
                    return
                }
            }
        }
    }

}
function PlaySound() {
    document.getElementById("winSound").play();
}
function selectSound() {
    document.getElementById("selectSound").play();
}
function slideSound() {
    document.getElementById("slideSound").play();
}

function Winner(row, col) {

    if (resultGrid[row][col] == playerOneRed) {
        document.getElementById("winner").innerHTML = "winner is " + playerOneRed
        document.getElementById("winner").style.color = "red"
    }
    else {
        document.getElementById("winner").innerHTML = "winner is " + playerTwoYellow
        document.getElementById("winner").style.color = "yellow"

    }
    var game = document.getElementById("game");
    game.style.display = "none";

    document.getElementById("winner").style.marginTop = "200px";
    document.getElementById("winner").style.fontSize = "200px";
    document.getElementById("winner").style.transitionDuration = "2s";
    document.getElementById("playAgain").style.display = "block"
    document.getElementById("playAgain").style.opacity = "1"
    PlaySound();

    finish = true

}

function playAgain() {
    selectSound();
    setTimeout(function () {
        location.reload();
    }, 200);


}








const colors = ["red", "yellow", "cyan"];

const numBalls = 50;
const balls = [];

for (let i = 0; i < numBalls; i++) {
    let ball = document.createElement("div");
    ball.classList.add("ball");
    ball.style.background = colors[Math.floor(Math.random() * colors.length)];
    ball.style.left = `${Math.floor(Math.random() * 100)}vw`;
    ball.style.top = `${Math.floor(Math.random() * 100)}vh`;
    ball.style.transform = `scale(${Math.random()})`;
    ball.style.width = `${Math.random()}em`;
    ball.style.height = ball.style.width;

    balls.push(ball);
    document.body.append(ball);
}

// Keyframes
balls.forEach((el, i, ra) => {
    let to = {
        x: Math.random() * (i % 2 === 0 ? -11 : 11),
        y: Math.random() * 12
    };

    let anim = el.animate(
        [
            { transform: "translate(0, 0)" },
            { transform: `translate(${to.x}rem, ${to.y}rem)` }
        ],
        {
            duration: (Math.random() + 1) * 2000, // random duration
            direction: "alternate",
            fill: "both",
            iterations: Infinity,
            easing: "ease-in-out"
        }
    );
});

