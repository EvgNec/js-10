!function(){var n={form:document.getElementById("form"),newsWrapper:document.getElementById("newsWrapper")};function e(e){n.newsWrapper.innerHTML=e}function t(n){console.error(n),e("<p>Not found!</p>")}n.form.addEventListener("submit",(function(n){n.preventDefault();var r=n.currentTarget;(c=r.elements.news.value,fetch("".concat("https://newsapi.org/v2/everything","?apiKey=").concat("dd82ff3604224bf1b224da3ef75c9135","&q=").concat(c)).then((function(n){return n.json()}))).then((function(n){var t=n.articles;if(console.log(t),0===t.length)throw new Error("No data!");var r=t.reduce((function(n,e){return n+function(n){var e=n.title,t=n.author,r=n.url,c=n.urlToImage,a=n.description;return'\n    <div class="article-card">\n        <h2 class="article-title">'.concat(e,'</h2>\n        <h3 class="article-author">').concat(t||"Unknown","</h3>\n        <img src=").concat(c||"https://sun9-43.userapi.com/impf/c637716/v637716451/5754/CZa3BJtbJtg.jpg?size=520x0&quality=95&sign=02df8d0cd8ae78099bc1f50938efd60a",' class="article-img">\n        <p class="article-description">').concat(a,"</p>\n        <a href=").concat(r,' target="_blank" class="article-link">Read more</a>\n    </div>\n  ')}(e)}),"");e(r)})).catch(t).finally((function(){return r.reset()}));var c}))}();
//# sourceMappingURL=index.0ebe210c.js.map