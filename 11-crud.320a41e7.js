fetch("https://jsonplaceholder.typicode.com/posts/1").then((t=>t.json())).then((t=>{console.log(t),console.log("1")})),axios.get("https://jsonplaceholder.typicode.com/posts/1").then((t=>{console.log(t),console.log("2")})),fetch("https://jsonplaceholder.typicode.com/posts",{method:"POST",body:JSON.stringify({title:"foo",body:"bar",userId:1}),headers:{"Content-type":"application/json; charset=UTF-8"}}).then((t=>t.json())).then((t=>console.log(t)));const t={method:"POST",headers:{"Content-type":"application/json; charset=UTF-8"},body:JSON.stringify({title:"test",body:"test test",userId:1})};fetch("https://jsonplaceholder.typicode.com/posts",t).then((t=>{if(!t.ok)throw new Error(t.statusText);return t.json()})).then((t=>console.log(t))).catch((t=>console.log(t)));const e={btnAddComment:document.querySelector(".js-add"),listCat:document.querySelector(".js-posts"),formWrapper:document.querySelector(".js-form"),errorMessage:document.querySelector(".js-error")};function o(t){t.preventDefault();const{title:o,body:n}=t.currentTarget.elements,s={title:o.value,body:n.value};console.log("🚀 ~ handlerFormSubmit ~ data:",s),function(t){const e={method:"POST",headers:{"Content-type":"application/json; charset=UTF-8"},body:JSON.stringify(t)};return fetch("https://jsonplaceholder.typicode.com/posts",e).then((t=>{if(!t.ok)throw new Error(t.statusText);return t.json()}))}(s).then((t=>{e.listCat.insertAdjacentHTML("beforeend",function({id:t,title:e,body:o}){return`<li data-id="${t}">\n    <h2>${e}</h2>\n    <span>${o}</span>\n</li>`}(t))})).catch((()=>{e.errorMessage.innerHTML="Can't add posts"})).finally((()=>{e.formWrapper.innerHTML="",setTimeout((()=>{e.errorMessage.innerHTML=""}),2e3)}))}e.btnAddComment.addEventListener("click",(function(){e.formWrapper.innerHTML='<form action="submit" class="js-form-add">\n    <input type="text" name="title">\n    <textarea name="body" cols="30" rows="10"></textarea>\n    <button>Add post</button>\n</form>';document.querySelector(".js-form-add").addEventListener("submit",o)}));const n={method:"PUT",body:JSON.stringify({id:1,title:"test put",userId:1}),headers:{"Content-type":"application/json; charset=UTF-8"}};fetch("https://jsonplaceholder.typicode.com/posts/1",n).then((t=>t.json())).then((t=>console.log(t)));const s={method:"PATCH",body:JSON.stringify({id:2,title:"test patch",userId:1}),headers:{"Content-type":"application/json; charset=UTF-8"}};fetch("https://jsonplaceholder.typicode.com/posts/1",s).then((t=>t.json())).then((t=>console.log(t))),fetch("https://jsonplaceholder.typicode.com/posts/1",{method:"DELETE"}),fetch("https://jsonplaceholder.typicode.com/posts?userId=1").then((t=>t.json())).then((t=>console.log(t))),fetch("https://jsonplaceholder.typicode.com/posts/1/comments").then((t=>t.json())).then((t=>console.log(t)));
//# sourceMappingURL=11-crud.320a41e7.js.map
