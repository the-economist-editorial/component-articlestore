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

  setContent(content) {
    articles[0] = content.data[0].attributes;
    for (const article of content.data[0].relationships.posts.data) {
      this.add(article);
    }
  }

}
