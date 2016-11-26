(function(exports) {
  function ArticleModel(heading, apiURL, bodyContent) {
    this.heading = heading;
    this.apiURL = apiURL;
    this.bodyContent = bodyContent;
  }

  exports.ArticleModel = ArticleModel;
})(this);
