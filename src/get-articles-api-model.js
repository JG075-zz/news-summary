(function(exports) {
  function APICaller () {
  }

  APICaller.prototype.requestAPI = function (fn) {
    var httpRequest = new XMLHttpRequest();
    httpRequest.onreadystatechange = function(){
      if (httpRequest.readyState == XMLHttpRequest.DONE) {
        fn(this.returnResult(httpRequest));
      } else {
        return httpRequest.readyState;
      }
    };
    httpRequest.open('GET', 'http://news-summary-api.herokuapp.com/guardian?apiRequestUrl=http://content.guardianapis.com/search', true);
    httpRequest.send(null);
  };

  APICaller.prototype.returnResult = function (httpRequest) {
    if (httpRequest.status === 200) {
      return this.getJSONFormat(httpRequest.responseText);
    } else {
      return httpRequest.status;
    }
  };

  APICaller.prototype.getJSONFormat = function (response) {
    return JSON.parse(response);
  };

  exports.APICaller = APICaller;
})(this);
