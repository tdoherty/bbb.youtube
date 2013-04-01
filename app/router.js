define(function(require) {

  var Backbone = require('backbone');
  var _ = require('lodash');
  var app = require('app');
  var search = require('modules/search');
  var nowPlaying = require('modules/nowPlaying');

  // Defining the application router, you can attach sub routers here.
  var Router = Backbone.Router.extend({

    initialize: function () {

      _.bindAll(this);

      var collections = {
        searchResults: new search.Collection(),
        relatedVideos: new nowPlaying.RelatedVideosCollection(),
        comments: new nowPlaying.CommentsCollection()
      };

      var models = {
        nowPlaying: new nowPlaying.Model(),
        searchBar: new search.SearchBarModel()
      };

      _.extend(this, collections, models);

      Backbone.on('global:search', this.onSearch, this);
    },

    routes: {
      "": "index",
      'video/:id': 'displayVideo',
      'search/:term': 'search'
    },

//--Route Handlers------------------------------------------------------------------------------------------------------
    index: function() {
      this.navigate('search/' + this.searchResults.searchTerm, {trigger: true});
    },

    displayVideo: function (id) {
      var self = this;
      if (app.layout && app.layout.options.template !== 'nowPlaying/nowPlaying-layout') {
        this.clean();
      }
      app.useLayout("nowPlaying/nowPlaying-layout").setViews({
        ".search": new nowPlaying.Views.SearchBar({ model: this.searchBar }),
        ".nowPlaying": new nowPlaying.Views.NowPlaying({ model: this.nowPlaying }),
        ".comments": new nowPlaying.Views.Comments({ collection: this.comments }),
        ".related": new nowPlaying.Views.Related({ collection: this.relatedVideos })
      }).render().then(function () {
          self.nowPlaying.videoSource = id;
          self.nowPlaying.fetch({
            dataType: 'jsonp',
            success: self.nowPlayingExtras
          });
        }
      );
    },

    search: function (term) {
      this.clean();
      app.useLayout("main-layout").setViews({
        ".search": new search.Views.SearchBar({ model: this.searchBar }),
        ".searchResults": new search.Views.List({ collection: this.searchResults })
      }).render();

      this.searchResults.searchTerm = term;
      this.searchResults.fetch({ dataType: 'jsonp' });

    },

//--Methods-------------------------------------------------------------------------------------------------------------
    nowPlayingExtras: function (model, response, options) {
      //TODO: fetch comments and related videos
      this.relatedVideos.url = model.get('id').$t + '/related' + '?format=5&alt=json-in-script';
      this.relatedVideos.fetch({ dataType: 'jsonp' });
      this.comments.url = model.get('gd$comments').gd$feedLink.href + '?format=5&alt=json-in-script';
      this.comments.fetch({ dataType: 'jsonp' });
    },

    onSearch: function(searchTerm) {
      if (app.layout.options.template === 'main-layout') {
        this.searchResults.searchTerm = searchTerm;
        this.searchResults.fetch({ dataType: 'jsonp' });
      }else {
        this.navigate('search/' + searchTerm, {trigger: true});
      }
    },

    clean: function () {
      if (app.layout) {
        //remove current child views
        app.layout.getViews().each(function (childView) {
          childView.remove();
        });

        //reset collections
        this.relatedVideos.reset();
        this.comments.reset();
      }
    }
  });

  return Router;

});
