function chickenClicker() {
    var mainContentDiv = document.getElementById('mainContent');
    mainContentDiv.innerHTML = ` 

<div class="backtop"></div>
<img class="dragonimg" src="img/dragonimg.jpg" alt="dragon">
<div onclick="showproPage()" class="backbutton">&lt;&lt</div>

<h1 class="backheadtext">Chicken Clicker</h1>

        <img id="chicken1" width="640" hight="720" src="img/Chicken1.png" alt="chicken1" />
        <img id="chicken2" width="640" hight="720" src="img/Chicken2.png" alt="chicken2" />
        <img id="egg1" width="640" hight="720" src="img/Egg1.png" alt="egg1" />
        <img id="egg2" width="640" hight="720" src="img/Egg2.png" alt="egg2" />


        <canvas id="myCanvas" width="660" height="740"
        onclick="changeImg(), addPoint(), evolveImg()" value="add Point"></canvas>

        <input type="text" id="points" value="0" />
        <button id="upgrade1" onclick="upgrade()">Upgrade click - 10p</button>
        <button id="upgrade2" onclick="megaUpgrade()">Upgrade click super - 1000p</button>
        <button id="farmer1" onclick="buyFarmer()">Buy Farmer - 100p</button>
        <button id="tractor1" onclick="buyTractor()">Buy Tractor - 500p</button>
        <button id="combine1" onclick="buyCombine()">Buy Combine - 1000p</button>
        <button id="coop1" onclick="buyChickenCoop()">Buy ChickenCoop - 10000p</button>
        <button id="barn1" onclick="buyBarn()">Buy Barn - 100000p</button>
        <button id="steroids1" onclick="buySteroids()">Give chicken steroids - 1000000p</button>
        <button id="evolve1" onclick="buyEvolve()">Evolve - 10000000p</button>
        <button id="test" onclick="test()">Test (add 10000000</button>


     
    `
}