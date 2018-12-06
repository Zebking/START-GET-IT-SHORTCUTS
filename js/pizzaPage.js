function showpizzaPage() {
    var mainContentDiv = document.getElementById('mainContent');
    mainContentDiv.innerHTML = ` 

    <div class="backtop"></div>
        <div class="box1">-</div>
        <img class="dragonimg" src="img/dragonimg.jpg" alt="dragon">
        <div onclick="showfrontPage()" class="backbutton">&lt;&lt</div>

        <img class="dragonleft" src="img/dragonleft.png" alt="dragon">
        <img class="dragonright" src="img/dragonright.png" alt="dragon">

        <h3 class="header1">Pizza-order</h3>

        <div id="info1" class="pizzainput" style="padding-bottom: 20px;">Make a choice on each line:</div>
      <div class="gridcon">
        Dough: <input class="pizzainput" id="tykkBunn" type="radio" name="bunn" onchange="info()"/>Thick
        <input class="pizzainput" id="tynnBunn" type="radio" name="bunn" onchange="info()"/>Thin <br/>

        Pizzatype: <input class="pizzainput" id="piA" type="radio" name="pizzatype" onchange="info()"/>American
        <input class="pizzainput" id="piI" type="radio" name="pizzatype" onchange="info()"/>Italian<br/>

        Topping: <input class="pizzainput" id="fyllTaco" type="radio" name="fyll" onchange="info()"/>Taco
        <input class="pizzainput" id="fyllKylling" type="radio" name="fyll" onchange="info()"/>Chicken
        <input class="pizzainput" id="fyllPepperoni" type="radio" name="fyll" onchange="info()"/>Pepperoni
        <input class="pizzainput" class="pizzainput" id="fyllSkinke" type="radio" name="fyll" onchange="info()"/>Ham<br/>

        Size: <input class="pizzainput" id="stor" type="radio" name="str" onchange="info()"/>Large
        <input class="pizzainput" id="middels" type="radio" name="str" onchange="info()"/>Medium
        <input class="pizzainput" id="liten" type="radio" name="str" onchange="info()"/>Small<br/>

        <button id="bestill" class="popup" disabled="true" onclick="pizzapopup()";>Order!</button>
      </div>
    `
}
