(function(exports) {
  function Articles(article, apiCaller) {
    this.items = [];
    this.article = article;
    this.apiCaller = apiCaller;
  }

  Articles.prototype.getArticles = function () {
    var _this = this;
    this.apiCaller.requestAPI(function(response) {
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
