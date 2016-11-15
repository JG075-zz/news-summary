var articlesView = new ArticlesView(Articles);
var articles = new Articles(Article);

var guardianAPISample = {
  "response":{
    "status":"ok",
    "userTier":"developer",
    "total":1906643,
    "startIndex":1,
    "pageSize":10,
    "currentPage":1,
    "pages":190665,
    "orderBy":"newest",
    "results":[
      {
        "id":"sport/live/2016/nov/13/f1-brazilian-grand-prix-live",
        "type":"liveblog",
        "sectionId":"sport",
        "sectionName":"Sport",
        "webPublicationDate":"2016-11-13T17:26:05Z",
        "webTitle":"F1: Brazilian Grand Prix – live!",
        "webUrl":"https://www.theguardian.com/sport/live/2016/nov/13/f1-brazilian-grand-prix-live",
        "apiUrl":"https://content.guardianapis.com/sport/live/2016/nov/13/f1-brazilian-grand-prix-live",
        "isHosted":false
      }, {
            "id": "world/live/2016/nov/14/new-zealand-earthquake-evacuations-tsnuami-east-coast-south-north-islands",
            "type": "liveblog",
            "sectionId": "world",
            "sectionName": "World news",
            "webPublicationDate": "2016-11-13T17:25:48Z",
            "webTitle": "New Zealand earthquake: evacuations as tsunami heads for east coast – live",
            "webUrl": "https://www.theguardian.com/world/live/2016/nov/14/new-zealand-earthquake-evacuations-tsnuami-east-coast-south-north-islands",
            "apiUrl": "https://content.guardianapis.com/world/live/2016/nov/14/new-zealand-earthquake-evacuations-tsnuami-east-coast-south-north-islands",
            "isHosted": false
        }
    ]
  }
};

function articlesViewReturnsString() {
  requestAPI = spy.onAndReturn(function(fn) {fn(guardianAPISample);});
  articles.getArticles(requestAPI);
  HTMLstring = articlesView.returnHTML();
  // assert.isTypeOf(HTMLstring, "string");
}

// articlesViewReturnsString();
