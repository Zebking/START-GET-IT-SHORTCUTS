function showopenPage() {
    var mainContentDiv = document.getElementById('mainContent');
    mainContentDiv.innerHTML = `

<div class="backtop"></div>
<img class="dragonimg" src="img/dragonimg.jpg" alt="dragon">
<div onclick="showproPage(), changecolorBack()" class="backbutton">&lt;&lt</div>

<h1 class="pole">Is the liquor store in stokke open?</h1>
<div id="dayAndTime" style="padding-top: 20px;"></div>


    `
}



