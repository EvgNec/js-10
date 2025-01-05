import getImgCat from './getImgCat.js';

export default function generateMarkup(data) {
    // let urlCat = getImgCat(data.id, 'live_6mSRucqNyrSNqpDecLOPuWFbMXAyH4nVJnDAVE1MvYAWkJLHdyznA0qqn2NkF7EW');
    const urlCatImg = `https://api.thecatapi.com/v1/images/search?breed_ids=${data.id}`;
    const url = fetch(urlCatImg, {
      headers: {
        'x-api-key': 'live_6mSRucqNyrSNqpDecLOPuWFbMXAyH4nVJnDAVE1MvYAWkJLHdyznA0qqn2NkF7EW',
      },
    })
      .then(response => {
        return response.json();
      })       
      .then(data => {
        console.log("🚀 ~ getImgCat ~ data:", data)
        data.map(obj => {
          console.log('🚀 ~ .then ~ obj.url:', obj.url);
          return { url: obj.url };
        });
      })
   
      .catch(function (error) {
        console.log(error);
      });
    


    let markup = '';
  
    markup += `
        <div class="item">
          <h2>${data.name}</h2>
          <p>${data.description}</p>
         <img src="${url}" alt="${data.name}" class="cat-image"/>
        </div>
      `;
  
    return markup;
  }