var articlesController = new ArticlesController({articleModel: ArticleModel,
                                                 articlesModel: ArticlesModel,
                                                 articlesView: ArticlesView,
                                                 apiCallerModel: APICallerModel,
                                                 articlesController: ArticlesController});
var functions = [insertsHTMLIntoArticlesList];
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

function insertsHTMLIntoArticlesList() {
  articlesController.articles.apiCaller.requestAPI = spy.onAndReturn(function(fn) {fn(guardianAPISample);});
  var dummyElement = document.createElement('ul');
  document.getElementById = function(test) {
    return dummyElement;
  };
  articlesController.insertHTML();
  assert.isEqual(document.getElementById("articles").innerHTML, "<li><h2>F1: Brazilian Grand Prix – live!</h2></li><li><h2>New Zealand earthquake: evacuations as tsunami heads for east coast – live</h2></li>");
}

functions.forEach(function(element) {
    element();
});
