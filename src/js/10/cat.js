import arrayCat from './getArrayCat.js';
import getCat from './getCat.js';
// import generateMarkup from './generateMarkup.js';
// import getImgCat from './getImgCat.js';

const refs = {
    BASE_URL: 'https://api.thecatapi.com/v1',
    IMG_URL: 'https://api.thecatapi.com/v1/images/search?',
    URL: `https://api.thecatapi.com/v1/breeds`,
    ENDPOINT: '/breeds',
    KEY: 'live_6mSRucqNyrSNqpDecLOPuWFbMXAyH4nVJnDAVE1MvYAWkJLHdyznA0qqn2NkF7EW',
    // target: document.querySelector('.js-guard'),
    list: document.querySelector('.js-list'),
    btnLoadMore: document.querySelector('.js-load-more'),
    dropdown: document.getElementById('dropdown'),
    grid: document.getElementById('grid'),
  };
  
  arrayCat(refs.URL, refs.KEY);

  dropdown.addEventListener('change', event => {
    console.log(`Selected value: ${event.target.value}`);
    const id = `${event.target.value}`;
    getCat(refs.BASE_URL, refs.ENDPOINT, refs.KEY, refs.grid, id);
  });
  
  
  

  

  