function chickenClicker() {
    var mainContentDiv = document.getElementById('mainContent');
    mainContentDiv.innerHTML = ` 

<div class="backtop"></div>
<img class="dragonimg" src="img/dragonimg.jpg" alt="dragon">
<div onclick="showproPage()" class="backbutton">&lt;&lt</div>

<h1 class="backheadtext">Chicken Clicker</h1>

        <img id="chicken1" width="640" hight="720" src="img/Chicken1.png" alt="chicken1" />
        <img id="chicken2" width="640" hight="720" src="img/Chicken2.png" alt="chicken2" />


        <canvas id="myCanvas" width="660" height="740"
        onclick="changeImg(), addPoint()" value="add Point"></canvas>

        <input type="text" id="points" value="0" />
        <button id="upgrade1" onclick="upgrade()">Upgrade click - 10p</button>
        <button id="farmer1" onclick="buyFarmer()">Buy Farmer - 100p</button>
        <button id="tractor1" onclick="buyTractor()">Buy Tractor - 500p</button>

     
    `
}