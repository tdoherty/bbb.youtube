// Recentvideos module
define(function(require) {

  var app = require('app');
  var RecentVideoCollection = require('../collections/nav/recentVideos');
  var RecentVideosListView = require('../views/nav/recentList');

  // Create a new module.
  var Recentvideos = app.module();

  // Default Model.
  Recentvideos.Model = Backbone.Model.extend({
  
  });

  // Default Collection.
  Recentvideos.Collection = RecentVideoCollection.extend({
    model: Recentvideos.Model
  });

  Recentvideos.Views.List = RecentVideosListView;

  // Default View.
//  Recentvideos.Views.Layout = Backbone.Layout.extend({
//    template: "recentvideos"
//  });

  // Return the module for AMD compliance.
  return Recentvideos;

});
