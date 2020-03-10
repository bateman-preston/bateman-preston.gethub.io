const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';
fetch(requestURL)
    .then(function (response) {
        return response.json();
    })
    .then(function (jsonObject){
        console.table(jsonObject);

        const towns = jsonObject['towns'];
        for (let i = 0; i < towns.length; i++) {
            if (towns[i].name == "Preston" || towns[i].name == "Fish Haven" || towns[i].name == "Soda Springs") {
                let card = document.createElement('section');
                card.classList.add('card');
                let h2 = document.createElement('h2');
                let h3 = document.createElement('h3');
                let div = document.createElement('div');
                let founded = document.createElement('span');
                let population = document.createElement('span');
                let rain = document.createElement('span');
                let image = document.createElement('img');
                let br = document.createElement('br');
                let br2 = document.createElement('br');
                let br3 = document.createElement('br');
                let br4 = document.createElement('br');

                h2.textContent = towns[i].name;
                h3.textContent = towns[i].motto;
                founded.textContent = "Founded In: " + towns[i].yearFounded;
                population.textContent = "Current Population: " + towns[i].currentPopulation;
                rain.textContent = "Yearly Average Rainfall: " = towns[i].averageRainfall;

                card.appendChild(div);
                div.appendChild(h2);
                div.appendChild(h3);
                div.appendChild(founded);
                div.appendChild(br);
                div.appendChild(br2);
                div.appendChild(population);
                div.appendChild(br3);
                div.appendChild(rain);
                div.appendChild(br4);
                div.appendChild(image);

                document.querySelector('section.cards').appendChild(card);
                image.setAttribute('src', 'img/' + towns[i].photo);
                image.setAttribute('alt', h1.textContent);
            }
        }
    });