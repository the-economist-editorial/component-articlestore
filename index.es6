import Store from '@economist/component-store';
const articles = {};
let main = {};
const includedStores = {};
export default class ArticleStore extends Store {

  get entities() {
    return articles;
  }

  get includedStores() {
    return includedStores;
  }

  get main() {
    return main;
  }

  setContent(content) {
    main = content.data[0];
    for (const article of content.data[0].relationships.posts.data) {
      this.add(article);
    }
  }

}
