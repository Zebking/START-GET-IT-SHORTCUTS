function showproPage() {
    var mainContentDiv = document.getElementById('mainContent');
    mainContentDiv.innerHTML = ` 
    
    <div class="backtop"></div>
    <div class="box1">-</div>
    <img class="dragonimg" src="img/dragonimg.jpg" alt="dragon">
    <div onclick="showfrontPage()" class="backbutton">&lt;&lt</div>

    <img class="dragonleft" src="img/dragonleft.png" alt="dragon">
    <img class="dragonright" src="img/dragonright.png" alt="dragon">

    <h1 class="backheadtext">Projects</h1>

        <div class="wrapper"></div>
        <div class="Linkbutton" id="lb1" onclick="showcalcPage()">Calculator</div>
        <div class="Linkbutton" onclick="showopenPage(), changecolor()">Is it open?</div>
        <div class="Linkbutton" onclick="chickenClicker(), onLoad(), drawImg()">Chicken Clicker</div>
        <div class="Linkbutton" onclick="showticPage()">TicTacToe</div>
        <div class="Linkbutton"><a class="linkz" style="text-decoration: none;" href="https://github.com/Zebking/zebsbook" target="_blank">This page on github</a></div>
    
    `
}