!function(){var t={BASE_URL:"https://api.themoviedb.org/3/",ENDPOINT:"trending/movie/day",IMGURL:"https://image.tmdb.org/t/p/w300/",KEY:"708f0b64505f12eb8c20b5a01361fdf3",currentPage:1,list:document.querySelector(".js-list"),btnLoadMore:document.querySelector(".js-load-more")};t.btnLoadMore.addEventListener("click",(function(){t.currentPage++,e(t.currentPage).then((function(e){t.list.insertAdjacentHTML("beforeend",n(e.results)),e.page===e.total_results&&(t.btnLoadMore.hidden=!0)})).catch((function(t){return console.assert(t)}))}));"Bearer ".concat(t.KEY);function e(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,n=new URLSearchParams({page:e});return fetch("".concat(t.BASE_URL).concat(t.ENDPOINT,"?api_key=").concat(t.KEY,"&").concat(n)).then((function(t){if(!t.ok)throw new Error(t.statusText);return t.json()}))}function n(e){return e.map((function(e){var n=e.poster_path,r=e.title,c=e.overview;return'<li class="card">\n        <img src="'.concat(t.IMGURL).concat(n,'" alt="').concat(r,' class="img">\n        <h2>').concat(r,'</h2>\n        <p class="overview">').concat(c,"</p>\n            </li>")})).join("")}e().then((function(e){t.list.insertAdjacentHTML("beforeend",n(e.results)),e.page!=e.total_pages&&(t.btnLoadMore.hidden=!1)})).catch((function(t){return console.assert(t)}))}();
//# sourceMappingURL=04-film.d0880f99.js.map
