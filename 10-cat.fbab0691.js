const e={BASE_URL:"https://api.thecatapi.com/v1",IMG_URL:"https://api.thecatapi.com/v1/images/search?",URL:"https://api.thecatapi.com/v1/breeds",ENDPOINT:"/breeds",KEY:"live_6mSRucqNyrSNqpDecLOPuWFbMXAyH4nVJnDAVE1MvYAWkJLHdyznA0qqn2NkF7EW",list:document.querySelector(".js-list"),btnLoadMore:document.querySelector(".js-load-more"),dropdown:document.getElementById("dropdown"),grid:document.getElementById("grid")};fetch(e.URL,{headers:{"x-api-key":e.KEY}}).then((e=>e.json())).then((e=>{let n=e.map((e=>({id:e.id,name:e.name})));console.log(n),n.forEach((e=>{const n=document.createElement("option");n.value=e.id,n.textContent=e.name,dropdown.appendChild(n)}))})).catch((function(e){console.log(e)})),dropdown.addEventListener("change",(e=>{console.log(`Selected value: ${e.target.value}`);const t=`${e.target.value}`;n(t)}));const n=function(n){const t=`${e.BASE_URL}${e.ENDPOINT}/${n}`;console.log(t),fetch(t,{headers:{"x-api-key":e.KEY}}).then((e=>e.json())).then((n=>{e.grid.innerHTML=function(n){!function(n){const t=`${e.IMG_URL}breed_ids=${n}`;fetch(t,{headers:{"x-api-key":e.KEY}}).then((e=>e.json())).then((e=>{e.map((e=>({id:e.id,urlImg:e.url})))})).catch((function(e){console.log(e)}))}(n.id);let t="";return t+=`\n      <div class="item">\n        <h2>${n.name}</h2>\n        <p>${n.description}</p>\n      </div>\n    `,t}(n),console.log(n)})).catch((function(e){console.log(e)}))};
//# sourceMappingURL=10-cat.fbab0691.js.map
