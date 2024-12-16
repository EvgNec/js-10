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
})