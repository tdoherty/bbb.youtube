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

//------Backbone implementations----------------------------------------------------------------------------------------
    initialize: function () {
      this.listenTo(this.collection, 'add', this.render);
    },

//--Backbone.Layoutmanager implementations------------------------------------------------------------------------------
    beforeRender: function() {
      console.log(this.cid + ' rendered');
      this.collection.each(function(item) {
        this.insertView("ul.unstyled", new ItemView({
          model: item
        }));
      }, this);
    }

//------Event Handlers--------------------------------------------------------------------------------------------------

//------DOM Helpers-----------------------------------------------------------------------------------------------------

  });
});
