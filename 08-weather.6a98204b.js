!function(){var t={BASE_URL:"http://api.weatherapi.com/v1",ENDPOINT:"/forecast.json",KEY:"4a0f16517e4d46ca8cd192223241209",form:document.querySelector(".js-search-form"),list:document.querySelector(".js-weather-container")};t.form.addEventListener("submit",(function(n){n.preventDefault();var e=n.currentTarget.elements,c=e.query,a=e.days;(function(n,e){var c=new URLSearchParams({q:n,days:e});return fetch("".concat(t.BASE_URL).concat(t.ENDPOINT,"?key=").concat(t.KEY,"&").concat(c)).then((function(t){if(!t.ok)throw new Error(t.statusText);return t.json()}))})(c.value,a.value).then((function(n){return t.list.innerHTML=n.forecast.forecastday.map((function(t){var n=t.date,e=t.day,c=e.avgtemp_c,a=e.condition,r=a.icon,o=a.text;return'<li>\n        <img src="'.concat(r,'" alt="').concat(o,'">\n        <p>').concat(o,"</p>\n        <h2>").concat(n,"</h2>\n        <h3>").concat(c,"</h3>\n    </li>")})).join("")})).catch((function(t){return console.log(t)}))}))}();
//# sourceMappingURL=08-weather.6a98204b.js.map