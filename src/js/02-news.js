
// import articlesTpl from './02-articlesTpl';
// import NewsApiService from './02-NewsApiService';
// const refs = {
//   searchForm: document.querySelector('.js-search-form'),
//   articlesContainer: document.querySelector('.js-articles-container'),
//   loadMoreBtn: document.querySelector('.js-load-more'),
// };

// const newsApiService = new NewsApiService();

// console.log('newsApiService', newsApiService);

// refs.searchForm.addEventListener('submit', onSearch);
// refs.loadMoreBtn.addEventListener('click', onLoadMore);

// function onSearch(e) {
//   e.preventDefault();
//   newsApiService.query = e.currentTarget.elements.query.valur;
//   newsApiService.resetPage();
//   newsApiService.fetchArticles();
// }

// function onLoadMore(e) {
//   newsApiService.fetchArticles().then(appendArticlesMarkup);
// }

// function appendArticlesMarkup(articles) {
//   refs.articlesContainer.insertAdjacentHTML('beforeend', articlesTpl(articles));
// }

// function clearArticlesContainer() {
//   refs.articlesContainer.innerHTML = '';
// }
