function showticPage() {
    var mainContentDiv = document.getElementById('mainContent');
    mainContentDiv.innerHTML = ` 

    <div class="backtop"></div>
        <img class="dragonimg" src="img/dragonimg.jpg" alt="dragon">
        <div onclick="showproPage()" class="backbutton">&lt;&lt</div>
        <h1 class="backheadtext">Start/Get IT Shortcuts</h1>    

        <img class="dragonleft" src="img/dragonleft.png" alt="dragon">
        <img class="dragonright" src="img/dragonright.png" alt="dragon">    
 
        <div class="boxwrap"></div>

        <h1 id="info">TicTacToa</h1>
        <div class="grid-container">

        <div class="grid-item" onclick="setX(this)" id="first"></div>
        <div class="grid-item" onclick="setX(this)"></div>
        <div class="grid-item" onclick="setX(this)"></div>
        <div class="grid-item" onclick="setX(this)" id="first"></div>
        <div class="grid-item" onclick="setX(this)"></div>
        <div class="grid-item" onclick="setX(this)"></div>
        <div class="grid-item" onclick="setX(this)" id="first"></div>
        <div class="grid-item" onclick="setX(this)"></div>
        <div class="grid-item" onclick="setX(this)"></div>

    `
}
