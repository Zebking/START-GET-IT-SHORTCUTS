function chickenClicker() {
    var mainContentDiv = document.getElementById('mainContent');
    mainContentDiv.innerHTML = ` 

<div class="backtop"></div>
<img class="dragonimg" src="img/dragonimg.jpg" alt="dragon">
<div onclick="showproPage()" class="backbutton">&lt;&lt</div>

<h1 class="backheadtext">Chicken Clicker</h1>

        <img id="myImage" width="400" height="500"
        onclick="addPoint()" onmousedown="blink(), blink2(), crack(), blink3(), angry1()" value="add Point"></img>

        <input type="text" id="points" value="0" disabled="disabled"/>
        <button id="clickUp1" onclick="buyClickUp1()">Upgrade click</button>
        <button id="clickUp2" onclick="buyClickUp2()">Upgrade click 2</button>
        <button id="clickUp3" onclick="buyClickUp3()">Upgrade click 3</button>
        <button id="upgrade1" onclick="buyUpgrade1()">Upgrade 1</button>
        <button id="upgrade2" onclick="buyUpgrade2()">Upgrade 2</button>
        <button id="upgrade3" onclick="buyUpgrade3()">Upgrade 3</button>
        <button id="upgrade4" onclick="buyUpgrade4()">Upgrade 4</button>
        <button id="upgrade5" onclick="buyUpgrade5()">Upgrade 5</button>
        <button id="upgrade6" onclick="buyUpgrade6()">Upgrade 6</button>
        <button id="evolve1" onclick="buyEvolve()">Evolve</button>
        <button id="test" onclick="test()">"TEST" - Give shitload of eggs!</button>

        <div id="startGame" onclick="this.style.visibility='hidden'; startGame()">Start game!</div>

        <ul id="priceList">
            <li><b>PriceList</b></li>
            <li>Upgrade click - Add 1epc - 10 Egg's</li>
            <li>Upgrade click 2 - Add 10epc - 100 Egg's</li>
            <li>Upgrade click 3 - Add 100epc - 1000 Egg's</li>
            <li>Upgrade 1 - Give 1eps - 100 Egg's</li>
            <li>Upgrade 2 - Give 5eps - 500 Egg's</li>
            <li>Upgrade 3 - Give 10eps - 1000 Egg's</li>
            <li>Upgrade 4 - Give 100eps - 10.000 Egg's</li>
            <li>Upgrade 5 - Give 1000eps - 100.000 Egg's</li>
            <li>Upgrade 6 - Give 10000eps - 1.000.000 Egg's</li>
            <li>Evolve - 10.000.000 Egg's</li>
            <li>--------------------------------------</li>
            <li>eps = Egg's per seconds</li>
            <li>epc = Egg's per click</li>
        </ul>
     
    `
}