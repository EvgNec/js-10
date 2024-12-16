const refs = {
  BASE_URL: 'https://api.thecatapi.com/v1',
  URL : `https://api.thecatapi.com/v1/breeds`,
  ENDPOINT: '/breeds',
  KEY: 'live_6mSRucqNyrSNqpDecLOPuWFbMXAyH4nVJnDAVE1MvYAWkJLHdyznA0qqn2NkF7EW',
// target: document.querySelector('.js-guard'),
  list: document.querySelector('.js-list'),
    btnLoadMore: document.querySelector('.js-load-more'),
  dropdown: document.getElementById("dropdown"),
};


fetch(refs.URL,{headers: {
      'x-api-key': refs.KEY
    }})
 .then((response) => {
   return response.json();
 })
.then((data) => {
    let nameData = data.map(obj => obj.name);
    console.log(nameData);

nameData.forEach(item => {
  const option = document.createElement("option"); // Створюємо елемент <option>
  option.value = item; // Задаємо значення value
  option.textContent = item; // Текст, який буде показаний користувачу
  dropdown.appendChild(option); // Додаємо <option> у <select>
});


  /*imagesData.map(function(imageData) {
    
    let image = document.createElement('img');
    //use the url from the image object
    image.src = `${imageData.url}`;
        
    let gridCell = document.createElement('div');
    gridCell.classList.add('col');
    gridCell.classList.add('col-lg');
    gridCell.appendChild(image)
      
    document.getElementById('grid').appendChild(gridCell);
    
    });*/
})
.catch(function(error) {
   console.log(error);
});