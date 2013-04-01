// Home module
define([
  // Application.
  "app"
],

// Map dependencies from above array.
function(app) {

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

  Home.Views.TopNav = Backbone.View.extend({

  });

  Home.Views.SidebarNav = Backbone.View.extend({

  });


  // Return the module for AMD compliance.
  return Home;

});
