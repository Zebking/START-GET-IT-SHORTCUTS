function buttonClicked(X) {
    var resultBox = document.getElementById('resultBox');
    resultBox.innerHTML += X;

}
function calculate() {
    var resultBox = document.getElementById('resultBox');
    var calculation = resultBox
        .innerHTML
    resultBox.innerHTML = eval(calculation);
}
function clearResult() {
    var resultBox = document.getElementById('resultBox');
    resultBox.innerHTML = '';
}
function changecolor() {
    var cC = document.getElementById('body1');
    cC.style.backgroundColor = "black";

}
function changecolorBack() {
    var cC = document.getElementById('body1');
    cC.style.backgroundColor = "white";
}

var isGameStopped = false;

function setX(divElement) {

    if (!isGameStopped
        && divElement.innerHTML !== 'X'
        && divElement.innerHTML !== 'O') {
        divElement.innerHTML = 'X';
        checkWinner();
        if (isGameStopped) return;

        var divs1 = document.getElementsByClassName('grid-item');
        var divs2 = new Array();
        for (var i = 0; i < divs1.length; i++) {
            if (divs1[i].innerHTML !== 'X' && divs1[i].innerHTML !== 'O') {
                divs2.push(divs1[i]);
            }
        }
        if (divs2.length > 0) {
            var index = Math.floor(Math.random() * divs2.length);
            divs2[index].innerHTML = 'O';
            divs2[index].style.color = 'lime';
        }
        checkWinner();
    }
}
function checkWinner() {
    checkCombination(0, 1, 2)
    if (isGameStopped) return;
    checkCombination(3, 4, 5)
    if (isGameStopped) return;
    checkCombination(6, 7, 8)
    if (isGameStopped) return;
    checkCombination(0, 3, 6)
    if (isGameStopped) return;
    checkCombination(1, 4, 7)
    if (isGameStopped) return;
    checkCombination(2, 5, 8)
    if (isGameStopped) return;
    checkCombination(0, 4, 8)
    if (isGameStopped) return;
    checkCombination(6, 4, 2)

}

function checkCombination(index1, index2, index3) {
    var divs3 = document.getElementsByClassName('grid-item');
    var box1 = divs3[index1].innerHTML;
    var box2 = divs3[index2].innerHTML;
    var box3 = divs3[index3].innerHTML;
    if ((box1 === 'X' || box1 === 'O')
        && box2 === box1
        && box3 === box1
    ) {
        var winner = box1 === 'X' ? 'You are' : 'The computer is';
        document.getElementById('info').innerHTML = winner + '<a class="linktext" href="javascript:restart()"> the winner!<br> Click to retry!</a>';
        isGameStopped = true;
    }
}
function restart() {
    location.reload();
}
