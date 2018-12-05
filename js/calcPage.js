function showcalcPage() {
    var mainContentDiv = document.getElementById('mainContent');
    mainContentDiv.innerHTML = ` 
    
    <div onclick="showproPage()" class="backbutton">&lt;&lt</div>
    
    <div class="calcback2"><b>Zebsio</b></div>
        <div class="calcback"></div>

        <div id="resultBox" class="resultBox"></div>

        <div class="calc" id="firstInRow" onclick="buttonClicked(7)">7</div>
        <div class="calc" onclick="buttonClicked(8)">8</div>
        <div class="calc" onclick="buttonClicked(9)">9</div>
        <div class="calc" onclick="buttonClicked('/')">/</div>

        <div class="calc" id="firstInRow2" onclick="buttonClicked(4)">4</div>
        <div class="calc" onclick="buttonClicked(5)">5</div>
        <div class="calc" onclick="buttonClicked(6)">6</div>
        <div class="calc" onclick="buttonClicked('*')">*</div>

        <div class="calc" id="firstInRow3" onclick="buttonClicked(1)">1</div>
        <div class="calc" onclick="buttonClicked(2)">2</div>
        <div class="calc" onclick="buttonClicked(3)">3</div>
        <div class="calc" onclick="buttonClicked('-')">-</div>

        <div class="calc" id="firstInRow4" onclick="buttonClicked(0)">0</div>
        <div class="calc" onclick="clearResult()">C</div>
        <div class="calc" onclick="calculate()">=</div>
        <div class="calc" onclick="buttonClicked('+')">+</div>

`
}