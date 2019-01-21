//calculator

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

// Tic Tac Toa

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

// ChickenClicker

var selectedImage = 0;
var points = 0;
var pointsPerClick = 1;
var UpgradeCount = 0;
var chickenEvolution = 0;

var imageArray = [
    'img/Egg1.png',     //0
    'img/Egg2.png',     //1
    'img/Chicken1.png', //2
    'img/Chicken2.png', //3
    'img/Chicken3.png', //4
    'img/Chicken4.png', //5
    'img/Chicken5.png', //6
    'img/Chicken6.png', //7
    'img/Chicken7.png', //8
    'img/Chicken8.png', //9
    'img/gameOver.png', //10
];

function drawImg() {
    document.getElementById('myImage').src = imageArray[selectedImage];
}

function eggCrack() {
    if (selectedImage >= 1) return;
    if (selectedImage === 0) selectedImage = 1;
    else selectedImage = 0;
    setTimeout(function () { selectedImage = 0; drawImg(); }, 200);
    drawImg();
};

function blink() {
    if (selectedImage <= 1) return;
    if (selectedImage >= 3) return;
    if (selectedImage === 2) selectedImage = 3;
    else selectedImage = 2;
    setTimeout(function () { selectedImage = 2; drawImg(); }, 200);
    drawImg();
};

function blink2() {
    if (selectedImage <= 3) return;
    if (selectedImage >= 5) return;
    if (selectedImage === 4) selectedImage = 5;
    else selectedImage = 4;
    setTimeout(function () { selectedImage = 4; drawImg(); }, 200);
    drawImg();
};

function blink3() {
    if (selectedImage <= 5) return;
    if (selectedImage >= 7) return;
    if (selectedImage === 6) selectedImage = 7;
    else selectedImage = 6;
    setTimeout(function () { selectedImage = 6; drawImg(); }, 200);
    drawImg();
};

function angry1() {
    if (selectedImage <= 7) return;
    if (selectedImage >= 9) return;
    if (selectedImage === 8) selectedImage = 9;
    else selectedImage = 8;
    setTimeout(function () { selectedImage = 8; drawImg(); }, 200);
    drawImg();
};

function addPoint() {
    points += pointsPerClick;
    showPoints();
}
function gameOver() {
    if (selectedImage === 10) {
        points = 0;
        pointsPerClick = 0;
        UpgradeCount = 0;

    }

}

function showPoints() {
    document.getElementById('points').value = points + "egg's";
}

function newClickUpgrade(price, upgradeAmount) {
    if (points >= price) {
        points -= price;
        pointsPerClick += upgradeAmount;
        showPoints();
    }
}

function newUpgrade(price, upgradeAmount) {
    if (points >= price) {
        points -= price;
        UpgradeCount += upgradeAmount; 
        showPoints();
    }
}

function buyUpgrade(level) {
    if (level === 1) newUpgrade(100, 1);
    else if (level === 2) newUpgrade(500, 5);
    else if (level === 3) newUpgrade(1000, 10);
    else if (level === 4) newUpgrade(10000, 100);
    else if (level === 5) newUpgrade(100000, 1000);
    else if (level === 6) newUpgrade(1000000, 10000);
    else if (level === 7) newClickUpgrade(10, 1);
    else if (level === 8) newClickUpgrade(100, 10);
    else if (level === 9) newClickUpgrade(1000, 100);
}

function buyEvolve() {
    if (points >= 10000000) {
        points -= 10000000;
        UpgradeCount += 100000;
        showPoints();
        selectedImage += 2;
        drawImg();
    }
}
function test() {
    points += 10000000;
    showPoints();
}
function addPointsFromAuto() {
    points += UpgradeCount;
    showPoints();
}

function startGame() {
    document.getElementById("myImage").style.visibility = "visible";
    drawImg();
    setInterval(addPointsFromAuto, 1000);

}

//Is it open?

function isItOpen() {
    var dat = document.getElementById('dayAndTime');
    var d = new Date();
    var hour = d.getHours();
    var dayNo = d.getDay();

if (dayNo === 1)  day = 'Mandag';
    else if (dayNo === 2) day = 'Tirsdag';
    else if (dayNo === 3) day = 'onsdag';
    else if (dayNo === 4) day = 'Torsdag';
    else if (dayNo === 5) day = 'Fredag';
    else if (dayNo === 6) day = 'Lørdag';
    else if (dayNo === 7) day = 'Søndag';

if (dayNo < 5) {
    if (hour >= 10 && hour <= 16)
        dat.innerHTML += '<p class=open>Open!<br>PARTY TIME!</p>';
    else
        dat.innerHTML += '<p class=stengt>Closed!<br>No party party..T_T</p>';
}
else if (dayNo === 5) {
    if (hour >= 10 && hour <= 17)
        dat.innerHTML += '<p class=open>Open!<br>PARTY TIME!</p>';
    else
        dat.innerHTML += '<p class=stengt>Closed!<br>No party party..T_T</p>';
}
else if (dayNo === 6) {
    if (hour >= 10 && hour <= 14)
        dat.innerHTML += '<p class=open>Open!<br>PARTY TIME!</p>';
    else
        dat.innerHTML += '<p class=stengt>Closed!<br>No party party..T_T</p>';
} else if (dayNo === 7) {
        dat.innerHTML += '<p class=stengt>Closed!<br>No party party..T_T</p>';

    }
}