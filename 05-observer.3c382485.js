const e={BASE_URL:"https://api.themoviedb.org/3/",ENDPOINT:"trending/movie/day",IMGURL:"https://image.tmdb.org/t/p/w300/",KEY:"708f0b64505f12eb8c20b5a01361fdf3",currentPage:1,list:document.querySelector(".js-list"),target:document.querySelector(".js-guard"),counter:0};e.KEY;const t=document.querySelector(".js-guard");let r=new IntersectionObserver((function(r,o){r.forEach((r=>{var a;r.isIntersecting&&(console.log("e2",r.isIntersecting),a=o,e.currentPage++,n(e.currentPage).then((r=>{e.list.insertAdjacentHTML("beforeend",s(r.results)),r.page===r.total_pages&&a.unobserver(t)})).catch((e=>console.assert(e))))}))}),{root:null,rootMargin:"100px",threshold:1});function n(t=1){const r=new URLSearchParams({page:t});return fetch(`${e.BASE_URL}${e.ENDPOINT}?api_key=${e.KEY}&${r}`).then((e=>{if(!e.ok)throw new Error(e.statusText);return e.json()}))}function s(t){return t.map((({poster_path:t,title:r,overview:n})=>`<li class="card">\n        <img src="${e.IMGURL}${t}" alt="${r} class="img">\n        <h2>${r}</h2>\n        <p class="overview">${n}</p>\n            </li>`)).join("")}n().then((n=>{e.list.insertAdjacentHTML("beforeend",s(n.results)),r.observe(t),n.page!=n.total_pages&&(e.btnLoadMore.hidden=!1)})).catch((e=>console.assert(e)));
//# sourceMappingURL=05-observer.3c382485.js.map