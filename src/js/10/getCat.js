import generateMarkup from './generateMarkup.js';

export default function  GetCat(BASE_URL, ENDPOINT, KEY, grid, id ) {
    const urlCat = `${BASE_URL}${ENDPOINT}/${id}`;
    console.log(urlCat);
  
    fetch(urlCat, {
      headers: {
        'x-api-key': KEY,
      },
    })
      .then(response => {
        return response.json();
      })
      .then(data => {
        grid.innerHTML = generateMarkup(data);
  
        console.log(data);
      })
      .catch(function (error) {
        console.log(error);
      });
  };