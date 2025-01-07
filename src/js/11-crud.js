//CRUD

//R - GET
fetch('https://jsonplaceholder.typicode.com/posts/1')
  .then(response => response.json())
  .then(json => console.log(json));

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
            errorMessage.innerHTML = "Can't add posts";
        })
        .finally((e) = (refs.formWrapper.innerHTML = ""));
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
    return fetch('https://1jsonplaceholder.typicode.com/posts', options)
        .then(response => {
            if (!response.ok) {
                throw new Error(response.statusText);
            }
            return response.json();
        });
}
