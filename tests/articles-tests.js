var articles;
var functions = [articlesItemsAreEmpty, articlesMakesCallToAPI, articlesAddsArticleObjects, articlesItemsHaveHeading, articlesItemsHaveURL];
var guardianAPISample = {
  "response":{
    "results":[
        {
          "webTitle":"F1: Brazilian Grand Prix – live!",
          "webUrl":"https://www.theguardian.com/sport/live/2016/nov/13/f1-brazilian-grand-prix-live",
          "apiUrl":"https://content.guardianapis.com/sport/live/2016/nov/13/f1-brazilian-grand-prix-live",
        }, {
              "webTitle": "New Zealand earthquake: evacuations as tsunami heads for east coast – live",
              "webUrl": "https://www.theguardian.com/world/live/2016/nov/14/new-zealand-earthquake-evacuations-tsnuami-east-coast-south-north-islands",
              "apiUrl": "https://content.guardianapis.com/world/live/2016/nov/14/new-zealand-earthquake-evacuations-tsnuami-east-coast-south-north-islands",
          }
    ]
  }
};

function beforeEach() {
  articles = new ArticlesModel(ArticleModel, APICallerModel);
  articles.apiCaller.requestAPI = spy.onAndReturn(function(fn) {fn(guardianAPISample);});
}

function articlesItemsAreEmpty() {
  assert.isTrue(articles.items.length === 0);
}

function articlesMakesCallToAPI() {
  articles.apiCaller.requestAPI = spy.on;
  assert.makesCall([articles, "getArticles"], [articles, "apiCaller", "requestAPI"]);
}

function articlesAddsArticleObjects() {
  articles.getArticles(function(){});
  assert.isTrue(articles.items.length > 0);
}

function articlesItemsHaveHeading() {
  articles.getArticles(function(){});
  assert.isTrue(articles.items[0].heading == "F1: Brazilian Grand Prix – live!");
}

function articlesItemsHaveURL() {
  articles.getArticles(function(){});
  assert.isTrue(articles.items[0].apiURL == "https://content.guardianapis.com/sport/live/2016/nov/13/f1-brazilian-grand-prix-live");
}

functions.forEach(function(element) {
    beforeEach();
    element();
});
