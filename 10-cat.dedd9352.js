!function(){var n={BASE_URL:"https://api.thecatapi.com/v1",IMG_URL:"https://api.thecatapi.com/v1/images/search?",URL:"https://api.thecatapi.com/v1/breeds",ENDPOINT:"/breeds",KEY:"live_6mSRucqNyrSNqpDecLOPuWFbMXAyH4nVJnDAVE1MvYAWkJLHdyznA0qqn2NkF7EW",list:document.querySelector(".js-list"),btnLoadMore:document.querySelector(".js-load-more"),dropdown:document.getElementById("dropdown"),grid:document.getElementById("grid")};fetch(n.URL,{headers:{"x-api-key":n.KEY}}).then((function(n){return n.json()})).then((function(n){var e=n.map((function(n){return{id:n.id,name:n.name}}));console.log(e),e.forEach((function(n){var e=document.createElement("option");e.value=n.id,e.textContent=n.name,dropdown.appendChild(e)}))})).catch((function(n){console.log(n)})),dropdown.addEventListener("change",(function(n){console.log("Selected value: ".concat(n.target.value));var t="".concat(n.target.value);e(t)}));var e=function(e){var t="".concat(n.BASE_URL).concat(n.ENDPOINT,"/").concat(e);console.log(t),fetch(t,{headers:{"x-api-key":n.KEY}}).then((function(n){return n.json()})).then((function(e){n.grid.innerHTML=function(e){!function(e){var t="".concat(n.IMG_URL,"breed_ids=").concat(e);fetch(t,{headers:{"x-api-key":n.KEY}}).then((function(n){return n.json()})).then((function(n){n.map((function(n){return{id:n.id,urlImg:n.url}}))})).catch((function(n){console.log(n)}))}(e.id);var t="";return t+='\n      <div class="item">\n        <h2>'.concat(e.name,"</h2>\n        <p>").concat(e.description,"</p>\n      </div>\n    ")}(e),console.log(e)})).catch((function(n){console.log(n)}))}}();
//# sourceMappingURL=10-cat.dedd9352.js.map
