const requestURL = 'https://byui-cit230.github.io/lessons/lesson-09/data/latter-day-prophets.json';
fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    console.table(jsonObject);  // temporary checking for valid response and data parsing
    const prophets = jsonObject['prophets'];
  for (let i = 0; i < prophets.length; i++ ) {
    let card = document.createElement('section');
    let h2 = document.createElement('h2');
    let bDate = document.createElement("h3");
    let image = document.createElement("img");
    let bPlace = document.createElement("h4");

    h2.textContent = prophets[i].name + ' ' + prophets[i].lastname;
    bDate.textContent = "Date of Birth: " + prophets[i].birthdate;
    bPlace.textContent = "Place of Birth: " + prophets[i].birthplace

    card.appendChild(h2);
    card.appendChild(bDate);
    card.appendChild(bPlace);
    card.appendChild(image);

    document.querySelector('div.cards').appendChild(card);
    image.setAttribute('src', prophets[i].imageurl);
    image.setAttribute('alt',h2.textContent + " - "  + (i + 1));
  }
  });
  