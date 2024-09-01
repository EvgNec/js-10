
const refs = {
    BASE_URL: 'https://api.themoviedb.org/3/',
    ENDPOINT: 'trending/movie/day',
    IMGURL: 'https://image.tmdb.org/t/p/w500/',
    KEY: '708f0b64505f12eb8c20b5a01361fdf3',
    list: document.querySelector(".js-list.film"),
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

function getTrandig() {
    const param = new URLSearchParams({
    //     limit: 30,
        page: 20,
    });
 return    fetch(`${refs.BASE_URL}${refs.ENDPOINT}?api_key=${refs.KEY}&${param}`)
        .then(resp => {
            if (!resp.ok) {
                throw new Error(resp.statusText);
            }
            return resp.json();
        }
    )
}
getTrandig()
    .then(data => console.log(data))
    .catch(err => console.assert(err));

function createMarkup(arr) {
    return arr.map(({ poster_title, title, overview }) =>
        `<li>
        <img src="${refs.IMGURL}${poster_title}" alt="${title}">
        <h2>${title}</h2>
        <p>${overview}</p>
            </li>`)
        .join('')
}