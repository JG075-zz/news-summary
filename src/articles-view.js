(function(exports) {
  function ArticlesView(articles) {
    this.articles = new articles();
  }

  ArticlesView.prototype.returnHTML = function () {
    this.articles.getArticles(requestAPI);
    var HTMLstring;
    this.articles.items.forEach(function(value) {
      HTMLstring += value;
    });
    return HTMLstring;
  };

  exports.ArticlesView = ArticlesView;
})(this);
