function chickenClicker() {
    var mainContentDiv = document.getElementById('mainContent');
    mainContentDiv.innerHTML = ` 

<div class="backtop"></div>
<div class="box1">-</div>
<img class="dragonimg" src="img/dragonimg.jpg" alt="dragon">
<div onclick="showproPage()" class="backbutton">&lt;&lt</div>

    <h1 class="head1">Chicken clicker</h1>
        <img id="chicken1" width="640" hight="720" src="https://i.imgur.com/3MsG9if.png" alt="chicken1" />
        <img id="chicken2" width="640" hight="720" src="https://i.imgur.com/LfORjdy.png" alt="chicken2" />


        <canvas id="myCanvas" width="660" height="740"
    onclick="changeImg(), addPoint()" value="add Point"></canvas>

        <input type="text" id="points" value="0" />
        <button id="upgrade1" onclick="upgrade()">Upgrade click - 10p</button>
        <button id="farmer1" onclick="buyFarmer()">Buy Farmer - 100p</button>
        <button id="tractor1" onclick="buyTractor()">Buy Tractor - 500p</button>
        <button id="testButton" onclick="transform()">test</button>

     

    var img1;
    var img2;
    var selectedImage = 1;
    var points = 0;
    var pointsPerClick = 1;
    var farmerCount = 0;
    var tractorCount = 0;


    window.onload = function() {
        img1 = document.getElementById("chicken1");
        img2 = document.getElementById("chicken2");
        drawImg();
        setInterval(addPointsFromAuto, 1000);
    }

    function drawImg() {
        var canvas = document.getElementById("myCanvas");
        var ctx = canvas.getContext("2d");
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        var image = selectedImage === 1 ? img1 : img2;
        ctx.drawImage(image, 10, 10);
    };

    function changeImg() {
        if (selectedImage === 1) selectedImage = 2;
        else selectedImage = 1;
        setTimeout(function() {
                selectedImage = 1;
                drawImg();
            },
            200);
        drawImg();
    };

    function addPoint() {
        points += pointsPerClick;
        showPoints();
    }

    function showPoints() {
        document.getElementById('points').value = points;
    }

    function upgrade() {
        if (points >= 10) {
            points -= 10;
            pointsPerClick++;
            showPoints();
        }
    }

    function buyFarmer() {
        if (points > 100) {
            points -= 100;
            farmerCount++;
            showPoints();
        }
    }

    function buyTractor() {
        if (points > 500) {
            points -= 500;
            tractorCount += 10;
            showPoints();
        }
    }

    function addPointsFromAuto() {
        points += farmerCount;
        points += tractorCount;
        showPoints();
    }

`
}