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

// Pizza Order

function pizzapopup() {
    var popup = document.getElementByClass("myPopup");
    popup.classList.toggle("show");
}

function info() {
    var btnBestill = document.getElementById('bestill');
    var infoDiv = document.getElementById('info1');
    var aPi = document.getElementById('piA');
    var iPi = document.getElementById('piI');
    var bunnTykk = document.getElementById('tykkBunn');
    var bunnTynn = document.getElementById('tynnBunn');
    var fyllTaco = document.getElementById('fyllTaco');
    var fyllKylling = document.getElementById('fyllKylling');
    var fyllPepperoni = document.getElementById('fyllPepperoni');
    var fyllSkinke = document.getElementById('fyllSkinke');
    var strStor = document.getElementById('stor');
    var strMiddels = document.getElementById('middels');
    var strLiten = document.getElementById('liten');
    if ((bunnTykk.checked || bunnTynn.checked) &&
        (fyllTaco.checked || fyllKylling.checked || fyllPepperoni.checked || fyllSkinke.checked) &&
        (strStor.checked || strMiddels.checked || strLiten.checked) &&
        (aPi.checked || iPi.checked)) {
        infoDiv.innerHTML = 'You have filled out the reqired info <br/> Ready to order!';
        btnBestill.disabled = false;
    }
    else {
        infoDiv.innerHTML = 'You have not chosen:';
        if (!aPi.checked && !iPi.checked) {
            infoDiv.innerHTML += '<li>Pizzatype</li>';
        }
        if (!bunnTykk.checked && !bunnTynn.checked) {
            infoDiv.innerHTML += '<li>Dough</li>';
        }
        if (!fyllTaco.checked && !fyllKylling.checked && !fyllPepperoni.checked && !fyllSkinke.checked) {
            infoDiv.innerHTML += '<li>Topping</li>';
        }
        if (!strStor.checked && !strMiddels.checked && !strLiten.checked) {
            infoDiv.innerHTML += '<li>Size</li>';
        }
    }
}

// ChickenClicker

var img1;
var img2;
var img3;
var img4;
var selectedImage = 0;
var points = 0;
var pointsPerClick = 1;
var farmerCount = 0;
var tractorCount = 0;
var combineCount = 0;
var chickenCoopCount = 0;
var barnCount = 0;
var steroidCount = 0;
var evolveCount = 0;
var chickenEvolution = 0;
console.log();

var imageArray = [
    'img/Egg1.png',
    'img/Egg2.png',
    'img/Chicken1.png',
    'img/Chicken2.png',
];

function drawImg() {
    document.getElementById('myImage').src = imageArray[selectedImage];
}

function blink() {
    if (selectedImage === 2) selectedImage = 3;
    else selectedImage = 2;
    setTimeout(function () { selectedImage = 2; drawImg(); }, 200);
    drawImg();
};

function addPoint() {
    points += pointsPerClick;
    showPoints();
}

function showPoints() {
    document.getElementById('points').value = points + "egg's";
}

function buyClickUp1() {
    if (points >= 10) {
        points -= 10;
        pointsPerClick++;
        showPoints();
    }
}

function buyClickUp2() {
    if (points >= 100) {
        points -= 100;
        pointsPerClick += 10;
        showPoints();
    }
}


function buyClickUp3() {
    if (points >= 1000) {
        points -= 1000;
        pointsPerClick += 100;
        showPoints();
    }
}

function buyUpgrade1() {
    if (points >= 100) {
        points -= 100;
        farmerCount++;
        showPoints();
    }
}

function buyUpgrade2() {
    if (points >= 500) {
        points -= 500;
        tractorCount += 5;
        showPoints();
    }
}
function buyUpgrade3() {
    if (points >= 1000) {
        points -= 1000;
        combineCount += 10;
        showPoints();
    }
}
function buyUpgrade4() {
    if (points >= 10000) {
        points -= 10000;
        chickenCoopCount += 100;
        showPoints();
    }
}
function buyUpgrade5() {
    if (points >= 100000) {
        points -= 100000;
        barnCount += 1000;
        showPoints();
    }
}
function buyUpgrade6() {
    if (points >= 1000000) {
        points -= 1000000;
        steroidCount += 10000;
        showPoints();
    }
}
function buyEvolve() {
    if (points >= 10000000) {
        points -= 10000000;
        evolveCount += 100000;
        showPoints();
        if (selectedImage === 2) selectedImage += 2;
        else selectedImage++;
        drawImg();
    }
}
function test() {
    points += 10000000;
    showPoints();
}
function addPointsFromAuto() {
    points += farmerCount;
    points += tractorCount;
    points += combineCount;
    points += chickenCoopCount;
    points += barnCount;
    points += steroidCount;
    points += evolveCount;
    showPoints();
}

function startGame() {
    document.getElementById("myImage").style.visibility = "visible";
    drawImg();
    setInterval(addPointsFromAuto, 1000);

}
   