(function(exports) {
  function ArticlesView(articles) {
    this.articles = articles;
    this.htmlString = "";
  }

  ArticlesView.prototype.returnHTML = function (fn) {
    var _this = this;
    this.articles.getArticles(function() {
      var HTMLstring = "";
      _this.articles.items.forEach(function(value) {
        HTMLstring += "<li><h2>" + value.heading + "</h2></li>";
      });
      fn(HTMLstring);
    });
  };

  exports.ArticlesView = ArticlesView;
})(this);
