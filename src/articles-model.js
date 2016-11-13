(function(exports) {
  var items = [];

  function Articles() {
    this.items = items;
  }

  Articles.prototype.getArticles = function (article, requestAPI) {
    requestAPI(function(response) {
      createArticles(article, response);
    });
  };

  function createArticles(article, responseObject) {
    responseObject.response.results.forEach(function (value) {
      var formattedArticle = new article(value.webTitle, value.apiUrl, null);
      items.push(formattedArticle);
    });
  }

  exports.Articles = Articles;
})(this);
