function articlesItemsAreEmpty() {
  articles = new Articles();
  assert.isTrue(articles.items.length === 0);
}

articlesItemsAreEmpty();
