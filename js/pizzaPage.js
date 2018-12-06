function showpizzaPage() {
    var mainContentDiv = document.getElementById('mainContent');
    mainContentDiv.innerHTML = ` 

    <div class="backtop"></div>
        <div class="box1">-</div>
        <img class="dragonimg" src="img/dragonimg.jpg" alt="dragon">
        <div onclick="showfrontPage()" class="backbutton">&lt;&lt</div>

        <img class="dragonleft" src="img/dragonleft.png" alt="dragon">
        <img class="dragonright" src="img/dragonright.png" alt="dragon">

        <h3 class="header1">Pizza-bestilling</h3>

        <div id="info" class="pizzainput" style="padding-bottom: 20px;">Gjør ett valg på hver linje:</div>
      <div class="gridcon">
        Bunn: <input class="pizzainput" id="tykkBunn" type="radio" name="bunn" onchange="info()"/>Tykk
        <input class="pizzainput" id="tynnBunn" type="radio" name="bunn" onchange="info()"/>Tynn <br/>

        Pizzatype: <input class="pizzainput" id="piA" type="radio" name="pizzatype" onchange="info()"/>Amerikansk
        <input class="pizzainput" id="piI" type="radio" name="pizzatype" onchange="info()"/>Italiensk<br/>

        Fyll: <input class="pizzainput" id="fyllTaco" type="radio" name="fyll" onchange="info()"/>Taco
        <input class="pizzainput" id="fyllKylling" type="radio" name="fyll" onchange="info()"/>Kylling
        <input class="pizzainput" id="fyllPepperoni" type="radio" name="fyll" onchange="info()"/>Pepperoni
        <input class="pizzainput" class="pizzainput" id="fyllSkinke" type="radio" name="fyll" onchange="info()"/>Skinke<br/>

        Størrelse: <input class="pizzainput" id="stor" type="radio" name="str" onchange="info()"/>Stor
        <input class="pizzainput" id="middels" type="radio" name="str" onchange="info()"/>Middels
        <input class="pizzainput" id="liten" type="radio" name="str" onchange="info()"/>Liten<br/>

        <button id="bestill" class="popup" disabled="" onclick="pizzapopup()";>Bestill</button>
      </div>
    `
}
var btnBestill = document.getElementById('bestill');
var infoDiv = document.getElementById('info');
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

function info() {
    if ((bunnTykk.checked || bunnTynn.checked) &&
        (fyllTaco.checked || fyllKylling.checked || fyllPepperoni.checked || fyllSkinke.checked) &&
        (strStor.checked || strMiddels.checked || strLiten.checked) &&
        (aPi.checked || iPi.checked)) {
        infoDiv.innerHTML = 'Du har fylt ut alt og er klar til å bestille!';
        btnBestill.disabled = false;
    } else {
        infoDiv.innerHTML = 'Du har ikke valgt:';
        if (!aPi.checked && !iPi.checked) {
            infoDiv.innerHTML += '<li>Pizzatype</li>';
        }
        if (!bunnTykk.checked && !bunnTynn.checked) {
            infoDiv.innerHTML += '<li>Bunn</li>';
        }
        if (!fyllTaco.checked && !fyllKylling.checked && !fyllPepperoni.checked && !fyllSkinke.checked) {
            infoDiv.innerHTML += '<li>Fyll</li>';
        }
        if (!strStor.checked && !strMiddels.checked && !strLiten.checked) {
            infoDiv.innerHTML += '<li>Størrelse</li>';
        }
    }
}