(function(exports) {
  function Articles() {
    this.items = [];
  }

  Articles.prototype.getArticles = function (requestAPI) {
    requestAPI(function(response) {
      createArticles(response);
    });
  };

  exports.Articles = Articles;
})(this);
