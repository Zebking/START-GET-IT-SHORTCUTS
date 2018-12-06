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

        <div id="info" style="padding-bottom: 20px;">Gjør ett valg på hver linje:</div>

        Bunn: <input id="tykkBunn" type="radio" name="bunn" onchange="info()"/>Tykk
        <input id="tynnBunn" type="radio" name="bunn" onchange="info()"/>Tynn <br/>

        Pizzatype: <input id="piA" type="radio" name="pizzatype" onchange="info()"/>Amerikansk
        <input id="piI" type="radio" name="pizzatype" onchange="info()"/>Italiensk<br/>

        Fyll: <input id="fyllTaco" type="radio" name="fyll" onchange="info()"/>Taco
        <input id="fyllKylling" type="radio" name="fyll" onchange="info()"/>Kylling
        <input id="fyllPepperoni" type="radio" name="fyll" onchange="info()"/>Pepperoni
        <input id="fyllSkinke" type="radio" name="fyll" onchange="info()"/>Skinke<br/>

        Størrelse: <input id="stor" type="radio" name="str" onchange="info()"/>Stor
        <input id="middels" type="radio" name="str" onchange="info()"/>Middels
        <input id="liten" type="radio" name="str" onchange="info()"/>Liten<br/>

        <button id="bestill" disabled="" onclick="alert('Bestilt!');">Bestill</button>
    `
}
