articles = new Articles();

function articlesItemsAreEmpty() {
  assert.isTrue(articles.items.length === 0);
}

function articlesMakesCallToAPI() {
  requestAPI = spy.On;
  assert.makesCall([articles.getArticles, [requestAPI]], requestAPI);
}

articlesItemsAreEmpty();
articlesMakesCallToAPI();
