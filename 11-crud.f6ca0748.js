fetch("https://jsonplaceholder.typicode.com/posts/1").then((o=>o.json())).then((o=>console.log(o))),fetch("https://jsonplaceholder.typicode.com/posts",{method:"POST",body:JSON.stringify({title:"foo",body:"bar",userId:1}),headers:{"Content-type":"application/json; charset=UTF-8"}}).then((o=>o.json())).then((o=>console.log(o)));
//# sourceMappingURL=11-crud.f6ca0748.js.map
