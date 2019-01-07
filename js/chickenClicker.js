function chickenClicker() {
    var mainContentDiv = document.getElementById('mainContent');
    mainContentDiv.innerHTML = ` 

<div class="backtop"></div>
<img class="dragonimg" src="img/dragonimg.jpg" alt="dragon">
<div onclick="showproPage()" class="backbutton">&lt;&lt</div>

<h1 class="backheadtext">Chicken Clicker</h1>

        <img id="myImage" width="660" height="740"
        onclick="changeImg(), addPoint()" value="add Point"></img>

        <input type="text" id="points" value="0" disabled="disabled"/>
        <button id="upgrade1" onclick="upgrade()">Upgrade click</button>
        <button id="upgrade2" onclick="megaUpgrade()">Upgrade click super</button>
        <button id="farmer1" onclick="buyFarmer()">Buy Farmer</button>
        <button id="tractor1" onclick="buyTractor()">Buy Tractor</button>
        <button id="combine1" onclick="buyCombine()">Buy Combine</button>
        <button id="coop1" onclick="buyChickenCoop()">Buy Coop</button>
        <button id="barn1" onclick="buyBarn()">Buy Barn</button>
        <button id="steroids1" onclick="buySteroids()">Give chicken steroids</button>
        <button id="evolve1" onclick="buyEvolve()">Evolve</button>
        <button id="test" onclick="test()">Test</button>

        <ul id="priceList">
            <li><b>PriceList</b></li>
            <li>Upgrade click - 10p</li>
            <li>Upgrade click super - 1000p</li>
            <li>Buy Farmer - 100p</li>
            <li>Buy Tractor - 500p</li>
            <li>Buy Combine - 1000p</li>
            <li>Buy Chicken Coop - 10000p</li>
            <li>Buy Barn - 100000p</li>
            <li>Give chicken steroids - 1000000p</li>
            <li>Evolve - 10000000p</li>
        </ul>
     
    `
}