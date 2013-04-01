/**
 * RequireJS Module Definition - AMD 'sugar' syntax
 */
define(function (require) {

  //module dependencies
  var $ = require('jquery');
  var Backbone = require('backbone');
  var SearchItemView = require('./searchItem');

  return Backbone.View.extend({

//------Properties------------------------------------------------------------------------------------------------------
    template: 'search/list',

//------Backbone implementations----------------------------------------------------------------------------------------
    initialize: function () {
      this.listenTo(this.collection, 'sync', this.render);
    },

//--Backbone.Layoutmanager implementations------------------------------------------------------------------------------
    beforeRender: function() {
      this.collection.each(function(item) {
        this.insertView("ul.unstyled", new SearchItemView({
          model: item
        }));
      }, this);
    },

//------Event Handlers--------------------------------------------------------------------------------------------------

//------DOM Helpers-----------------------------------------------------------------------------------------------------

  });
});
