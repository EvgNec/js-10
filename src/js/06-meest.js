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
fetch(


// function getTrandig() {
//   return fetch(
//     `${refs.BASE_URL}${refs.ENDPOINT}`,options
//   ).then(resp => {
//     if (!resp.ok) {
//       throw new Error(resp.statusText);
//     }
//     return resp.json();
//   });
// }
// getTrandig()
//   .then(data => {
//   console.log("data", data)
//     }
//   )
//   .catch(err => console.assert(err));