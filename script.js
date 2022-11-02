let team1 = document.getElementById("team1")  //showing the data on the web page, using three team names in this case
let team2 = document.getElementById("team2")
let team3 = document.getElementById("team3")


//the api call with the ajax pattern
function apiAjaxCall() {
    const xhttp = new XMLHttpRequest();

    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            let data = JSON.parse(this.responseText)
            team1.innerHTML = data.data[0].full_name;
            team2.innerHTML = data.data[1].full_name;
            team3.innerHTML = data.data[2].full_name;
        }
    };
    xhttp.open("GET", "https://free-nba.p.rapidapi.com/teams?page=0", true);
    xhttp.setRequestHeader('X-RapidAPI-Key', '3555972a6fmsh65a61b6f68454d6p1c2b1ejsn62652d2136db');
    xhttp.send();
}

//the api call with fetch api
function apiFetchCall() {

    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '3555972a6fmsh65a61b6f68454d6p1c2b1ejsn62652d2136db',
            'X-RapidAPI-Host': 'free-nba.p.rapidapi.com'
        }
    };

    fetch('https://free-nba.p.rapidapi.com/teams?page=0', options)
        .then(response => response.json())
        .then(data => {
            team1.innerHTML = data.data[0].full_name
            team2.innerHTML = data.data[1].full_name
            team3.innerHTML = data.data[2].full_name
        })
        .then(response => console.log(response))
        .catch(err => console.error(err));
}

apiAjaxCall()