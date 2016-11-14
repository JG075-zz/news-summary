(function(exports) {
  function Articles(Article) {
    this.items = [];
    this.article = Article;
  }

  Articles.prototype.getArticles = function (requestAPI) {
    var article = this.article;
    var _this = this;
    requestAPI(function(response) {
      _this._createArticles(response);
    });
  };

  Articles.prototype._createArticles = function (responseObject) {
    var _this = this;
    responseObject.response.results.forEach(function(value) {
      var formattedArticle = new _this.article(value.webTitle, value.apiUrl, null);
      _this.items.push(formattedArticle);
    });
  };

  exports.Articles = Articles;
})(this);
