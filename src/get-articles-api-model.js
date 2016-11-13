(function(exports) {
  function requestAPI (fn) {
    var httpRequest = new XMLHttpRequest();
    httpRequest.onreadystatechange = function(){
      if (httpRequest.readyState == XMLHttpRequest.DONE) {
        fn(returnResult(httpRequest));
      } else {
        return httpRequest.readyState;
      }
    };
    httpRequest.open('GET', 'http://news-summary-api.herokuapp.com/guardian?apiRequestUrl=http://content.guardianapis.com/search', true);
    httpRequest.send(null);
  }

  function returnResult (httpRequest) {
    if (httpRequest.status === 200) {
      return pushToItemsArray(httpRequest.responseText);
    } else {
      return httpRequest.status;
    }
  }

  function pushToItemsArray (response) {
    return JSON.parse(response);
  }

  exports.requestAPI = requestAPI;
})(this);

// var myAPI;
//
// this.requestAPI(function(response) {
//   myAPI = response;
// });
