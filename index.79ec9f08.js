const e={form:document.getElementById("form"),newsWrapper:document.getElementById("newsWrapper")};function t(t){e.newsWrapper.innerHTML=t}function n(e){console.error(e),t("<p>Not found!</p>")}e.form.addEventListener("submit",(function(e){e.preventDefault();const r=e.currentTarget;(a=r.elements.news.value,fetch(`https://newsapi.org/v2/everything?apiKey=dd82ff3604224bf1b224da3ef75c9135&q=${a}`).then((e=>e.json()))).then((({articles:e})=>{if(console.log(e),0===e.length)throw new Error("No data!");t(e.reduce(((e,t)=>e+function({title:e,author:t,url:n,urlToImage:r,description:a}){return`\n    <div class="article-card">\n        <h2 class="article-title">${e}</h2>\n        <h3 class="article-author">${t||"Unknown"}</h3>\n        <img src=${r||"https://sun9-43.userapi.com/impf/c637716/v637716451/5754/CZa3BJtbJtg.jpg?size=520x0&quality=95&sign=02df8d0cd8ae78099bc1f50938efd60a"} class="article-img">\n        <p class="article-description">${a}</p>\n        <a href=${n} target="_blank" class="article-link">Read more</a>\n    </div>\n  `}(t)),""))})).catch(n).finally((()=>r.reset()));var a}));
//# sourceMappingURL=index.79ec9f08.js.map