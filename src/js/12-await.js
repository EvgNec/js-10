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
try {
    const URL = 'https://restcountries.com/v3.1/name/';
    const arr = ['Ukraine', 'France', 'Germany']
    
    const responses = arr.map(async (ctr) => {
        const resp = await fetch(`${URL}${ctr}`)
        return resp.json()
    })
    const prom = await Promise.allSettled(responses)
      console.log("🚀 ~ getVapital ~ prom:", prom)
      } catch (e) {
    console.log('🚀 ~ getVapital ~ e:', e);
  }
}
getVapital()
