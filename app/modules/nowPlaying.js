// Search module
define(function(require) {

  var app = require('app');
  var Model = require('../models/nowPlaying/nowPlaying');
  var SearchResultModel = require('../models/search/result');
  var CommentModel = require('../models/nowPlaying/comment');
  var RelatedVideosCollection = require('../collections/nowPlaying/related');
  var CommentsCollection = require('../collections/nowPlaying/comments');
  var SearchBarView = require('../views/search/searchBar');
  var NowPlayingView = require('../views/nowPlaying/nowPlaying');
  var SearchBarModel = require('../models/search/searchBar');
  var RelatedVideosView = require('../views/nowPlaying/relatedList');
  var CommentsListView = require('../views/nowPlaying/commentsList');

  // Create a new module.
  var Module = app.module();

  // Default Model.
  Module.Model = Model;
  Module.SearchBarModel = SearchBarModel;
  Module.RelatedVideosCollection = RelatedVideosCollection.extend({
    model: SearchResultModel
  });

  Module.CommentsCollection = CommentsCollection.extend({
    model: CommentModel
  });

  // Default View.
  Module.Views.Layout = Backbone.Layout.extend({
    template: "nowPlaying/nowPlaying-layout"
  });

  Module.Views.NowPlaying = NowPlayingView;
  Module.Views.Comments = CommentsListView;
  Module.Views.Related = RelatedVideosView;
  Module.Views.SearchBar = SearchBarView;

  // Return the module for AMD compliance.
  return Module;

});
