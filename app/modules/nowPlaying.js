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

  var mod = {
    Model: Model,
    SearchBarModel: SearchBarModel,
    RelatedVideosCollection: RelatedVideosCollection.extend({
      model: SearchResultModel
    }),
    CommentsCollection: CommentsCollection.extend({
      model: CommentModel
    }),
    Views: {
      // Default View.
      Layout: Backbone.Layout.extend({
        template: "nowPlaying/nowPlaying-layout"
      }),
      NowPlaying: NowPlayingView,
      Comments: CommentsListView,
      Related: RelatedVideosView,
      SearchBar: SearchBarView
    }
  };

  // Return the module for AMD compliance.
  return app.module(mod);

 });
