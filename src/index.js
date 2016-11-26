var ArticleModel = require('./article-model').ArticleModel;
var ArticlesModel = require('./articles-model').ArticlesModel;
var ArticlesView = require('./articles-view.js').ArticlesView;
var APICallerModel = require('./api-caller-model.js').APICallerModel;
var ArticlesController = require('./articles-controller.js').ArticlesController;

var articlesController = new ArticlesController({articleModel: ArticleModel,
                                                 articlesModel: ArticlesModel,
                                                 articlesView: ArticlesView,
                                                 apiCallerModel: APICallerModel,
                                                 articlesController: ArticlesController});

articlesController.insertHTML();
