//CRUD

//R - GET
fetch('https://jsonplaceholder.typicode.com/posts/1')
  .then(response => response.json())
    .then(json => {
        console.log(json);
        console.log('1');
     });
 
axios.get('https://jsonplaceholder.typicode.com/posts/1')
.then(response => {console.log(response);  console.log('2');
     });



//C - POST

// 1
fetch('https://jsonplaceholder.typicode.com/posts', {
  method: 'POST',
  body: JSON.stringify({
    title: 'foo',
    body: 'bar',
    userId: 1,
  }),
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
  },
})
  .then(response => response.json())
  .then(json => console.log(json));

// 2
const options = {
  method: 'POST',
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
  },
  body: JSON.stringify({
    title: 'test',
    body: 'test test',
    userId: 1,
  }),
};
fetch('https://jsonplaceholder.typicode.com/posts', options)
  .then(response => {
    if (!response.ok) {
      throw new Error(response.statusText);
    }
    return response.json();
  })
  .then(json => console.log(json))
  .catch(e => console.log(e));

const refs = {
  btnAddComment: document.querySelector('.js-add'),
  listCat: document.querySelector('.js-posts'),
    formWrapper: document.querySelector('.js-form'),
    errorMessage: document.querySelector('.js-error'),
  
};

refs.btnAddComment.addEventListener('click', handlerAddPost);

function handlerAddPost() {
  refs.formWrapper.innerHTML = `<form action="submit" class="js-form-add">
    <input type="text" name="title">
    <textarea name="body" cols="30" rows="10"></textarea>
    <button>Add post</button>
</form>`;

  const form = document.querySelector('.js-form-add');
  form.addEventListener('submit', handlerFormSubmit);
}

function handlerFormSubmit(evt) {
    evt.preventDefault();
    const { title, body } = evt.currentTarget.elements;
    const data = {
        title: title.value,
        body: body.value,
    };
    console.log('🚀 ~ handlerFormSubmit ~ data:', data);

    addPostService(data).then(obj => {
        refs.listCat.insertAdjacentHTML('beforeend', createPostMarkup(obj))
    })
        .catch(() => {
            refs.errorMessage.innerHTML = "Can't add posts";
        })
        .finally(() => {
            refs.formWrapper.innerHTML = ""
            setTimeout(()=>{refs.errorMessage.innerHTML = ""},2000)
});
}

function createPostMarkup({ id, title, body }) {
  return `<li data-id="${id}">
    <h2>${title}</h2>
    <span>${body}</span>
</li>`;
}

function addPostService(data) {
  const options = {
    method: 'POST',
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
    body: JSON.stringify(data),
  };
    return fetch('https://jsonplaceholder.typicode.com/posts', options)
        .then(response => {
            if (!response.ok) {
                throw new Error(response.statusText);
            }
            return response.json();
        });
}


// U PUT PATCH

const options2 = {
  method: 'PUT',
  body: JSON.stringify({
    id: 1,
    title: 'test put',
    userId: 1,
  }),
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
  },
}


fetch('https://jsonplaceholder.typicode.com/posts/1', options2)
  .then((response) => response.json())
    .then((json) => console.log(json));

const options3 = {
  method: 'PATCH',
  body: JSON.stringify({
    id: 2,
    title: 'test patch',
    userId: 1,
  }),
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
  },
}



fetch('https://jsonplaceholder.typicode.com/posts/1', options3)
  .then((response) => response.json())
    .then((json) => console.log(json));


// D DELETE
    
fetch('https://jsonplaceholder.typicode.com/posts/1', {
  method: 'DELETE',
});


// This will return all the posts that belong to the first user
fetch('https://jsonplaceholder.typicode.com/posts?userId=1')
  .then((response) => response.json())
  .then((json) => console.log(json));


// This is equivalent to /comments?postId=1
fetch('https://jsonplaceholder.typicode.com/posts/1/comments')
  .then((response) => response.json())
  .then((json) => console.log(json));