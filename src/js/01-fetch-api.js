/*-------------------------*/
fetch(
    'https://pixabay.com/api/?key=36946759-7e5fc12dbc6128b490595b505&q=dog&image_type=photo'
)
    .then(r => r.json())
    .then(console.log);
/*-------------------------*/