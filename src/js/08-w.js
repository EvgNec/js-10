/*http://api.weatherapi.com/v1/forecast.json?key=4a0f16517e4d46ca8cd192223241209&q=Leiria&days=5
 */

const refs = {
  BASE_URL: 'http://api.weatherapi.com/v1',
  ENDPOINT: '/forecast.json',
  KEY: '4a0f16517e4d46ca8cd192223241209',
};
const options = {};

function getWeather(city, days) {
  const param = new URLSearchParams({
    q: city,
    days,
  });
  fetch(`${refs.BASE_URL}${refs.ENDPOINT}?key=${refs.KEY}&${param}`).then(
    resp => console.log('resp', resp.json())
  );
}

getWeather('Leiria', 5);
// getWeather('Lisboa', 5);
