function showopenPage() {
    var mainContentDiv = document.getElementById('mainContent');
    mainContentDiv.innerHTML = `

<h1 class="pole">Er vinmonopolet på stokke åpent?</h1>
<div id="dayAndTime" style="padding-top: 20px;"></div>


    `

            var div = document.getElementById('dayAndTime');
            var d = new Date();
            var hour = d.getHours();
            var minute = d.getMinutes();
            var dayNo = d.getDay();
            var day = '';

            if (dayNo === 1) day = 'Mandag';
            else if (dayNo === 2) day = 'Tirsdag';
            else if (dayNo === 3) day = 'onsdag';
            else if (dayNo === 4) day = 'Torsdag';
            else if (dayNo === 5) day = 'Fredag';
            else if (dayNo === 6) day = 'Lørdag';
            else if (dayNo === 7) day = 'Søndag';
            

            if (dayNo < 5) {
                if (hour >= 10 && hour <= 16)
                    div.innerHTML += '<p class=open>Åpent!<br>PARTY TIME!</p>';
                else
                    div.innerHTML += '<p class=stengt>Stengt!<br>No party party..T_T</p>';
            }
            else if (dayNo === 5) {
                if (hour >= 10 && hour <= 17)
                    div.innerHTML += '<p class=open>Åpent!<br>PARTY TIME!</p>';
                else
                    div.innerHTML += '<p class=stengt>Stengt!<br>No party party..T_T</p>';
            }
            else if (dayNo === 6) {
                if (hour >= 10 && hour <= 14)
                    div.innerHTML += '<p class=open>Åpent!<br>PARTY TIME!</p>';
                else
                    div.innerHTML += '<p class=stengt>Stengt!<br>No party party..T_T</p>';
            } else if (dayNo === 7) {
                div.innerHTML += '<p class=stengt>Stengt!<br>No party party..T_T</p>';

            }

}
