const refs = {
  BASE_URL: 'https://api.thecatapi.com/v1',
  URL : `https://api.thecatapi.com/v1/images/search?limit=20`,
  ENDPOINT: '/breeds',
  KEY: 'live_6mSRucqNyrSNqpDecLOPuWFbMXAyH4nVJnDAVE1MvYAWkJLHdyznA0qqn2NkF7EW',
// target: document.querySelector('.js-guard'),
  list: document.querySelector('.js-list'),
  btnLoadMore: document.querySelector('.js-load-more'),
};



// const options = {
//   body: {
//     username: `${refs.username}`,
//     password: `${refs.password}`,
//   },
// };
// console.log("options", options)
// fetch('https://api.meest.com/v3.0/openAPI/', options).then(resp => {
//  console.log("resp.json()", resp.json())
// });
 fetch(refs.URL,{headers: {
      'x-api-key': refs.KEY
    }})
 .then((response) => {
   return response.json();
 })
.then((data) => {
  let imagesData = data;
  imagesData.map(function(imageData) {
    
    let image = document.createElement('img');
    //use the url from the image object
    image.src = `${imageData.url}`;
        
    let gridCell = document.createElement('div');
    gridCell.classList.add('col');
    gridCell.classList.add('col-lg');
    gridCell.appendChild(image)
      
    document.getElementById('grid').appendChild(gridCell);
    
    });
})
.catch(function(error) {
   console.log(error);
});
   