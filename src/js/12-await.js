// async function getVapital() {
//   // лише в випадку коли з данними працюємо всередені функції
//   try {
//     const URL = 'https://restcountries.com/v3.1/name/';
//     const resp = await fetch(`${URL}Ukraine`);
//     if (!resp.ok) {
//       throw new Error(resp.statusText);
//     }
//     const data = await resp.json();
//     // console.log("🚀 ~ getVapital ~ data:", data)
//     return data;
//   } catch (e) {
//     console.log('🚀 ~ getVapital ~ e:', e);
//   }
// }
// console.log('🚀 ~ getVapital():', getVapital());

// async function getVapital2() {
//     // В випадку коли з данними працюємо поза межами функції
//   const URL = 'https://restcountries.com/v3.1/name/';
//   const resp = await fetch(`${URL}Ukraine`);
//   if (!resp.ok) {
//     throw new Error(resp.statusText);
//   }
//   return resp.json();
// }
// getVapital2()
//   .then(data => console.log(data))
//   .catch(e => console.log(e));

// async function getVapital() {
// //   try {
//     const URL = 'https://restcountries.com/v3.1/name/';
//     const arr = ['Ukraine', 'France1', 'Germany'];

//     const responses = arr.map(async ctr => {
//         const resp = await fetch(`${URL}${ctr}`);
//        console.log("🚀 ~ responses ~ resp:", resp)
//       if (!resp.ok) {

//         throw new Error('Not found');
//         // Promise.reject('Not found');
//       }
//       return resp.json();
//     });
//       const prom = await Promise.allSettled(responses)
//       return prom;
// //   } catch (e) {
// //     console.log('🚀 ~ getVapital ~ e:', e);
// //   }
// }
// getVapital()
//     .then(data => {
//         const res = data.filter(({ status }) => status === 'fulfilled').map(({value}) => value[0]);
//         const rej = data.filter(({ status }) => status === 'rejected');
//         console.log(res);
//          console.log(rej);
//     })
//   .catch(e => console.log(e));

const refs = {
  btnAddCountry: document.querySelector('.js-add'),
  listCountry: document.querySelector('.js-list'),
  formCountry: document.querySelector('.js-form'),
  formContainer: document.querySelector('.js-form-container'),
};

refs.btnAddCountry.addEventListener('click', handlerAddInput);

function handlerAddInput() {
  const markup = '<input type="text" name="country">';
  refs.formContainer.insertAdjacentHTML('beforeend', markup);
}

refs.formCountry.addEventListener('submit', handlerForm);

function handlerForm(e) {
  e.preventDefault();
  const formData = new FormData(e.currentTarget);
  const arr = formData
    .getAll('country')
    .filter(item => item)
    .map(item => item.trim());
  getCountries(arr)
    .then(async resp => {
      const capitals = resp.map(({capital}) => capital[0])
      const weatherService = await getWeather(capitals)
      console.log("🚀 ~ handlerForm ~ weatherService:", weatherService)
    })    
  .catch(e => console.log(e))
}

async function getCountries(arr) {
  const URL = 'https://restcountries.com/v3.1/name/';
  const resps = arr.map(async item => {
    const resp = await fetch(`${URL}${item}`);
    if (!resp.ok) {
      throw new Error('Not found');
    }
    return resp.json();
  });
  const data = await Promise.allSettled(resps)
  const countryObj = data.filter(({status}) =>  status === 'fulfilled').map(({value}) => value[0])
  return countryObj;
}


async function getWeather(arr) {
  const BASE_URL = 'http://api.weatherapi.com/v1';
  const KEY = '4a0f16517e4d46ca8cd192223241209';

  const resps = arr.map(async city =>
  {
  const param = new URLSearchParams({
    key: KEY,
    q: city,
    lang: 'uk',
  });
  const resp = await fetch(`${BASE_URL}/current.json?${param}`)
      if (!resp.ok) {
        throw new Error(resp.statusText);
      }
      return resp.json();
  })

  const data = await Promise.allSettled(resps)
  const obj = data.filter(({status}) =>  status === 'fulfilled').map(({value}) => value[0])
  console.log("🚀 ~ getWeather ~ obj:", obj)

return obj

}
