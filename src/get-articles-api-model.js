function GetArticlesFromAPI() {
  this.response = "";
}

GetArticlesFromAPI.prototype.fetch = function () {
  var httpRequest = new XMLHttpRequest();
  var _this = this;
  httpRequest.onreadystatechange = function(){
    if (httpRequest.readyState == XMLHttpRequest.DONE) {
      _this._returnResult(httpRequest);
    } else {
      return httpRequest.readyState;
    }
  };
  httpRequest.open('GET', 'http://news-summary-api.herokuapp.com/guardian?apiRequestUrl=http://content.guardianapis.com/search', true);
  httpRequest.send(null);
};

GetArticlesFromAPI.prototype._returnResult = function (httpRequest) {
  if (httpRequest.status === 200) {
    this._pushToItemsArray(httpRequest.responseText);
  } else {
    return httpRequest.status;
  }
};

GetArticlesFromAPI.prototype._pushToItemsArray = function (response) {
  this.response = JSON.parse(response);
};
