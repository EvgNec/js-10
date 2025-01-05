

export default function getArrayCat(url, key) {
    fetch(url, {
        headers: {
          'x-api-key': key,
        },
      })
        .then(response => {
          return response.json();
        })
        .then(data => {
          let nameData = data.map(obj => {
            return { id: obj.id, name: obj.name };
          });
          nameData.forEach(item => {
            const option = document.createElement('option'); // Створюємо елемент <option>
            option.value = item.id; // Задаємо значення value
            option.textContent = item.name; // Текст, який буде показаний користувачу
            dropdown.appendChild(option); // Додаємо <option> у <select>
          });
        })
        .catch(function (error) {
          console.log(error);
        });
  }