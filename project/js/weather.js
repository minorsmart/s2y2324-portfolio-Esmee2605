function weatherBalloon(cityName) {
    var key = '1d569b97bf3fc39a45ded1ed6273841d'; // Put your own key here.
    fetch('https://api.openweathermap.org/data/2.5/weather?q=' + cityName + ',NL&appid=' + key)
        .then(function (resp) { return resp.json() }) // Convert data to json
        .then(function (data) {
            drawWeather(data); // Call drawWeather
        })
        .catch(function () {
            // catch any errors
        });
}

window.onload = function () {
    weatherBalloon("Arnhem");
}

function drawWeather(d) {
    var celcius = Math.round(parseFloat(d.main.temp) - 273.15);
    var fahrenheit = Math.round(((parseFloat(d.main.temp) - 273.15) * 1.8) + 32);

    document.getElementById('description').innerHTML = d.weather[0].description;
    document.getElementById('temp').innerHTML = celcius + '&deg;';
    document.getElementById('location').innerHTML = d.name;
}
