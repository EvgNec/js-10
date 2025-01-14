<img src="${item.image}" alt="${item.name}" class="cat-image"/>

<img src="${urlCat.url}" alt="${data.name}" class="cat-image"/>
const GetCat = function(id) {

    //  const url =   'https://newsapi.org/v2/everything?q=${this.searchQuery}&language=en&pageSize=10&page=${this.page}';
    const url =`${refs.BASE_URL}${refs.ENDPOINT}/${id}`
    
    
    console.log(url);
    /*
    function createUrl(baseUrl, params) {
      let url = new URL(baseUrl);
      let urlParams = new URLSearchParams(params);
      url.search = urlParams.toString();
      return url.toString();
    }
    
    let url2 = createUrl("https://example.com", { param1: "value1", param2: "value2" });
    console.log('url2');
    console.log(url2);*/
      
    fetch(url,{headers: {
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
     };
    
    
    
    
        let image = document.createElement('img');
        //use the url from the image object
        image.src = `${url}`;
            
        let gridCell = document.createElement('div');
        gridCell.classList.add('col');
        gridCell.classList.add('col-lg');
        gridCell.appendChild(image)
          
        document.getElementById('grid').appendChild(gridCell);
        
        }
    
    
        // GetCat('acur');