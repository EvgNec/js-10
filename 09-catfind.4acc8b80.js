const e={BASE_URL:"https://api.thecatapi.com/v1",URL:"https://api.thecatapi.com/v1/images/search?limit=20",ENDPOINT:"/breeds",KEY:"live_6mSRucqNyrSNqpDecLOPuWFbMXAyH4nVJnDAVE1MvYAWkJLHdyznA0qqn2NkF7EW",list:document.querySelector(".js-list"),btnLoadMore:document.querySelector(".js-load-more")};fetch(e.URL,{headers:{"x-api-key":e.KEY}}).then((e=>e.json())).then((e=>{e.map((function(e){let t=document.createElement("img");t.src=`${e.url}`;let c=document.createElement("div");c.classList.add("col"),c.classList.add("col-lg"),c.appendChild(t),document.getElementById("grid").appendChild(c)}))})).catch((function(e){console.log(e)}));
//# sourceMappingURL=09-catfind.4acc8b80.js.map
