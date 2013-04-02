/**
 * RequireJS Module Definition - AMD 'sugar' syntax
 */
define(function (require) {

  //module dependencies
  var Backbone = require('backbone');
  var ItemView = require('./recentItem');

  return Backbone.View.extend({

//------Properties------------------------------------------------------------------------------------------------------
  template: 'nav/recentList',

//    tagName: 'ul',
//    className: 'nav nav-list',

//------Backbone implementations----------------------------------------------------------------------------------------
    initialize: function () {
      this.listenTo(this.collection, 'reset', function () {
        console.log('reset');
        this.render();
      });
    },

//--Backbone.Layoutmanager implementations------------------------------------------------------------------------------
    beforeRender: function() {
      this.collection.each(function(item) {
        this.insertView("ul.nav-list", new ItemView({
          model: item
        }));
      }, this);
    }

//------Event Handlers--------------------------------------------------------------------------------------------------

//------DOM Helpers-----------------------------------------------------------------------------------------------------

  });
});
