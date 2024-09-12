/*http://api.weatherapi.com/v1/forecast.json?key=4a0f16517e4d46ca8cd192223241209&q=Leiria&days=5
 */

const refs = {
  BASE_URL: 'http://api.weatherapi.com/v1',
  ENDPOINT: '/forecast.json',
    KEY: '4a0f16517e4d46ca8cd192223241209',
  form: document.querySelector('.js-search-form'),
  list: document.querySelector('.js-weather-container'),
};
const options = {};

refs.form.addEventListener('submit', (e) => {
    e.preventDefault();
    const {query, days} = e.currentTarget.elements
    getWeather(query.value, days.value)
        .then((date) => refs.list.innerHTML=createMarkup(date.forecast.forecastday))
        .catch((err) => console.log(err));
})

function getWeather(city, days) {
  const param = new URLSearchParams({
    q: city,
    days,
  });
  return fetch(`${refs.BASE_URL}${refs.ENDPOINT}?key=${refs.KEY}&${param}`).then(
    resp => {
      if (!resp.ok) {
        throw new Error(resp.statusText);
      }
      return resp.json();
    }
  );
}

function createMarkup(arr) {
    return arr.map(({date, day: {avgtemp_c, condition:{icon, text}}}) =>
       `<li>
        <img src="${icon}" alt="${text}">
        <p>${text}</p>
        <h2>${date}</h2>
        <h3>${avgtemp_c}</h3>
    </li>`
   ).join(''); 
}
