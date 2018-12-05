function showfrontPage() {
    var mainContentDiv = document.getElementById('mainContent');
    mainContentDiv.innerHTML = ` 

    <h1 class="head">Shortcuts</h1>

        <div class="Linkbutton"><a href="https://getacademy.moodlecloud.com/my/" target="_blank">Moodlecloud</a></div>
        <div class="Linkbutton"><a href="https://photos.google.com/" target="_blank">Google Photo</a></div>
        <div class="Linkbutton"><a href="https://www.w3schools.com/" target="_blank">w3schools</a></div>
        <div class="Linkbutton"><a href="https://github.com/" target="_blank">Github</a></div>
        <div class="Linkbutton"><a href="https://classroom.google.com/u/1/h" target="_blank"></a></div>
        <div class="Linkbutton" onclick="showproPage()">Projects</div>

    `
}