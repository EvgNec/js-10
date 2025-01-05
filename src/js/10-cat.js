const refs = {
  BASE_URL: 'https://api.thecatapi.com/v1',
  IMG_URL: 'https://api.thecatapi.com/v1/images/search?',
  URL : `https://api.thecatapi.com/v1/breeds`,
  ENDPOINT: '/breeds',
  KEY: 'live_6mSRucqNyrSNqpDecLOPuWFbMXAyH4nVJnDAVE1MvYAWkJLHdyznA0qqn2NkF7EW',
// target: document.querySelector('.js-guard'),
  list: document.querySelector('.js-list'),
    btnLoadMore: document.querySelector('.js-load-more'),
  dropdown: document.getElementById("dropdown"),
  grid: document.getElementById("grid"),
};


fetch(refs.URL,{headers: {
      'x-api-key': refs.KEY
    }})
 .then((response) => {
   return response.json();
 })
.then((data) => {
    let nameData = data.map(obj => {
  return { id: obj.id, name: obj.name };
});
    console.log(nameData);

nameData.forEach(item => {
  const option = document.createElement("option"); // Створюємо елемент <option>
  option.value = item.id; // Задаємо значення value
  option.textContent = item.name; // Текст, який буде показаний користувачу
  dropdown.appendChild(option); // Додаємо <option> у <select>
});
})
.catch(function(error) {
   console.log(error);
});

dropdown.addEventListener("change", (event) => {
  console.log(`Selected value: ${event.target.value}`);
  const id =`${event.target.value}`;
  GetCat(id);
})


const GetCat = function(id) {
  const urlCat =`${refs.BASE_URL}${refs.ENDPOINT}/${id}`  
  console.log(urlCat);

  fetch(urlCat,{headers: {
    'x-api-key': refs.KEY
  }})
.then((response) => {
 return response.json();
})
.then((data) => {
  refs.grid.innerHTML = generateMarkup(data)

  console.log(data);
})
.catch(function(error) {
 console.log(error);
});
}

function getImgCat(id){
  const urlCatImg =`${refs.IMG_URL}breed_ids=${id}`  
  fetch(urlCatImg,{headers: {
    'x-api-key': refs.KEY
  }})
.then((response) => {
 return response.json();
})
.then((data) => {
  let imgData = data.map(obj => {
return { id: obj.id, urlImg: obj.url };
})})
.catch(function(error) {
 console.log(error);
});
}

function generateMarkup(data) {
 
  getImgCat(data.id);

  let markup = '';

    markup += `
      <div class="item">
        <h2>${data.name}</h2>
        <p>${data.description}</p>
      </div>
    `;
  

  return markup;
}









