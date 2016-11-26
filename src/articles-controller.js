(function(exports) {
  function ArticlesController(modules) {
    this.articles = new modules.articlesModel(modules.articleModel, modules.apiCallerModel);
    this.articlesView = new modules.articlesView(this.articles);
  }

  ArticlesController.prototype.insertHTML = function (fn) {
    this.articlesView.returnHTML(function(result) {
      document.getElementById("articles").innerHTML = result;
    });
  };

  exports.ArticlesController = ArticlesController;
})(this);
