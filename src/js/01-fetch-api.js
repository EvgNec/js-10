/*-------------------------*/
fetch(
    'https://pixabay.com/api/?key=36946759-7e5fc12dbc6128b490595b505&q=dog&image_type=photo'
)
    .then(r => r.json())
    .then(console.log);
/*-------------------------*/

fetch(
    'http://api.weatherstack.com/current?access_key=d80d26f396a09dee964f29c0205bdd02&query= New York'
)
    .then(r => r.json())
    .then(console.log);