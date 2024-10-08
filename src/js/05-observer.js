const refs = {
  BASE_URL: 'https://api.themoviedb.org/3/',
  ENDPOINT: 'trending/movie/day',
  IMGURL: 'https://image.tmdb.org/t/p/w300/',
  KEY: '708f0b64505f12eb8c20b5a01361fdf3',
  currentPage: 1,
  list: document.querySelector('.js-list'),
target: document.querySelector('.js-guard'),
counter: 0,
};

function onLoad(observer) {
  refs.currentPage++;
  getTrandig(refs.currentPage)
    .then(data => {
      refs.list.insertAdjacentHTML('beforeend', createMarkup(data.results));
      if (data.page === data.total_pages) {
          observer.unobserver(target);
      }
    })
    .catch(err => console.assert(err));
}

const options = {
  headers: {
    Authorization: 'Bearer 708f0b64505f12eb8c20b5a01361fdf3',
  },
};

const option = {
  method: 'GET',

  headers: {
    Authorization: `Bearer ${refs.KEY}`,
  },
};

let options2 = {
    root: null,
    rootMargin: "100px",
    threshold: 1.0,
};
const target = document.querySelector('.js-guard');
let observer = new IntersectionObserver(callback, options2);

function callback(entries, observer) {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            console.log("e2", entry.isIntersecting)
            onLoad(observer);
        }
})
}



function getTrandig(page = 1) {
  const param = new URLSearchParams({
    //     limit: 30,
    page: page,
  });
  return fetch(
    `${refs.BASE_URL}${refs.ENDPOINT}?api_key=${refs.KEY}&${param}`
  ).then(resp => {
    if (!resp.ok) {
      throw new Error(resp.statusText);
    }
    return resp.json();
  });
}
getTrandig()
  .then(data => {
      refs.list.insertAdjacentHTML('beforeend', createMarkup(data.results));
              observer.observe(target);
    if (data.page != data.total_pages) {
      refs.btnLoadMore.hidden = false;
    }
  })
  .catch(err => console.assert(err));

function createMarkup(arr) {
  return arr
    .map(
      ({ poster_path, title, overview }) =>
        `<li class="card">
        <img src="${refs.IMGURL}${poster_path}" alt="${title} class="img">
        <h2>${title}</h2>
        <p class="overview">${overview}</p>
            </li>`
    )
    .join('');
}