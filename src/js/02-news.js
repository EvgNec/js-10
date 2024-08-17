import NewsApiService from "./02-NewsApiService";

const refs = {
    searchForm: document.querySelector('.js-search-form'),
    articlesContainer: document.querySelector('.js-articles-container'),
    loadMoreBtn: document.querySelector('.js-load-more'),
}

const newsApiService = new NewsApiService();

console.log("newsApiService", newsApiService)

refs.searchForm.addEventListener('submit', onSearch);
refs.loadMoreBtn.addEventListener('click', onLoadMore);


