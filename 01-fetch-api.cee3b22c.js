fetch("https://pixabay.com/api/?key=36946759-7e5fc12dbc6128b490595b505&q=dog&image_type=photo").then((function(e){return e.json()})).then(console.log),fetch("http://api.weatherstack.com/current?access_key=d80d26f396a09dee964f29c0205bdd02&query= New York").then((function(e){return e.json()})).then(console.log);var url="https://newsapi.org/v2/everything?q=python",options={headers:{Authorization:"4330ebfabc654a6992c2aa792f3173a3"}};fetch(url,options).then((function(e){return e.json()})).then(console.log),fetch("https://lpj-weather-service.herokuapp.com/weather?lat=39.916668&lon=116.383331").then((function(e){return e.json()})).then(console.log);
//# sourceMappingURL=01-fetch-api.cee3b22c.js.map