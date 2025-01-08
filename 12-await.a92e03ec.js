!async function(){try{const a="https://restcountries.com/v3.1/name/",t=["Ukraine","France","Germany"].map((async t=>(await fetch(`${a}${t}`)).json())),e=await Promise.allSettled(t);console.log("🚀 ~ getVapital ~ prom:",e)}catch(a){console.log("🚀 ~ getVapital ~ e:",a)}}();
//# sourceMappingURL=12-await.a92e03ec.js.map
