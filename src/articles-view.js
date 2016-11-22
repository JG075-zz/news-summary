(function(exports) {
  function ArticlesView(articles) {
    this.articles = articles;
  }

  ArticlesView.prototype.returnHTML = function () {
    this.articles.getArticles();
    var HTMLstring = "";
    this.articles.items.forEach(function(value) {
      HTMLstring += "<li><h2>" + value.heading + "</h2></li>";
    });
    return HTMLstring;
  };

  exports.ArticlesView = ArticlesView;
})(this);
