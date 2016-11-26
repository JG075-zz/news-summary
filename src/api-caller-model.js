(function(exports) {
  function APICallerModel () {
  }

  APICallerModel.prototype.requestAPI = function (fn) {
    var httpRequest = new XMLHttpRequest();
    var _this = this;
    httpRequest.onreadystatechange = function(){
      if (httpRequest.readyState == XMLHttpRequest.DONE) {
        fn(_this.returnResult(httpRequest));
      } else {
        return httpRequest.readyState;
      }
    };
    httpRequest.open('GET', 'http://news-summary-api.herokuapp.com/guardian?apiRequestUrl=http://content.guardianapis.com/search', true);
    httpRequest.send(null);
  };

  APICallerModel.prototype.returnResult = function (httpRequest) {
    if (httpRequest.status === 200) {
      return this.getJSONFormat(httpRequest.responseText);
    } else {
      return httpRequest.status;
    }
  };

  APICallerModel.prototype.getJSONFormat = function (response) {
    return JSON.parse(response);
  };

  exports.APICallerModel = APICallerModel;
})(this);
