function showproPage() {
    var mainContentDiv = document.getElementById('mainContent');
    mainContentDiv.innerHTML = ` 

    <h1 class="head">Projects</h1>

    <div class="Linkbutton" onclick="showcalcPage()>Calculator</div>
    <div class="Linkbutton" onclick="showopenPage()>Is it open?</div>
    <div class="Linkbutton" onclick="showpizzaPage()>Pizza order</div>
    <div class="Linkbutton" onclick="showtictacPage()>Tic Tac Toe</div>

    `
}