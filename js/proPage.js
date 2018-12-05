function showproPage() {
    var mainContentDiv = document.getElementById('mainContent');
    mainContentDiv.innerHTML = ` 
    
    <div class="backtop"></div>
    <div class="box1">-</div>
    <img class="dragonimg" src="img/dragonimg.jpg" alt="dragon">
    <div onclick="showfrontPage()" class="backbutton">&lt;&lt</div>

    <h1 class="backheadtext">Projects</h1>

    <div class="wrapper"></div>
    <div class="Linkbutton" id="lb1" onclick="showcalcPage()">Calculator</div>
    <div class="Linkbutton" onclick="showopenPage(), changecolor()">Is it open?</div>
    <div class="Linkbutton" onclick="showpizzaPage()">Pizza order</div>
    <div class="Linkbutton" onclick="showtictacPage()">Tic Tac Toe</div>
    <div class="Linkbutton"><a href="https://github.com/Zebking/zebsbook">This page on github</a></div>
    
    `
}