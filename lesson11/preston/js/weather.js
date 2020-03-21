const requestURL = "https://api.openweathermap.org/data/2.5/forecast?id=5604473&units=imperial&appid=8105380f08037194620e8fd4e23cde13";
    fetch(requestURL)
    .then(function (response) {
        return response.json();
        })
    .then (function (currentWeather){
        console.log(currentWeather);
        const forecast= currentWeather.list;
        let index = 0;
        forecast.forEach((day) => {
            const date= new Date(day.dt_txt);
            const dayOfWeek = dateConversion(date.getDay());
            const hours = date.getHours();
            if (hours == 12){
                //gets weather for each day at 12 oclock
                let daySpan = document.querySelector(`#day${index}`);
                daySpan.innerHTML = dayOfWeek;
                
                const description = day.weather[0].description;
                let weatherDescription = document.querySelector(`#desc${index}`);
                weatherDescription.innerHTML = description;

                const high = day.main.temp_max;
                let weatherHigh = document.querySelector(`#high${index}`);
                weatherHigh.innerHTML = `High: ${high}&#8457;`;

                const icon = day.weather[0].icon;
                let weatherIcon = document.querySelector(`#icon${index}`);
                weatherIcon.src = `http://openweathermap.org/img/wn/${icon}@2x.png`;
                
                //don't put anything below index
                index++;
                //index goes up once per day at noon to get only 1 result per day

            }
        });

    })
function dateConversion(dateNum){
    if (dateNum == 0){
        return "Sunday"
    }
    else if( dateNum == 1){
        return "Monday"
    }
    else if( dateNum == 2){
        return "Tuesday"
    }
    else if( dateNum == 3){
        return "Wednesday"
    }
    else if( dateNum == 4){
        return "Thursday"
    }
    else if( dateNum == 5){
        return "Friday"
    }
    else {
        return "Saturday"
    }
}