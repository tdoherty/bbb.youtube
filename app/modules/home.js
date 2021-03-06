// Home module
define(function(require) {

  var app = require('app');
  var HomeView = require('../views/home/home');

  // Create a new module.
  var mod = app.module();

  // Default Model.
  mod.Model = Backbone.Model.extend({
  
  });

  // Default Collection.
  mod.Collection = Backbone.Collection.extend({
    model: mod.Model
  });

  // Default View.
  mod.Views.Layout = Backbone.Layout.extend({
    template: "home"
  });

  mod.Views.Home = HomeView;


  // Return the module for AMD compliance.
  return mod;

});
