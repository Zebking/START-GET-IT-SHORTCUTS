function showfrontPage() {
    var mainContentDiv = document.getElementById('mainContent');
    mainContentDiv.innerHTML = ` 

    <div class="backtop"></div>
    <div class="box1">-</div>
    <img class="dragonimg" src="img/dragonimg.jpg" alt="dragon">
    <img class="dragonimg2" src="img/dragonimg.jpg" alt="dragon">
    <h1 class="backheadtext">Start/Get IT Shortcuts</h1>

      <img class="dragonleft" src="img/dragonleft.png" alt="dragon">
      <img class="dragonright" src="img/dragonright.png" alt="dragon">

        <div class="wrapper">-</div>
        <div class="Linkbutton" id="lb1"><a class="linkz" style="text-decoration: none;" href="https://getacademy.moodlecloud.com/my/" target="_blank">Moodlecloud</a></div>
        <div class="Linkbutton"><a class="linkz" style="text-decoration: none;" href="https://photos.google.com/" target="_blank">Google Photo</a></div>
        <div class="Linkbutton"><a class="linkz" style="text-decoration: none;" href="https://www.w3schools.com/" target="_blank">w3schools</a></div>
        <div class="Linkbutton"><a class="linkz" style="text-decoration: none;" href="https://github.com/" target="_blank">Github</a></div>
        <div class="Linkbutton"><a class="linkz" style="text-decoration: none;" href="https://classroom.google.com/u/1/h" target="_blank">Classroom</a></div>
        <div class="Linkbutton" onclick="showproPage()">Projects</div>
        
    `
}