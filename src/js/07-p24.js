const refs = {
  BASE_URL: 'https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=5',
  ENDPOINT: '/pubinfo',
// target: document.querySelector('.js-guard'),
};


const options = {
  body: {
    username: `${refs.username}`,
    password: `${refs.password}`,
  },
};
console.log("options", options)
fetch('https://api.meest.com/v3.0/openAPI/', options).then(resp => {
 console.log("resp.json()", resp.json())
});
    