const refs = {
  BASE_URL: 'https://api.meest.com/v3.0/openAPI',
  ENDPOINT: '/auth',
  username: 'nowystyl_com_ua',
  password: ')FB1WM)G1uFv',
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
   