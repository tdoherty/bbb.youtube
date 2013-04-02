// Home module
define(function(require) {

  var app = require('app');
  var ContactView = require('../views/contact/contact');
  var HomeView = require('../views/home/home');

  // Create a new module.
  var Home = app.module();

  // Default Model.
  Home.Model = Backbone.Model.extend({
  
  });

  // Default Collection.
  Home.Collection = Backbone.Collection.extend({
    model: Home.Model
  });

  // Default View.
  Home.Views.Layout = Backbone.Layout.extend({
    template: "home"
  });

  Home.Views.Contact = ContactView;
  Home.Views.Home = HomeView;


  // Return the module for AMD compliance.
  return Home;

});
