const requestURL1 = "https://api.openweathermap.org/data/2.5/weather?zip=83287&units=imperial&appid=8105380f08037194620e8fd4e23cde13";
    fetch(requestURL1)
    .then(function (response) {
        return response.json();
        })
    .then (function (currentWeather){
        console.log(currentWeather);
        const temp = currentWeather.main.temp;
        let tempToday = document.querySelector('#temp');
        tempToday.innerHTML = temp;

        const humidity = currentWeather.main.humidity;
        let humToday = document.querySelector('#humidity');
        humToday.innerHTML = humidity;

        const wind = currentWeather.wind.speed;
        let speedToday = document.querySelector('#wind');
        speedToday.innerHTML = wind;

        const pressure = currentWeather.main.pressure;
        let pressureToday = document.querySelector('#pressure');
        pressureToday.innerHTML = pressure;

        console.log(tempToday.innerHTML);
    
        });
