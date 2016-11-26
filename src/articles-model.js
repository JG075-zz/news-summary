(function(exports) {
  function ArticlesModel(article, apiCaller) {
    this.items = [];
    this.article = article;
    this.apiCaller = new apiCaller();
  }

  ArticlesModel.prototype.getArticles = function (fn) {
    var _this = this;
    this.apiCaller.requestAPI(function(response) {
      _this._createArticles(response);
      fn();
    });
  };

  ArticlesModel.prototype._createArticles = function (responseObject) {
    var _this = this;
    responseObject.response.results.forEach(function(value) {
      var formattedArticle = new _this.article(value.webTitle, value.apiUrl, null);
      _this.items.push(formattedArticle);
    });
  };

  exports.ArticlesModel = ArticlesModel;
})(this);
