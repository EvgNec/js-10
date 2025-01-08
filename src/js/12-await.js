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

async function getVapital() {
//   try {
    const URL = 'https://restcountries.com/v3.1/name/';
    const arr = ['Ukraine', 'France1', 'Germany'];

    const responses = arr.map(async ctr => {
        const resp = await fetch(`${URL}${ctr}`);
       console.log("🚀 ~ responses ~ resp:", resp)     
      if (!resp.ok) {
    
        throw new Error('Not found');
        // Promise.reject('Not found');
      }
      return resp.json();
    });
      const prom = await Promise.allSettled(responses)
      return prom;
//   } catch (e) {
//     console.log('🚀 ~ getVapital ~ e:', e);
//   }
}
getVapital()
    .then(data => {
        const res = data.filter(({ status }) => status === 'fulfilled').map(({value}) => value[0]);
        const rej = data.filter(({ status }) => status === 'rejected');
        console.log(res);
         console.log(rej);
    })
  .catch(e => console.log(e));
