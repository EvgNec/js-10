const e={BASE_URL:"https://api.thecatapi.com/v1",IMG_URL:"https://api.thecatapi.com/v1/images/search?",URL:"https://api.thecatapi.com/v1/breeds",ENDPOINT:"/breeds",KEY:"live_6mSRucqNyrSNqpDecLOPuWFbMXAyH4nVJnDAVE1MvYAWkJLHdyznA0qqn2NkF7EW",list:document.querySelector(".js-list"),btnLoadMore:document.querySelector(".js-load-more"),dropdown:document.getElementById("dropdown"),grid:document.getElementById("grid")};fetch(e.URL,{headers:{"x-api-key":e.KEY}}).then((e=>e.json())).then((e=>{e.map((e=>({id:e.id,name:e.name}))).forEach((e=>{const n=document.createElement("option");n.value=e.id,n.textContent=e.name,dropdown.appendChild(n)}))})).catch((function(e){console.log(e)})),dropdown.addEventListener("change",(e=>{console.log(`Selected value: ${e.target.value}`);const t=`${e.target.value}`;n(t)}));const n=function(n){const o=`${e.BASE_URL}${e.ENDPOINT}/${n}`;console.log(o),fetch(o,{headers:{"x-api-key":e.KEY}}).then((e=>e.json())).then((n=>{e.grid.innerHTML=function(e){t(e.id);console.log("🚀 ~ generateMarkup ~ getImgCat(data.id):",t(e.id));let n="";return n+=`\n      <div class="item">\n        <h2>${e.name}</h2>\n        <p>${e.description}</p>\n       \n      </div>\n    `,n}(n),console.log(n)})).catch((function(e){console.log(e)}))};function t(n){const t=`${e.IMG_URL}breed_ids=${n}`;fetch(t,{headers:{"x-api-key":e.KEY}}).then((e=>e.json())).then((e=>{e.map((e=>(console.log("🚀 ~ .then ~ obj.url:",e.url),{url:e.url})))})).catch((function(e){console.log(e)}))}
//# sourceMappingURL=10-cat.55fc1413.js.map
