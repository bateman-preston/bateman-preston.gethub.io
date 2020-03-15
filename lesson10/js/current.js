const requestURL1 = "https://api.openweathermap.org/data/2.5/weather?id=5604473&units=imperial&appid=8105380f08037194620e8fd4e23cde13";
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

        console.log(tempToday.innerHTML);
    
        });
