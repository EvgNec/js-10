!function(){fetch("https://jsonplaceholder.typicode.com/posts/1").then((function(t){return t.json()})).then((function(t){return console.log(t)})),fetch("https://jsonplaceholder.typicode.com/posts",{method:"POST",body:JSON.stringify({title:"foo",body:"bar",userId:1}),headers:{"Content-type":"application/json; charset=UTF-8"}}).then((function(t){return t.json()})).then((function(t){return console.log(t)}));var t={method:"POST",headers:{"Content-type":"application/json; charset=UTF-8"},body:JSON.stringify({title:"test",body:"test test",userId:1})};fetch("https://jsonplaceholder.typicode.com/posts",t).then((function(t){if(!t.ok)throw new Error(t.statusText);return t.json()})).then((function(t){return console.log(t)})).catch((function(t){return console.log(t)}));var e={btnAddComment:document.querySelector(".js-add"),listCat:document.querySelector(".js-posts"),formWrapper:document.querySelector(".js-form"),errorMessage:document.querySelector(".js-error")};function n(t){t.preventDefault();var n=t.currentTarget.elements,o=n.title,r=n.body,s={title:o.value,body:r.value};console.log("🚀 ~ handlerFormSubmit ~ data:",s),function(t){var e={method:"POST",headers:{"Content-type":"application/json; charset=UTF-8"},body:JSON.stringify(t)};return fetch("https://jsonplaceholder.typicode.com/posts",e).then((function(t){if(!t.ok)throw new Error(t.statusText);return t.json()}))}(s).then((function(t){e.listCat.insertAdjacentHTML("beforeend",function(t){var e=t.id,n=t.title,o=t.body;return'<li data-id="'.concat(e,'">\n    <h2>').concat(n,"</h2>\n    <span>").concat(o,"</span>\n</li>")}(t))})).catch((function(){e.errorMessage.innerHTML="Can't add posts"})).finally((function(){e.formWrapper.innerHTML="",setTimeout((function(){e.errorMessage.innerHTML=""}),2e3)}))}e.btnAddComment.addEventListener("click",(function(){e.formWrapper.innerHTML='<form action="submit" class="js-form-add">\n    <input type="text" name="title">\n    <textarea name="body" cols="30" rows="10"></textarea>\n    <button>Add post</button>\n</form>',document.querySelector(".js-form-add").addEventListener("submit",n)}));var o={method:"PUT",body:JSON.stringify({id:1,title:"foo",body:"bar",userId:1}),headers:{"Content-type":"application/json; charset=UTF-8"}};fetch("https://jsonplaceholder.typicode.com/posts/1",o).then((function(t){return t.json()})).then((function(t){return console.log(t)}))}();
//# sourceMappingURL=11-crud.261f73c4.js.map