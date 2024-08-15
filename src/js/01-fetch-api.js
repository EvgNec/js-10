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

 /*-------------------------*/
 
 // =========================================

const url = 'https://newsapi.org/v2/everything?q=dog';
const options = {
  headers: {
    Authorization: '4330ebfabc654a6992c2aa792f3173a3',
  },
};

fetch(url, options) 
  .then(r => r.json())
  .then(console.log);

 // =========================================

// const PASTE_YOUR_API_KEY_HERE = 'd80d26f396a09dee964f29c0205bdd02' 
   
// const url = `https://api.weatherstack.com/current?access_key=${PASTE_YOUR_API_KEY_HERE}&query=New Delhi`;
// const options = {
// 	method: 'GET'
// };

// try {
// 	const response = await fetch(url, options);
// 	const result = await response.text();
// 	console.log(result);
// } catch (error) {
// 	console.error(error);
// }


// import axios from 'axios';

// const options2 = {
//   method: 'GET',
//   url: 'https://api.weatherstack.com/current?access_key={PASTE_YOUR_API_KEY_HERE}',
//   params: {
//     query: "New Delhi",
//   }
// };

// try {
// 	const response = await axios.request(options2);
// 	console.log(response.data);
// } catch (error) {
// 	console.error(error);
// }