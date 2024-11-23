const o={BASE_URL:"https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=5",ENDPOINT:"/pubinfo"},s={body:{username:`${o.username}`,password:`${o.password}`}};console.log("options",s),fetch("https://api.meest.com/v3.0/openAPI/",s).then((o=>{console.log("resp.json()",o.json())}));
//# sourceMappingURL=07-p24.3298f924.js.map
