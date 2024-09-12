/*http://api.weatherapi.com/v1/forecast.json?key=4a0f16517e4d46ca8cd192223241209&q=Leiria&days=5
 */

const refs = {
  BASE_URL: 'http://api.weatherapi.com/v1',
  ENDPOINT: '/forecast.json',
    KEY: '4a0f16517e4d46ca8cd192223241209',
  form: document.querySelector('.js-search-form'),
//   btnSearch: document.querySelector('.js-btn-search'),
};
const options = {};

refs.form.addEventListener('submit', (e) => {
    e.preventDefault();
    const form = e.currentTarget
   let  query = +form['query'].value 
    console.log(query);
    const days = +form['days'].value 
    console.log("days", days)
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

getWeather('Leiria', 5).then(date => console.log(date)).catch(err => console.log(err));
// getWeather('Lisboa', 5);
