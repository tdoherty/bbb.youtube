define(function(require) {

  var Backbone = require('backbone');
  var _ = require('lodash');
  var app = require('app');
  var search = require('modules/search');
  var nowPlaying = require('modules/nowPlaying');
  var home = require('modules/home');
  var recentVideos = require('modules/recentVideos');

  // Defining the application router, you can attach sub routers here.
  var Router = Backbone.Router.extend({

    recentArray: [],

    initialize: function () {

      _.bindAll(this);

      var collections = {
        searchResults: new search.Collection(),
        relatedVideos: new nowPlaying.RelatedVideosCollection(),
        comments: new nowPlaying.CommentsCollection(),
        recentVideos: new recentVideos.Collection()
      };

      var models = {
        nowPlaying: new nowPlaying.Model(),
        searchBar: new search.SearchBarModel()
      };


      //make collections and models available to router
      _.extend(this, collections, models);

      this.nowPlaying.on('sync', this.getRelatedContent, this);

      Backbone.on('global:search', this.onSearch, this);

      app.useLayout('main-layout').setViews({
        '.navbar-inner': new home.Views.TopNav(),
        '.nav-side': new recentVideos.Views.List({ collection: this.recentVideos })
//        '.content': l
      }).render();
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

      var l = new nowPlaying.Views.Layout();
      l.setViews({
        ".search": new nowPlaying.Views.SearchBar({ model: this.searchBar }),
        ".nowPlaying": new nowPlaying.Views.NowPlaying({ model: this.nowPlaying }),
        ".comments": new nowPlaying.Views.Comments({ collection: this.comments }),
        ".related": new nowPlaying.Views.Related({ collection: this.relatedVideos })
      });

      app.layout.insertView('.content',l).render().then(function () {
          self.nowPlaying.videoSource = id;
          self.nowPlaying.fetch({
            dataType: 'jsonp'
          });
        }
      );
    },

    search: function (term) {
      this.clean();
      var l = new search.Views.Layout();

      l.setViews({
        ".search": new search.Views.SearchBar({ model: this.searchBar }),
        ".searchResults": new search.Views.List({ collection: this.searchResults })
      });

      app.layout.insertView('.content',l).render();

      this.searchResults.searchTerm = term;
      this.searchBar.set('searchTerm', term);
      this.searchResults.fetch({ dataType: 'jsonp' });
    },

//--Event Handlers------------------------------------------------------------------------------------------------------
    onSearch: function(searchTerm) {
      var contentView = app.layout.getViews('.content');


      if (Backbone.history.fragment.contains('search/')) {
        this.searchResults.searchTerm = searchTerm;
        this.searchResults.fetch({ dataType: 'jsonp' });
        this.navigate('search/' + searchTerm, {trigger: false});
      }else {
        this.navigate('search/' + searchTerm, {trigger: true});
      }
    },


//--Methods-------------------------------------------------------------------------------------------------------------
    getRelatedContent: function (model, response, options) {
      //TODO: fetch comments and related videos
      this.relatedVideos.url = model.get('id').$t + '/related' + '?format=5&alt=json-in-script';
      this.relatedVideos.fetch({ dataType: 'jsonp' });
      this.comments.url = model.get('gd$comments').gd$feedLink.href + '?format=5&alt=json-in-script';
      this.comments.fetch({ dataType: 'jsonp' });

      if (this.recentArray.length >= 10) {
        this.recentArray.pop();
      }
      this.recentArray.push({
        hash: model.get('source'),
        title: model.get('title').$t
      });

      this.recentVideos.reset(this.recentArray);
    },

    //teardown current layout
    clean: function () {
      if (app.layout) {
        //remove current child views
        app.layout.getViews('.content').each(function (childView) {
          if (childView) {
            childView.remove();
          }
        });

        //reset collections
        this.relatedVideos.reset();
        this.comments.reset();
        this.searchResults.reset();
      }
    },

    close: function () {
      this.nowPlaying.off();
      Backbone.off();
      app.layout.remove();
    }

  });

  return Router;

});
