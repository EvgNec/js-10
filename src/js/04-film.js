
const refs = {
    BASE_URL: 'https://api.themoviedb.org/3/',
    ENDPOINT: 'trending/movie/day',
    KEY: '708f0b64505f12eb8c20b5a01361fdf3',
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

    // const param = new URLSearchParams({
    //     limit: 30,
    //     page: 1,
    // });
    // fetch(`${refs.BASE_URL}${refs.ENDPOINT}?${param}`, option)
            fetch(`${refs.BASE_URL}${refs.ENDPOINT}`, option)
    .then( resp =>        
        console.log("resp", resp.json())
    )
}
getTrandig();