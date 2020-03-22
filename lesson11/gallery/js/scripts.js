const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';
fetch(requestURL)
    .then(function (response) {
        return response.json();
    })
    .then(function (jsonObject) {
        console.table(jsonObject); // temporary checking for valid response and data parsing

        const towns = jsonObject['towns']; //create an array constant
        for (let i = 0; i < towns.length; i++) { //iterate through the array
            if (towns[i].name == "Preston" || towns[i].name == "Fish Haven" || towns[i].name == "Soda Springs") {
                //creating the elements example: <h2></h2>
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

                //setting the inner text example: <h2>CONTENT</h2>
                h2.textContent = towns[i].name;
                h3.textContent = towns[i].motto;
                founded.textContent = "Year Founded: " + towns[i].yearFounded;
                population.textContent = "Population: " + towns[i].currentPopulation;
                rain.textContent = "Average Rain Fall: " + towns[i].averageRainfall;

                //add the created element to it's parent
                card.appendChild(div);
                div.appendChild(h2);
                div.appendChild(h3);
                div.appendChild(founded);
                div.appendChild(br);
                div.appendChild(population);
                div.appendChild(br2);
                div.appendChild(rain);
                card.appendChild(br3);
                card.appendChild(image); //added this

                //add card to the card container
                document.querySelector('section.cards').appendChild(card);
                //set the img src and alt
                image.setAttribute('src', "images/" + towns[i].photo);
                image.setAttribute('alt', h2.textContent) //added this
            }
        }
    });