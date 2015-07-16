import Store from '@economist/component-store';
const articles = {};
const includedStores = {};
export default class ArticleStore extends Store {

  get entities() {
    return articles;
  }

  get includedStores() {
    return includedStores;
  }

}
