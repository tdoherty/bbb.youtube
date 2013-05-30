define(function(require) {

  var Backbone = require('backbone');
  var _ = require('lodash');
  var app = require('app');
  var home = require('modules/home');
  var search = require('modules/search');
  var nowPlaying = require('modules/nowPlaying');
  var recentVideos = require('modules/recentVideos');
  var contact = require('modules/contact');

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
//        '.navbar-inner': new home.Views.TopNav(),
        '.nav-side': new recentVideos.Views.List({ collection: this.recentVideos })
      }); //.render();
    },

    routes: {
      '': "index",
      'search': 'search',
      'search/:term': 'search',
      'video/:id': 'displayVideo',
      'contact': 'contact'
    },

//--Route Handlers------------------------------------------------------------------------------------------------------
    index: function() {
      app.layout.setView('.content', new home.Views.Home());
      if (app.layout.__manager__.hasRendered)     {
        app.layout.getView('.content').render();
      } else {
        app.layout.render();
      }
    },

    search: function (term) {
      term = term || this.searchBar.get('searchTerm');

      this.clean();
      var l = new search.Views.Layout();

      l.setViews({
        ".search": new search.Views.SearchBar({ model: this.searchBar }),
        ".searchResults": new search.Views.List({ collection: this.searchResults })
      });

      app.layout.setView('.content', l);
      if (app.layout.__manager__.hasRendered)     {
        app.layout.getView('.content').render();
      } else {
        app.layout.render();
      }

      this.searchResults.searchTerm = term;
      this.searchBar.set('searchTerm', term);

      if (term) {
        this.navigate('search/' + term, {trigger: false});
        this.searchResults.fetch();
      }
    },

    displayVideo: function (id) {
      var self = this;
      var contentView = app.layout.getView('.content');

      this.clean();

      if (!contentView || contentView.options.template !== 'nowPlaying/nowPlaying-layout'){
        var l = new nowPlaying.Views.Layout();
        l.setViews({
          ".search": new nowPlaying.Views.SearchBar({ model: this.searchBar }),
          ".nowPlaying": new nowPlaying.Views.NowPlaying({ model: this.nowPlaying }),
          ".comments": new nowPlaying.Views.Comments({ collection: this.comments }),
          ".related": new nowPlaying.Views.Related({ collection: this.relatedVideos })
        });

        app.layout.setView('.content', l);
        if (app.layout.__manager__.hasRendered)     {
          app.layout.getView('.content').render().then(getData);
          console.log('nowPlaying - content rendered');
        } else {
          app.layout.render().then(getData);
          console.log('nowPlaying - app rendered');
        }
      } else {
        getData();
      }

      function getData() {
        self.nowPlaying.videoSource = id;
        self.nowPlaying.fetch();
      }
    },

    contact: function () {
      this.clean();
      app.layout.setView('.content', new contact.Views.Contact());
      if (app.layout.__manager__.hasRendered)     {
        app.layout.getView('.content').render();
      } else {
        app.layout.render();
      }
    },

//--Event Handlers------------------------------------------------------------------------------------------------------
    onSearch: function(searchTerm) {
      var contentView = app.layout.getViews('.content');

      if (Backbone.history.fragment.indexOf('search', 0) !== -1) {
        this.searchResults.searchTerm = searchTerm;
        this.searchResults.fetch();
        this.navigate('search/' + searchTerm, {trigger: false});
      }else {
        this.navigate('search/' + searchTerm, {trigger: true});
      }
    },


//--Methods-------------------------------------------------------------------------------------------------------------
    getRelatedContent: function (model, response, options) {
      //TODO: fetch comments and related videos
      this.relatedVideos.url = model.get('id').$t + '/related' + '?format=5&alt=json-in-script';
      this.relatedVideos.fetch();
      this.comments.url = model.get('gd$comments').gd$feedLink.href + '?format=5&alt=json-in-script';
      this.comments.fetch();

      if (this.recentVideos.length >= 10) {
        this.recentVideos.pop();
      }
      this.recentVideos.unshift(new nowPlaying.Model(model.toJSON()));

      console.log('wtf');
    },

    //teardown current layout
    clean: function () {
        //reset collections
        this.relatedVideos.reset();
        this.comments.reset();
        this.searchResults.reset();
    },

    close: function () {
      this.nowPlaying.off();
      Backbone.off();
      app.layout.remove();
    }

  });

  return Router;

});
