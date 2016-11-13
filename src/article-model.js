(function(exports) {
  function Article(heading, apiURL, bodyContent) {
    this.heading = heading;
    this.apiURL = apiURL;
    this.bodyContent = bodyContent;
  }

  exports.Article = Article;
})(this);
